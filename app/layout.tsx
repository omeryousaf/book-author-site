'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { author } from '@/data/author';
import { books } from '@/data/books';
import { useEffect, useRef, useState } from "react";

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
  initial: { opacity: 0, scale: 0.98, y: 300 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: -300 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<React.ReactNode>(null);
  const [isBooksDropdownOpen, setIsBooksDropdownOpen] = useState(false);
  const booksDropdownRef = useRef<HTMLAnchorElement | null>(null);
  const booksMenuId = 'books-menu';
  const pathname = usePathname();
  const router = useRouter();

  // Function to generate slug from book title
  const getBookSlug = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  useEffect(() => {
    const shouldUseAnimations = typeof window !== 'undefined' && Math.random() * 10 > 5;
    console.log(`Framer Motion Based animation: ${shouldUseAnimations}`)

    if (shouldUseAnimations) {
      setContent(
        <>
          <AnimatePresence mode="wait">
            <motion.main
              key={typeof window !== 'undefined' ? window.location.pathname : ''}
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.8, ease: "easeOut" }}
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
              animate={{ opacity: 1, transition: { delay: 1.9 } }}
              className="text-sm tracking-wide"
            >
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-indigo-600">{author.name}</span>. All rights reserved.
            </motion.p>
          </footer>
        </>
      );
    } else {
      setContent(
        <>
          <main
            key={typeof window !== 'undefined' ? window.location.pathname : ''}
            className="min-h-[80vh] flex justify-center px-6 rise"
          >
            <div className="max-w-5xl w-full bg-white/60 backdrop-blur-2xl shadow-2xl rounded-3xl p-10 my-16 border border-white/40">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="py-8 bg-white/40 backdrop-blur-md text-center text-gray-600 border-t border-white/30">
            <p className="text-sm tracking-wide">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-indigo-600">{author.name}</span>. All rights reserved.
            </p>
          </footer>
        </>
      );
    }
  }, []);
  return (
    <html lang="en">
      <body
        className={`min-h-screen overflow-x-hidden relative text-gray-900 ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* Animated gradient background */}
        <div className={`absolute inset-0 -z-10 ${/* animate-gradient */''} bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.25)_0%,transparent_70%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.25)_0%,transparent_70%)]`}></div>

        {/* Header */}
        <header className="py-6 shadow bg-white/40 backdrop-blur-md sticky top-0 z-50 border-b border-white/30">
          <div className="container mx-auto flex items-start px-6">
             <Link
               href="/"
               className="text-3xl font-extrabold text-indigo-600 tracking-tight hover:scale-105 transition-transform max-[500px]:basis-[100px] mr-auto"
             >
               {author.name}
             </Link>
            <nav className="text-lg font-medium grid grid-cols-[repeat(3,70px)] gap-x-3 items-start min-[700px]:gap-x-8 justify-items-start">
              {/* Home */}
              <Link
                href="/"
                className="relative group leading-[2.25rem]"
              >
                <span className={`transition-colors ${pathname === '/' ? 'text-indigo-600' : 'hover:text-indigo-600'}`}>Home</span>
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              <Link
                ref={booksDropdownRef}
                href="/books"
                className="relative group leading-[2.25rem]"
                onMouseEnter={() => setIsBooksDropdownOpen(true)}
                onMouseLeave={() => setIsBooksDropdownOpen(false)}
                onClick={(e) => {
                  e.preventDefault(); // prevent navigation
                }}
                onFocus={(e) => {
                  // open when any child receives focus
                  setIsBooksDropdownOpen(true);
                }}
                onBlur={(e) => {
                  // close only if the next focused element is outside the dropdown
                  const next = e.relatedTarget as Node | null;
                  if (next && booksDropdownRef.current?.contains(next)) return;
                  setIsBooksDropdownOpen(false);
                }}
              >
                <span className={`transition-colors ${pathname.startsWith('/books') ? 'text-indigo-600' : 'hover:text-indigo-600'}`}>Books</span>
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 transition-all duration-300 ${pathname.startsWith('/books') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="relative group leading-[2.25rem]"
              >
                <span className={`transition-colors ${pathname === '/contact' ? 'text-indigo-600' : 'hover:text-indigo-600'}`}>Contact</span>
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 transition-all duration-300 ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              {/* Books Dropdown - Second Row */}
              <AnimatePresence initial={false}>
                {isBooksDropdownOpen && (
                  <motion.div
                    className="col-start-2 col-end-[-1] pt-2"
                    onMouseEnter={() => setIsBooksDropdownOpen(true)}
                    onMouseLeave={() => setIsBooksDropdownOpen(false)}
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    key="books-subnav"
                  >
                    <motion.div
                      id={booksMenuId}
                      role="menu"
                      aria-label="Books"
                      className="rounded-lg py-2 min-w-0"
                      layout
                    >
                      {books.map((book) => {
                        const slug = getBookSlug(book.title);
                        const bookPath = `/books/${slug}`;
                        const isActiveBook = pathname === bookPath;
                        return (
                          <button
                            key={book.title}
                            type="button"
                            role="menuitem"
                            className={`flex w-full gap-2 text-left pr-4 pl-0 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm min-w-0 ${isActiveBook ? 'bg-indigo-100 text-indigo-700' : 'text-indigo-600 hover:text-indigo-700'}`}
                            onClick={() => {
                              setIsBooksDropdownOpen(false);
                              router.push(bookPath);
                            }}
                          >
                            <span aria-hidden="true" className="flex-shrink-0">📘</span>
                            <span className="break-words whitespace-normal hover:underline">{book.title}</span>
                          </button>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </div>
        </header>

        {/* Page transition animation */}
        {content}
      </body>
    </html>
  );
}
