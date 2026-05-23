import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OBC Partner & Co – Strategic Real Estate Advisory for Institutions',
  description: 'Bespoke spatial advisory for corporations, institutions & private clients. Curated site selection, strategic negotiation, and legacy portfolio planning. Schedule your confidential consultation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-darkgray antialiased">
        {/* Skip to main content link */}
        <a
          href="#main-content"
          className="absolute top-0 left-0 p-3 bg-accent text-white transform -translate-y-full focus:translate-y-0 z-50 transition-transform"
        >
          Skip to main content
        </a>

        <header className="bg-white border-b border-stone/20 py-4 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="font-serif text-2xl font-bold text-graphite">OBC Partner <span className="text-accent">&</span> Co.</span>
            <a
              href="#contact"
              className="text-sm font-medium text-graphite hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </header>

        <main id="main-content">
          {children}
        </main>

        <footer className="bg-graphite text-white/60 text-sm py-8 px-6">
          <div className="max-w-7xl mx-auto text-center">
            © {new Date().getFullYear()} OBC Partner & Co. · Private & Institutional Spatial Advisory
          </div>
        </footer>
      </body>
    </html>
  );
}