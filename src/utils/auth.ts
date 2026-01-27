'use server';
import prisma from '@/lib/prisma';
import { createSession } from './session';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { generateSpreadsheet } from './spreadsheet';

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
      revalidatePath('/');
      redirect('/');
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
    redirect('/');
  }
}

export async function handleLogout() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}
