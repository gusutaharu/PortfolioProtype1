'use server';

export const sendEamil = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const content = formData.get('content') as string;
  try {
    console.log(`${name},${email},${content}`);
  } catch (error) {
    return console.log(`失敗しました${error}`);
  }
};
