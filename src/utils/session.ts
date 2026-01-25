'use server';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
  const cookieStore = await cookies();

  cookieStore.set('session', userId, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

export async function isInSession() {
  const cookieStore = await cookies();
  return cookieStore.get('session')?.value ?? false;
}

export async function getSessionUser() {
  const cookieStore = await cookies();
  if (cookieStore.has('session')) {
    const session = cookieStore.get('session');
    const userId = session!.value;
    if (userId !== '') {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      return user!.email;
    }
  }
}
