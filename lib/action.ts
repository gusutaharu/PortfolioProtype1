'use server';

import { Resend } from 'resend';
import { z } from 'zod';

import { FormStateType } from './difinitions';

const ContactSchema = z.object({
  name: z
    .string()
    .min(2, { error: '名前は二文字以上入力してください' })
    .max(50, { error: '名前は五十文字以内に収めてください' }),
  email: z.email({ error: '正しいメールアドレスをご入力ください' }),
  content: z
    .string()
    .min(5, { error: '内容は５文字以上入力してください' })
    .max(500, { error: '内容は500文字以内に収めてください' }),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  prevState: FormStateType,
  formData: FormData,
) => {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    content: formData.get('content'),
  });
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: '問い合わせに失敗しました。',
    };
  }
  const { name, email, content } = validatedFields.data;
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'j.gusutahu.arufonnsu@gmail.com',
      subject: `【ポートフォリオ】${name}様より`,
      html: `<p>名前: ${name}</p><p>メール: ${email}</p><p>内容: ${content}</p>`,
    });
    return { success: true, message: '送信完了しました！' };
  } catch (error) {
    return {
      success: false,
      message: '送信に失敗しました。時間をおいて再度お試しください。',
    };
  }
};
