'use server';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function saveSpreadsheet(grid: string[][][]) {
  const cookieStore = await cookies();
  const userId = cookieStore.get('session')?.value;

  if (userId) {
    const storedRecordsArr = await prisma.spreadsheet.findMany({
      where: {
        userId,
      },
    });

    const storedRecords: {
      [key: string]: any; //will change
    } = {};

    for (let i = 0; i < storedRecordsArr.length; i++) {
      const x = storedRecordsArr[i].x;
      const y = storedRecordsArr[i].y;
      const index = storedRecordsArr[i].index;
      storedRecords[`[${x},${y},${index}]`] = storedRecordsArr[i];
    }
    for (let i = 0; i < grid.length; i++) {
      for (let r = 0; r < grid[i].length; r++) {
        for (let c = 0; c < 24; c++) {
          const current = storedRecords[`[${c},${r},${i}]`];

          if (grid[i][r][c] === '') {
            if (!current) continue;
            else {
              await prisma.spreadsheet.delete({
                where: {
                  id: current.id,
                  x: current.x,
                  y: current.y,
                  index: current.index,
                  value: current.value,
                  userId,
                },
              });
            }
          }

          if (!current) {
            await prisma.spreadsheet.create({
              data: {
                x: c,
                y: r,
                index: i,
                value: grid[i][r][c],
                userId,
              },
            });
          }
        }
      }
    }
  }
}

export async function generateSpreadsheet() {
  const cookieStore = await cookies();
  const userId = cookieStore.get('session')?.value;

  return userId
    ? await prisma.spreadsheet.findMany({
        where: {
          userId: userId,
        },
      })
    : [];
}
