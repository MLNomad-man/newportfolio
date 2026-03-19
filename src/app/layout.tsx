import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Md Meraj Ansari | Portfolio',
  description: 'Personal portfolio of Md Meraj Ansari, Innovator & Tech Enthusiast, B.Tech student at Symbiosis Institute of Technology.',
  keywords: ['Md Meraj Ansari', 'Portfolio', 'AI/ML', 'Developer', 'Symbiosis'],
  openGraph: {
    title: 'Md Meraj Ansari | Portfolio',
    description: 'Personal portfolio highlighting projects, skills, and achievements.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${outfit.className} antialiased bg-black text-white selection:bg-fuchsia-500/30`}>
        {children}
      </body>
    </html>
  );
}
