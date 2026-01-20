import type { Metadata } from 'next';
import './globals.css';

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
      <body className="text-fg bg-bg antialiased">{children}</body>
    </html>
  );
}
