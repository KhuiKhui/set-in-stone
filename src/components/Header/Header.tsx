import Link from 'next/link';
import HeaderButton from './HeaderButton/HeaderButton';
import { deleteSession, getSessionUser, isInSession } from '@/utils/session';

async function Header() {
  const inSession = await isInSession();
  return (
    <div className="flex flex-row items-center gap-4">
      <Link
        className="hover:text-bright active:text-dim mr-4 text-4xl font-bold transition-transform ease-out will-change-transform hover:scale-105 hover:rotate-4 active:scale-110 active:rotate-0"
        href="/"
      >
        Set in Stone
      </Link>
      <HeaderButton text="Spreadsheet" href="/" />
      <HeaderButton text="Mood Table" href="/mood" />
      <HeaderButton text="Time Bank" href="/bank" />
      <HeaderButton text="About" href="/about" />
      {!inSession ? (
        <div className="text-fg ml-auto flex flex-row gap-6 text-2xl">
          <Link
            className="hover:text-bright transition-transform will-change-transform hover:scale-105"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="hover:text-bright transition-transform will-change-transform hover:scale-105"
            href="/signup"
          >
            Sign up
          </Link>
        </div>
      ) : (
        <div className="text-fg ml-auto flex flex-row gap-6 text-2xl">
          <div className="hover:text-bright cursor-default transition-transform will-change-transform hover:scale-105">
            {getSessionUser()}
          </div>
          <form action={deleteSession}>
            <button
              type="submit"
              className="hover:text-bright transition-transform will-change-transform hover:scale-105"
            >
              Logout
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Header;
