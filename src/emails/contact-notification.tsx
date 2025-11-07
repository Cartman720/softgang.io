import * as React from 'react';
import { Html, Head, Body, Container, Heading, Text, Hr } from '@react-email/components';

interface ContactNotificationEmailProps {
  fullName: string;
  email: string;
  message?: string;
}

export function ContactNotificationEmail({ fullName, email, message }: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <Container style={{ margin: '24px auto', padding: '24px', border: '2px solid #000', borderRadius: 8, maxWidth: 600 }}>
          <Heading as="h2">New lead just dropped in 👋</Heading>
          <Text style={{ marginTop: 0 }}>Someone knocked on SoftGang’s door. Time to say hi back.</Text>
          <Hr />
          <Text>
            <strong>Name:</strong> {fullName}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          {message ? (
            <>
              <Text style={{ marginTop: 16 }}><strong>Message:</strong></Text>
              <Text style={{ whiteSpace: 'pre-wrap' }}>{message}</Text>
            </>
          ) : null}
          <Hr />
          <Text style={{ color: '#666' }}>
            Delivered by SoftGang’s friendly bots • Let’s keep our 24‑hour promise 🚀
          </Text>
        </Container>
      </Body>
    </Html>
  );
}


