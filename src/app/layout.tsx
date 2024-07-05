import type { Metadata } from 'next';
import { Be_Vietnam_Pro as FontSans } from 'next/font/google';
import './globals.css';

const vietnam_pro = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Gemini',
  description: 'Gemini AI Chatbot',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vietnam_pro.className}>{children}</body>
    </html>
  );
}
