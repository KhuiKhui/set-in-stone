import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Set in Stone',
  description: 'Your all-purpose planner',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-fg bg-bg flex h-screen w-screen flex-col justify-between p-5 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
