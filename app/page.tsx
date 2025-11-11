import { books } from '@/data/books';
import { author } from '@/data/author';

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center py-12 px-6">
      {/* Hero Section */}
      {/* <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
        {author.name}
      </h1> */}
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        {author.tagline}
      </p>
      {/* <a
        href="/books"
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors"
      >
        Explore My Books
      </a> */}

      {/* Featured Books */}
      <div className="max-w-6xl mt-10 space-y-12">
        {books.map((book, index) => (
          <div 
            key={index} 
            className={`bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30
              p-8 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
              items-center gap-8`}
          >
            <img
              src={book.cover}
              alt={`${book.title} Book Cover`}
              className="w-56 h-80 object-cover rounded-2xl shadow-lg border border-white/40"
            />
            <div className="text-left md:text-left">
              <h2 className="text-3xl font-bold text-indigo-700 mb-3">
                "{book.title}"
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {book.desc[0]}
              </p>
              <a
                href={book.title.toLowerCase() === 'you are silly' ? '/books/you-are-silly' : '/books'}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* About Author */}
      <div className="max-w-3xl mx-auto mt-20">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
          About the Author
        </h3>
        {author.bio.map((paragraph, index) => 
          <p key={index} className="text-gray-700 leading-relaxed mb-3">
            {paragraph}
          </p>
        )}
      </div>
    </main>
  );
}
