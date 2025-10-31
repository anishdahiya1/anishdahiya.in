import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { format } from "date-fns";
import Link from "next/link";
import type { Metadata } from "next";

type BlogPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {
      title: "Post not found"
    };
  }

  return {
    title: post.title,
    description: post.summary
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = params;
  const entry = blogPosts.find((post) => post.slug === slug) ?? notFound();

  return (
    <article className="space-y-8">
      <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:text-brand-500">
        ← Back to all writing
      </Link>
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
          {format(new Date(entry.publishedAt), "MMM d, yyyy")} · {entry.readingTime}
        </p>
        <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-slate-100">
          {entry.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">{entry.summary}</p>
      </header>
      <section className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          This is a preview of the ideas I'm currently polishing. Full essays are available to newsletter subscribers. Expect breakdowns of deployment checklists, evaluation frameworks, and narrative strategies that help ship AI responsibly and quickly.
        </p>
        <p>
          Want early access? <a href="https://anishdahiya.in/newsletter">Join the list</a> and I'll deliver the full post when it drops.
        </p>
      </section>
    </article>
  );
}
