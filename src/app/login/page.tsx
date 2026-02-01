'use client';
import Button from '@/components/Button/Button';
import Form from 'next/form';
import Input from '@/components/Input/Input';
import { handleLogin } from '@/utils/auth';
import { isInSession } from '@/utils/session';
import { useEffect, useState } from 'react';
import cn from '@/utils/cn';
import { useSetAtom } from 'jotai';
import { gridAtom } from '@/store';
import { produce } from 'immer';
import { generateSpreadsheet } from '@/utils/spreadsheet';
import { getDays } from '@/utils/days';
import { redirect } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setGrid = useSetAtom(gridAtom);

  const disabled = email === '' || password === '';

  async function authInit() {
    const inSession = await isInSession();
    if (inSession) {
      const spreadsheetRecords = await generateSpreadsheet();
      setGrid(
        produce((draft: string[][][]) => {
          for (let i = 0; i < spreadsheetRecords.length; i++) {
            const c = spreadsheetRecords[i].x;
            const r = spreadsheetRecords[i].y;
            const index = spreadsheetRecords[i].index;
            const value = spreadsheetRecords[i].value;
            let month = 0;
            let year = 2026;
            while (index > draft.length - 1) {
              draft.push(
                Array.from(
                  {
                    length: getDays(month + 1, year),
                  },
                  () => Array.from({ length: 24 }, () => ''),
                ),
              );
              month += 1;
              if (month > 11) {
                year += 1;
                month = 0;
              }
            }
            draft[index][r][c] = value;
          }
          localStorage.setItem('spreadsheet', JSON.stringify(draft));
        }),
      );
    }
  }

  useEffect(() => {
    async function regenGrid() {
      await authInit();
    }

    regenGrid();
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 text-lg text-white">
      <Form
        action={(data: FormData) => {
          handleLogin(data);
          authInit();

          redirect('/');
        }}
        className="flex flex-col items-center justify-center gap-8"
      >
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          type="text"
          autoComplete="off"
          placeholder="Email"
        />
        <Input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Password"
        />
        <Button
          disabled={disabled}
          text="Login"
          type="submit"
          className="min-w-28 disabled:bg-gray-700"
          backClassName={cn('px-4 py-2', {
            'bg-gray-500': disabled,
          })}
        />
      </Form>
    </div>
  );
}
