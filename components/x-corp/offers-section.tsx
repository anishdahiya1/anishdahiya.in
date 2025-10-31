"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export type Offer = {
  name: string;
  detail: string;
  cta: string;
  href: string;
};

type OffersSectionProps = {
  offers: Offer[];
  className?: string;
};

export function OffersSection({ offers, className }: OffersSectionProps) {
  return (
    <div className={className}>
      {offers.map((offer, index) => (
        <motion.article
          key={offer.name}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.06, duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex h-full flex-col justify-between rounded-3xl border border-brand-200/60 bg-white/90 p-6 shadow-lg shadow-brand-500/10 dark:border-brand-500/20 dark:bg-slate-900/80"
        >
          <div className="space-y-3">
            <h3 className="font-display text-2xl text-brand-600 dark:text-brand-300">{offer.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{offer.detail}</p>
          </div>
          <Link
            href={offer.href}
            className="mt-6 inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-500"
          >
            {offer.cta} →
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
