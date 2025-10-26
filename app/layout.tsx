'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { author } from '@/data/author';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: `${process.env.NEXT_PUBLIC_AUTHOR_NAME} | ${process.env.NEXT_PUBLIC_AUTHOR_TITLE}`,
//   description: process.env.NEXT_PUBLIC_AUTHOR_DESCRIPTION,
// };

const pageTransition = {
  initial: { opacity: 0, scale: 0.98, y: 15 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: -15 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen overflow-x-hidden relative text-gray-900 ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10 animate-gradient bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.25)_0%,transparent_70%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.25)_0%,transparent_70%)]"></div>

        {/* Header */}
        <header className="py-6 shadow bg-white/40 backdrop-blur-md sticky top-0 z-50 border-b border-white/30">
          <div className="container mx-auto flex justify-between items-center px-6">
             <Link
               href="/"
               className="text-3xl font-extrabold text-indigo-600 tracking-tight hover:scale-105 transition-transform"
             >
               {author.name}
             </Link>
            <nav className="space-x-6 text-lg font-medium">
              {['Home', 'Books', 'Contact'].map((label) => {
                const href = label === 'Home' ? '/' : `/${label.toLowerCase()}`;
                return (
                  <Link
                    key={label}
                    href={href}
                    className="relative group"
                  >
                    <span className="hover:text-indigo-600 transition-colors">{label}</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>

        {/* Page transition animation */}
        <AnimatePresence mode="wait">
           <motion.main
             key={typeof window !== 'undefined' ? window.location.pathname : ''}
             variants={pageTransition}
             initial="initial"
             animate="animate"
             exit="exit"
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="min-h-[80vh] flex justify-center px-6"
           >
            <div className="max-w-5xl w-full bg-white/60 backdrop-blur-2xl shadow-2xl rounded-3xl p-10 my-16 border border-white/40">
              {children}
            </div>
          </motion.main>
        </AnimatePresence>

        {/* Footer */}
        <footer className="py-8 bg-white/40 backdrop-blur-md text-center text-gray-600 border-t border-white/30">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6 } }}
            className="text-sm tracking-wide"
          >
             © {new Date().getFullYear()}{" "}
             <span className="font-semibold text-indigo-600">{author.name}</span>. All rights reserved.
          </motion.p>
        </footer>
      </body>
    </html>
  );
}
