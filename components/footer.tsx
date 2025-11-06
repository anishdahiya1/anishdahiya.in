import Link from "next/link";
import { socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-10 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-sm text-slate-500 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-slate-800 dark:text-slate-100">Let's build the future of intelligent work.</p>
          <p>© {new Date().getFullYear()} Anish Dahiya. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link href={`mailto:${socials.email}`} className="hover:text-brand-500">
            Email
          </Link>
          <Link href={socials.instagram} className="hover:text-brand-500" target="_blank">
            Instagram
          </Link>
          <Link href={socials.linkedin} className="hover:text-brand-500" target="_blank">
            LinkedIn
          </Link>
          <Link href={socials.github} className="hover:text-brand-500" target="_blank">
            GitHub
          </Link>
          <Link href={socials.youtube} className="hover:text-brand-500" target="_blank">
            YouTube
          </Link>
          <Link href="https://x-corp.in" className="hover:text-brand-500" target="_blank">
            X-Corp
          </Link>
        </div>
      </div>
    </footer>
  );
}
