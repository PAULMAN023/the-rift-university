import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Rift University | Learn. Innovate. Lead.',
  description: 'The Rift University (TRU) is an African-rooted online university platform for future-focused learning, innovation, and leadership.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
