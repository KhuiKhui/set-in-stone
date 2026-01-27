import Link from 'next/link';

export default function About() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-base flex h-fit max-w-[60%] flex-col rounded-lg p-4 text-lg text-white">
        <h1 className="mb-4 w-full text-center text-2xl">About Set in Stone</h1>
        <p className="mb-4">Set in Stone is a daily recorder on steroids. </p>

        <p className="mb-4">
          It comes with a{' '}
          <Link href="/" className="hover:text-dim transition-all">
            spreadsheet
          </Link>{' '}
          to mark your activities, a{' '}
          <Link href="/mood" className="hover:text-dim transition-all">
            mood table
          </Link>{' '}
          to record your daily mood, and a{' '}
          <Link href="/bank" className="hover:text-dim transition-all">
            time bank
          </Link>{' '}
          to gamify your time management. This idea wasn't mine to start with,
          though, so props to Bero (nkgiabao) for allowing me to web-alize your
          original idea on Google Sheets.
        </p>

        <p className="mb-4">
          Follow the development{' '}
          <Link
            target="_blank"
            href="https://github.com/KhuiKhui/set-in-stone"
            className="hover:text-dim transition-all"
          >
            here!
          </Link>{' '}
        </p>
      </div>
    </div>
  );
}
