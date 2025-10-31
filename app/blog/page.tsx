import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/lib/data";
import Link from "next/link";
import { format } from "date-fns";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog"
};

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Writing"
        title="Translating complex systems into actionable playbooks"
        description="Essays on strategy, experimentation, and creative focus for data teams and founders."
      />
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col gap-2 rounded-3xl border border-slate-200 bg-white/80 p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
              {format(new Date(post.publishedAt), "MMM d, yyyy")} · {post.readingTime}
            </p>
            <h2 className="font-display text-2xl text-slate-900 dark:text-slate-100">{post.title}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">{post.summary}</p>
            <span className="text-sm font-semibold text-brand-600">Read essay →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
