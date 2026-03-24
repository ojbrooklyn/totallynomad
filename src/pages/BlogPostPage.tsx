import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
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

/** Convert markdown-like content to simple HTML */
function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  function flushTable() {
    if (tableRows.length < 2) {
      inTable = false;
      tableRows = [];
      return;
    }
    const headers = tableRows[0];
    // Skip the separator row (row 1 with ---)
    const body = tableRows.slice(2);
    elements.push(
      <div key={`table-${elements.length}`} className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-stone-200 dark:border-slate-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-stone-50 dark:bg-slate-800">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-stone-300 border-b border-stone-200 dark:border-slate-700"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr
                key={ri}
                className="border-b border-stone-100 dark:border-slate-700 last:border-0"
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="px-4 py-3 text-slate-600 dark:text-stone-400"
                    dangerouslySetInnerHTML={{
                      __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                    }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    inTable = false;
    tableRows = [];
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table detection
    if (line.startsWith('|')) {
      inTable = true;
      const cells = line
        .split('|')
        .slice(1, -1)
        .map((c) => c.trim());
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Headings
    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={i}
          className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
      continue;
    }
    if (line.startsWith('### ')) {
      elements.push(
        <h3
          key={i}
          className="font-serif text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
      continue;
    }

    // Empty line
    if (line.trim() === '') continue;

    // Paragraph (with bold/italic support)
    const html = line
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');

    elements.push(
      <p
        key={i}
        className="text-slate-700 dark:text-stone-300 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  if (inTable) flushTable();
  return elements;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="py-20 bg-[#FFFBEB] dark:bg-[#0C1222]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-slate-600 dark:text-stone-400 mb-6">
            We couldn't find the article you're looking for.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  // Related articles: same category, excluding current
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1) - (b.category === post.category ? -1 : 1))
    .slice(0, 2);

  return (
    <>
      <title>{post.title} - TotallyNomad Blog</title>

      {/* Header */}
      <section className="bg-gradient-to-br from-[#134E4A] to-[#0F766E] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-teal-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                categoryColors[post.category] ?? 'bg-stone-100 text-stone-700'
              }`}
            >
              {post.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-teal-200">
            <span>{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 md:py-16 bg-[#FFFBEB] dark:bg-[#0C1222]">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent(post.content)}

          {/* CTA */}
          <div className="mt-12 p-6 bg-gradient-to-r from-teal-50 to-amber-50 dark:from-teal-900/20 dark:to-amber-900/20 rounded-xl border border-teal-200 dark:border-teal-800">
            <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2">
              Ready to take the next step?
            </h3>
            <p className="text-sm text-slate-600 dark:text-stone-400 mb-4">
              Use our free tools to plan your move abroad with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Try the Budget Calculator
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 transition-colors"
              >
                Upgrade to Plus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-12 md:py-16 bg-white dark:bg-slate-900/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="block bg-[#FFFBEB] dark:bg-slate-800/50 rounded-xl p-5 hover:shadow-md transition-shadow"
                >
                  <span
                    className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${
                      categoryColors[r.category] ?? 'bg-stone-100 text-stone-700'
                    }`}
                  >
                    {r.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-stone-400">
                    {r.readTime} · {formatDate(r.date)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
