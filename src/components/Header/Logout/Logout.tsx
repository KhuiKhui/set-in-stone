'use client';
import Form from 'next/form';
import { handleLogout } from '@/utils/auth';

function Logout() {
  return (
    <Form
      action={() => {
        handleLogout();
        localStorage.clear();
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
