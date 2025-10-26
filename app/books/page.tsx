import { books } from '@/data/books';
import { author } from '@/data/author';

export default function Books() {
  
    return (
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <section className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-8 text-indigo-600">Books by {author.name}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
        </section>
      </main>
    );
  }
  