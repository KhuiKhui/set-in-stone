'use client';
import Form from 'next/form';
import { handleLogout } from '@/utils/auth';
import { redirect } from 'next/navigation';

function Logout() {
  return (
    <Form
      action={() => {
        localStorage.clear();
        handleLogout();
        redirect('/');
      }}
    >
      <button
        type="submit"
        className="hover:text-bright transition-transform will-change-transform hover:scale-105"
      >
        Logout
      </button>
    </Form>
  );
}

export default Logout;
