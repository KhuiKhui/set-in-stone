'use server';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';

export default async function saveSpreadsheet(
  len: number,
  x: number,
  y: number,
  value: string,
) {
  const cookieStore = await cookies();
  const userId = cookieStore.get('session')?.value;

  if (userId) {
    for (let i = 0; i < len; i++) {
      await prisma.spreadsheet.create({
        data: {
          x,
          y,
          value,
          userId,
        },
      });
    }
  }
}
