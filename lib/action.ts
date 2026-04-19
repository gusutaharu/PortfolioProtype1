'use server';

import { z } from 'zod';

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

export const sendEmail = async (formData: FormData) => {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    content: formData.get('content'),
  });
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { name, email, content } = validatedFields.data;
  try {
    console.log(`${name},${email},${content}`);
  } catch (error) {
    return {
      success: false,
      message: '送信に失敗しました。時間をおいて再度お試しください。',
    };
  }
};
