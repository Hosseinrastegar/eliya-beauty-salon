import type {Metadata} from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'سالن زیبایی الیا | مرکز تخصصی عروس',
  description: 'درخششی ماندگار در رویایی‌ترین شب زندگی شما. مرکز فوق تخصصی عروس الیا در فومن به مدیریت الناز فتوت.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} dark`} suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground antialiased selection:bg-gold/30 selection:text-white overflow-x-hidden transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
