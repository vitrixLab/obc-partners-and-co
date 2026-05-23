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
  title: 'OBC Partner & Co – Private Counsel for Generational Estates',
  description:
    'Curated spatial advisory for corporations, institutions & private clients. Bespoke site selection, strategic negotiation, and legacy portfolio planning. Schedule your confidential consultation.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#fafaf8] text-[#6b6b6b] antialiased">
        
        {/* ── Skip to main content ── */}
        <a
          href="#main-content"
          className="absolute top-0 left-0 px-6 py-3 bg-[#c4a962] text-[#1a1a1a] text-sm font-medium tracking-wide transform -translate-y-full focus:translate-y-0 z-50 transition-transform rounded-br-sm"
        >
          Skip to main content
        </a>

        {/* ── Header ── */}
        <header className="relative bg-white border-b border-[#d4c5a0]/30">
          {/* Top ornamental rule */}
          <div className="h-[2px] bg-[#c4a962]" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex justify-between items-center">
            {/* Brand mark */}
            <a href="#" className="group flex items-center gap-1 no-underline">
              <span className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a1a] tracking-tight">
                OBC Partner
              </span>
              <span className="font-serif text-2xl md:text-3xl font-bold text-[#c4a962] mx-0.5">
                &
              </span>
              <span className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a1a] tracking-tight">
                Co.
              </span>
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#benefits"
                className="text-sm tracking-wider uppercase text-[#6b6b6b] hover:text-[#c4a962] transition-colors duration-300"
              >
                Our Distinction
              </a>
              <a
                href="#case-studies"
                className="text-sm tracking-wider uppercase text-[#6b6b6b] hover:text-[#c4a962] transition-colors duration-300"
              >
                Engagements
              </a>
              <a
                href="#faq"
                className="text-sm tracking-wider uppercase text-[#6b6b6b] hover:text-[#c4a962] transition-colors duration-300"
              >
                Insights
              </a>
              <a
                href="#contact"
                className="inline-block border border-[#c4a962] text-[#c4a962] text-sm tracking-wider uppercase px-5 py-2.5 rounded-sm hover:bg-[#c4a962] hover:text-white transition-all duration-300 font-medium"
              >
                Enquire
              </a>
            </nav>

            {/* Mobile contact link */}
            <a
              href="#contact"
              className="md:hidden text-sm font-medium text-[#c4a962] border border-[#c4a962] px-4 py-2 rounded-sm hover:bg-[#c4a962] hover:text-white transition-all duration-300"
            >
              Enquire
            </a>
          </div>
        </header>

        {/* ── Main Content ── */}
        <main id="main-content">
          {children}
        </main>

        {/* ── Footer ── */}
        <footer className="relative bg-[#1a1a1a] text-[#a0a0a0] text-sm">
          {/* Top gold rule */}
          <div className="h-[2px] bg-[#c4a962]" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Brand */}
              <div>
                <span className="font-serif text-xl font-bold text-white tracking-tight">
                  OBC Partner <span className="text-[#c4a962]">&</span> Co.
                </span>
                <p className="mt-3 text-sm leading-relaxed text-[#888]">
                  Private & Institutional Spatial Advisory. Curated real estate counsel for generational estates, corporations, and family offices.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xs tracking-[.2em] uppercase text-[#c4a962] mb-4 font-medium">
                  Navigate
                </h4>
                <ul className="space-y-3">
                  <li><a href="#benefits" className="hover:text-white transition-colors duration-300">Our Distinction</a></li>
                  <li><a href="#case-studies" className="hover:text-white transition-colors duration-300">Selected Engagements</a></li>
                  <li><a href="#faq" className="hover:text-white transition-colors duration-300">Frequently Asked Questions</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors duration-300">Start a Conversation</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-xs tracking-[.2em] uppercase text-[#c4a962] mb-4 font-medium">
                  Legal
                </h4>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-300">ISO 27001 Aligned</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#666]">
              <div>
                © {new Date().getFullYear()} OBC Partner & Co. · All rights reserved.
              </div>
              <div className="flex items-center gap-1">
                <span>Originate</span>
                <span className="text-[#c4a962] mx-2">·</span>
                <span>Balance</span>
                <span className="text-[#c4a962] mx-2">·</span>
                <span>Curate</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}