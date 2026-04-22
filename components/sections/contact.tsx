'use client';

import { Turnstile } from '@marsidev/react-turnstile';
import { useActionState } from 'react';

import { sendEmail } from '@/lib/action';
import { FormStateType } from '@/lib/difinitions';

const initialState: FormStateType = {
  success: false,
  message: '',
};

export const Contact = () => {
  const [state, sendEmailAction, isPending] = useActionState(
    sendEmail,
    initialState,
  );
  return (
    <section>
      <h2 className="section-title">Contact</h2>
      {state.message && (
        <p className="mb-3 font-semibold text-red-500">{state.message}</p>
      )}
      <div className="contact-area">
        <form action={sendEmailAction}>
          {state.errors?.name && (
            <p className="text-xs text-red-500">{state.errors.name}</p>
          )}
          <input
            type="text"
            name="name"
            placeholder="name"
            disabled={isPending}
          />
          {state.errors?.email && (
            <p className="text-xs text-red-500">{state.errors.email}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="email"
            disabled={isPending}
          />
          {state.errors?.content && (
            <p className="text-xs text-red-500">{state.errors.content}</p>
          )}
          <textarea
            name="content"
            placeholder="message"
            disabled={isPending}
          ></textarea>
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            options={{
              theme: 'light',
            }}
          />
          <button type="submit" className="submit-btn" disabled={isPending}>
            {isPending ? '送信中...' : '送信'}
          </button>
        </form>
      </div>
    </section>
  );
};
