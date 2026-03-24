import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../lib/data/blog';

const categoryColors: Record<string, string> = {
  Tax: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  Guides: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
  'Cost of Living': 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  Visa: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  Banking: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
};

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <>
      {/* SEO meta via document title */}
      <title>Blog - TotallyNomad | Guides for Americans Moving Abroad</title>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#134E4A] to-[#0F766E] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The TotallyNomad Blog
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto">
            Guides, insights, and real talk about moving abroad
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 md:py-24 bg-[#FFFBEB] dark:bg-[#0C1222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  {/* Category + meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        categoryColors[post.category] ?? 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {formatDate(post.date)}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-stone-100 dark:border-slate-700">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
