import { author } from '@/data/author';

export default function Contact() {
    return (
      <main className="min-h-screen text-gray-900">
        <section className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600">Contact {author.name}</h2>
          <p className="max-w-xl mx-auto text-gray-700 mb-8">
            For event invitations, collaborations, or reader messages, please reach out below.
          </p>
          <form className="max-w-md mx-auto bg-white shadow p-8 rounded-xl space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" required />
            <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" required />
            <textarea placeholder="Your Message" className="w-full border p-3 rounded h-32" required></textarea>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
              Send Message
            </button>
          </form>
        </section>
      </main>
    );
  }