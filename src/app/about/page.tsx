import Link from "next/link";

export default function About() {
  return <div className="h-screen flex items-center justify-center">
 <div className="flex h-fit max-w-[60%] bg-base text-lg rounded-lg text-white flex-col p-4">
<h1 className="text-2xl w-full text-center mb-4">About Set in Stone</h1>
<p className="mb-4">Set in Stone is a daily recorder on steroids. </p>

  <p className="mb-4">It comes with a <Link href="/" className="hover:text-dim transition-all">spreadsheet</Link> to mark your activities,
  a <Link href="/mood" className="hover:text-dim transition-all">mood table</Link> to record your daily mood, 
  and a <Link href="/bank" className="hover:text-dim transition-all">time bank</Link> to gamify your time management. This idea 
  wasn't mine to start with, though, so props to Bero for allowing me to web-alize your original idea on Google Sheets.</p>

<p className="mb-4">Follow the development <Link target="_blank" href="https://github.com/KhuiKhui/set-in-stone" className="hover:text-dim transition-all">here!</Link> </p>



    </div>
  </div>
 
  
}
