# anishdahiya.in

Personal site and digital studio for **Anish Dahiya** — data scientist, content creator, and founder of X-Corp. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- App Router architecture with statically-optimized sections for Home, About, Projects, X-Corp, Content, Blog, and Contact
- Responsive design system with custom typography, gradients, and dark mode (via `next-themes`)
- Motion-first UI using Framer Motion for subtle transitions, hero animations, and timeline interactions
- Reusable components for hero, section headings, project cards, testimonials, timelines, content grids, and contact forms
- Server action-powered contact form (plug in your email/CRM provider)
- Tailwind CSS with custom brand palette and typography tokens
- ESLint + Prettier for consistent DX

## Getting Started

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000> and start exploring.

## Deploying

Once you're happy with the site:

1. Push the repository to GitHub.
2. Import the repo on [Vercel](https://vercel.com/new).
3. Set the project to use the `Next.js` framework preset (defaults work).
4. Trigger a deploy — you're live at `anishdahiya.in`.

## Customizing

- Update content in `lib/data.ts` for navigation, projects, testimonials, social links, and blog metadata.
- Replace the hero imagery and gradients in `components/hero.tsx` and `app/about/page.tsx`.
- Extend the blog by swapping the placeholder content in `app/blog/[slug]/page.tsx` with real markdown, CMS content, or MDX.
- Connect the contact form action in `app/actions.ts` to your preferred provider (Resend, SendGrid, HubSpot, etc.).

## License

MIT © Anish Dahiya
