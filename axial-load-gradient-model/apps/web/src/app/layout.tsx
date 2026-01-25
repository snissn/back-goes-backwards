import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif"
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Axial Load Gradient Model",
  description: "Mechanics-first model for load routing and gradient states."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-stone-50 text-stone-900">
        <div className="min-h-screen">
          <header className="border-b border-stone-200 bg-white">
            <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4">
              <div className="text-lg font-semibold tracking-tight">ALGM</div>
              <nav className="flex gap-4 text-sm">
                <a className="hover:underline" href="/">
                  Home
                </a>
                <a className="hover:underline" href="/model">
                  Model
                </a>
                <a className="hover:underline" href="/tests">
                  Tests
                </a>
                <a className="hover:underline" href="/wizard">
                  Wizard
                </a>
                <a className="hover:underline" href="/training">
                  Training
                </a>
                <a className="hover:underline" href="/limitations">
                  Limitations
                </a>
              </nav>
            </div>
          </header>
          <main className="mx-auto w-full max-w-4xl px-6 py-10">
            <article className="prose prose-stone max-w-none">
              {children}
            </article>
          </main>
        </div>
      </body>
    </html>
  );
}
