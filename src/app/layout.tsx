import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

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
  icons: {
    icon: '/favicon.ico',      // Replace with your own monogram later
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-darkgray antialiased">
        {/* Skip to main content */}
        <a
          href="#main-content"
          className="absolute top-0 left-0 p-3 bg-accent text-white transform -translate-y-full focus:translate-y-0 z-50 transition-transform"
        >
          Skip to main content
        </a>

        <header className="bg-white border-b border-stone/20 py-4 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="font-serif text-2xl font-bold text-graphite">
              OBC Partner <span className="text-accent">&</span> Co.
            </span>
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

        <footer className="bg-graphite text-white/60 text-sm py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              © {new Date().getFullYear()} OBC Partner & Co. · Private & Institutional Spatial Advisory
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}