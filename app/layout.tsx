import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Rift University | Learn. Innovate. Lead.',
  description:
    'The Rift University (TRU) is an African-rooted university platform for future-focused learning, innovation, and leadership.',
  metadataBase: new URL('http://localhost:3000'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
