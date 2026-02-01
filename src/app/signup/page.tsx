'use client';
import Button from '@/components/Button/Button';
import Form from 'next/form';
import Input from '@/components/Input/Input';
import { handleSignup } from '@/utils/auth';
import { useState } from 'react';
import cn from '@/utils/cn';
import { redirect } from 'next/navigation';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const disabled =
    email === '' || password !== confirmPassword || password === '';

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 text-lg text-white">
      <Form
        action={(data: FormData) => {
          handleSignup(data);
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
          placeholder="Email"
          autoFocus
        />
        <Input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Input
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          className={cn({
            'outline-red-700 focus:outline-red-500':
              password !== confirmPassword,
          })}
        />
        <Button
          disabled={disabled}
          text="Sign up"
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
