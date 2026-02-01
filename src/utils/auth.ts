'use server';
import prisma from '@/lib/prisma';
import { createSession } from './session';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

export async function handleLogin(data: FormData) {
  const email = data.get('email') as string;
  const password = data.get('password') as string;

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (user) {
    const authenticated = bcrypt.compareSync(password, user.password);
    if (authenticated) {
      await createSession(user.id);
    }
  }
}

export async function handleSignup(data: FormData) {
  const email = data.get('email') as string;
  const password = await bcrypt.hash(data.get('password') as string, 10);

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    await createSession(newUser.id);
  }
}

export async function handleLogout() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
  localStorage.removeItem('spreadsheet');
}
