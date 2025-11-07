'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { cn } from '@/lib/utils';
import { Input } from '@/components/retroui/Input';
import { Button } from '@/components/retroui/Button';
import { Loader } from '@/components/retroui/Loader';
import { Step } from './step';
import { ArrowRight, PartyPopper } from 'lucide-react';

interface SubmitResult {
  ok: boolean;
  id?: string;
  error?: string;
}

interface ContactFormProps {
  action: (prevState: SubmitResult | undefined, formData: FormData) => Promise<SubmitResult>;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      className={cn('h-12 min-h-[48px] w-full', 'sm:self-start')}
      disabled={pending}
    >
      {pending ? (
        <span className={cn('inline-flex items-center gap-2')}>
          <Loader size="sm" variant="outline" />
          Submitting...
        </span>
      ) : (
        'Send'
      )}
    </Button>
  );
}

export function ContactForm({ action }: ContactFormProps) {
  const [state, formAction] = useFormState<SubmitResult, FormData>(action, { ok: false });
  if (state?.ok && !state?.error) {
    return (
      <div className={cn('mx-auto max-w-3xl text-center')}>
        <div
          className={cn(
            'rounded border-4 border-black bg-white',
            'px-4 py-8 md:px-6 md:py-10'
          )}
        >
          <div
            className={cn(
              'font-head font-semibold',
              'text-2xl lg:text-3xl'
            )}
          >
            Thanks, we are already on the way to respond!
          </div>
          <div className={cn('mt-6')}>
            <Button
              type="button"
              size="lg"
              className={cn('w-full sm:w-auto')}
              onClick={() => window.location.reload()}
            >
              Wanna send more?
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div
        className={cn(
          'mx-auto mb-8 flex max-w-3xl items-center justify-center',
          'flex-col sm:flex-row',
          'gap-2 sm:gap-4'
        )}
        aria-label="Steps"
      >
        <Step number={1} label="Leave your email" className={cn('w-full sm:w-auto', 'bg-[#BDE0FE]')} />
        <ArrowRight className={cn('hidden sm:block')} />
        <Step number={2} label="We contact you in 24 hours" className={cn('w-full sm:w-auto', 'bg-[#FFF2B2]')} />
        <ArrowRight className={cn('hidden sm:block')} />
        <Step
          number={3}
          label="Kick off journey!"
          className={cn('w-full sm:w-auto', 'bg-[#C4FF83]')}
          rightIcon={<PartyPopper size={16} />}
        />
      </div>
      <form
        action={formAction}
        className={cn('mx-auto flex w-full max-w-md flex-col items-stretch gap-4')}
      >
      <div className={cn('flex flex-col gap-4')}>
        <Input
          name="fullName"
          type="text"
          placeholder="Your full name"
          required
          aria-label="Full name"
          className={cn('h-12 min-h-[48px] bg-white', 'flex-1')}
        />
        <Input
          name="email"
          type="email"
          placeholder="your@email.com"
          required
          aria-label="Email address"
          className={cn('h-12 min-h-[48px] bg-white', 'flex-1')}
        />
      </div>
      <textarea
        name="message"
        placeholder="Optional message"
        aria-label="Message (optional)"
        className={cn(
          'h-24 w-full resize-none',
          'rounded border-2 border-black bg-white',
          'px-4 py-2',
          'shadow-md transition focus:shadow-xs focus:outline-hidden',
          'placeholder:text-gray-500'
        )}
      />
      {state?.error ? (
        <div
          className={cn(
            'rounded border-2 border-black',
            'bg-red-100 text-red-800',
            'px-4 py-2'
          )}
        >
          Opps something happened
        </div>
      ) : null}
      <SubmitButton />
      </form>
    </>
  );
}


