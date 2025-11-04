import { books } from '@/data/books';
import { author } from '@/data/author';

export default function Books() {
  
    return (
      <main className="flex flex-col items-center text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">Books by {author.name}</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-20">
          {books.map((b, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2 text-center">{b.title}</h3>
              <div className="flex justify-center mb-4">
                <img
                  src={b.cover}
                  alt="Featured Book Cover"
                  className="w-56 h-80 object-cover rounded-2xl shadow-lg border border-white/40"
                />
              </div>
              {b.desc.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-2">{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </main>
    );
  }
  