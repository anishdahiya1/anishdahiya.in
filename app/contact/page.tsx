import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { socials } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

const waysToCollaborate = [
  {
    title: "AI Product Strategy",
    description: "Unlock new revenue, retention, or efficiency wins with AI-native experiences and operating systems."
  },
  {
    title: "Fractional Leadership",
    description: "Partner on roadmap design, team enablement, and executive storytelling to accelerate your transformation."
  },
  {
    title: "Creator Partnerships",
    description: "Co-create content, workshops, or live experiences that demystify AI for your community."
  }
];

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Let's Collaborate"
        title="Tell me about the future you're building"
        description="Every engagement starts with a conversation. Share your vision, constraints, and the outcomes that matter most."
      />

      <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr]">
        <ContactForm />
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Ways to collaborate
            </h2>
            <ul className="space-y-4">
              {waysToCollaborate.map((way) => (
                <li key={way.title} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{way.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{way.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Prefer email?
            </h2>
            <Link href={`mailto:${socials.email}`} className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-500">
              {socials.email} →
            </Link>
            <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-500">
              <Link href={socials.instagram} target="_blank" className="hover:text-brand-500">
                Instagram
              </Link>
              <Link href={socials.linkedin} target="_blank" className="hover:text-brand-500">
                LinkedIn
              </Link>
              <Link href={socials.youtube} target="_blank" className="hover:text-brand-500">
                YouTube
              </Link>
              <Link href={socials.github} target="_blank" className="hover:text-brand-500">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
