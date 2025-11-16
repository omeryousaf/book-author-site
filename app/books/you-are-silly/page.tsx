import Link from "next/link";
import { books } from "@/data/books";

export default function YouAreSillyPage() {
  const book = books.find((b) => b.title.toLowerCase() === "you are silly");

  if (!book) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Book not found</h1>
        <p className="text-neutral-600">Please go back and try again.</p>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-2/5">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/40 bg-white/70 backdrop-blur-xl">
            {/* Using img instead of next/image to avoid domain config */}
            <img
              src={book.cover}
              alt={`${book.title} cover`}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-3/5 space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary-700">{book.title}</h1>
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            {book.desc.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {book.purchaseLinks && book.purchaseLinks.length > 0 && (
            <section className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Order from</h2>
              <ul className="flex flex-wrap gap-3">
                {book.purchaseLinks.map(({ label, url }, idx) => (
                  <li key={idx}>
                    <Link
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-full border border-primary-300 text-primary-700 bg-primary-50 hover:bg-primary-100 hover:border-primary-400 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}


