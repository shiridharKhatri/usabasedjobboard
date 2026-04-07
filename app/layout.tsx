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
      <body className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex">
        {/* Sidebar */}
        <aside className="w-[220px] fixed h-screen p-8 flex flex-col gap-12 border-r border-transparent">
          <Link href="/" className="text-xl font-serif tracking-tight font-medium mb-4">
            Stateside Careers
          </Link>
          
          <nav className="flex flex-col gap-4 text-sm tracking-wide text-[#666]">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/jobs" className="hover:text-black transition-colors">Browse Jobs</Link>
            <Link href="/post-job" className="hover:text-black transition-colors">Post Job / Post Article</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
          </nav>

          <div className="mt-auto">
            <p className="text-[10px] text-[#999] uppercase tracking-widest leading-loose">
              &copy; {new Date().getFullYear()}<br />
              Stateside Careers
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-[220px] p-8 max-w-4xl">
          {children}
        </main>
      </body>
    </html>
  );
}
