import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stateside Careers | Simplified US Job Board",
  description: "A minimalist job board for American employers and professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        <header className="max-w-[1100px] mx-auto px-6 pt-12 pb-24">
          <div className="flex justify-between items-baseline">
            <Link href="/" className="text-2xl font-serif tracking-tight font-medium">
              Stateside Careers
            </Link>
            <nav className="flex gap-8 text-sm font-medium uppercase tracking-widest text-[#666]">
              <Link href="/jobs" className="hover:text-black transition-colors">Browse</Link>
              <Link href="/post-job" className="hover:text-black transition-colors">Post a Job</Link>
              <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-[1100px] mx-auto px-6 pb-24">
          {children}
        </main>

        <footer className="max-w-[1100px] mx-auto px-6 pb-12 mt-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} Stateside Careers. Built for clarity.
          </p>
        </footer>
      </body>
    </html>
  );
}
