import Link from 'next/link';
import HeaderButton from './HeaderButton/HeaderButton';

function Header() {
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
    </div>
  );
}

export default Header;
