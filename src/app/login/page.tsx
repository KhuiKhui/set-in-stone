'use client';
import Button from '@/components/Button/Button';
import Form from 'next/form';
import Input from '@/components/Input/Input';
import { handleLogin } from '@/utils/auth';
import { useState } from 'react';
import cn from '@/utils/cn';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const disabled = email === '' || password === '';
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 text-lg text-white">
      <Form
        action={handleLogin}
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
