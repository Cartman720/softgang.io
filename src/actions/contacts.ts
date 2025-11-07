
'use server';

import { CosmosClient } from '@azure/cosmos';
import { EmailClient } from '@azure/communication-email';
import { randomUUID } from 'node:crypto';

interface SubmitContactInput {
  fullName: string;
  email: string;
  message?: string;
}

interface SubmitContactResult {
  ok: boolean;
  id?: string;
  error?: string;
}

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export async function submitContact(input: SubmitContactInput): Promise<SubmitContactResult> {
  const fullName = (input.fullName || '').trim();
  const email = (input.email || '').trim().toLowerCase();
  const message = (input.message || '').trim();

  if (!fullName || !email) {
    return { ok: false, error: 'Full name and email are required.' };
  }

  try {
    // Persist to Azure Cosmos DB
    const databaseId = getEnv('AZURE_COSMOS_DATABASE_ID');
    const containerId = getEnv('AZURE_COSMOS_CONTAINER_ID');

    // Prefer single connection string if available, otherwise use endpoint/key
    const connectionString = process.env.AZURE_COSMOS_CONNECTION_STRING;
    const cosmos =
      connectionString && connectionString.trim().length > 0
        ? new CosmosClient(connectionString)
        : new CosmosClient({
            endpoint: getEnv('AZURE_COSMOS_ENDPOINT'),
            key: getEnv('AZURE_COSMOS_KEY'),
          });
    const container = cosmos.database(databaseId).container(containerId);

    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const item = {
      id,
      fullName,
      email,
      message,
      createdAt,
      source: 'softgang-website',
      // Ensure your container uses /email as the partition key
      partitionKey: email,
    };

    await container.items.create(item, { disableAutomaticIdGeneration: true });

    // Send notification email using Azure Communication Services (ACS)
    const acsConnection = getEnv('AZURE_COMMUNICATION_CONNECTION_STRING');
    const toAddressesRaw = getEnv('CONTACTS_NOTIFICATION_TO');
    const fromAddress = getEnv('CONTACTS_NOTIFICATION_FROM'); // Verified ACS sender
    const toAddresses = toAddressesRaw
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const emailClient = new EmailClient(acsConnection);
    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    const html = `
      <div style="margin:24px auto;max-width:600px;border:2px solid #000;border-radius:8px;padding:24px;font-family:sans-serif">
        <h2 style="margin-top:0">New Contact Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${
          message
            ? `<div style="margin-top:12px"><strong>Message:</strong><div style="white-space:pre-wrap;margin-top:4px">${escapeHtml(
                message
              )}</div></div>`
            : ''
        }
        <hr style="margin:16px 0;border:none;border-top:1px solid #ddd" />
        <p style="color:#666">Sent automatically by SoftGang site.</p>
      </div>
    `;

    const poller = await emailClient.beginSend({
      senderAddress: fromAddress,
      recipients: { to: toAddresses.map((address) => ({ address })) },
      content: {
        subject: 'New Contact Submission',
        html,
        plainText: `New contact submission\nName: ${fullName}\nEmail: ${email}\nMessage: ${message || '-'}`,
      },
    });
    await poller.pollUntilDone();

    return { ok: true, id };
  } catch (err: any) {
    return { ok: false, error: err?.message || 'Unknown error' };
  }
}

// Server Action adapter for useFormState (prevState, formData) signature
export async function submitContactFormAction(
  _prevState: SubmitContactResult | undefined,
  formData: FormData
): Promise<SubmitContactResult> {
  'use server';
  const fullName = String(formData.get('fullName') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();
  return submitContact({ fullName, email, message });
}


