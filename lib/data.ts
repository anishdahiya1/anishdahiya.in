export type NavItem = {
  title: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type ContentPiece = {
  title: string;
  platform: "YouTube" | "LinkedIn" | "Medium" | "Podcast";
  url: string;
  summary: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "X-Corp", href: "/x-corp" },
  { title: "Content", href: "/content" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" }
];

export const projects: Project[] = [
  {
    title: "FluxPulse Forecasting",
    description:
      "Unified forecasting pipeline that blends econometric models with transformer-based architectures to predict market volatility for fintech clients.",
    tags: ["Time Series", "Transformers", "MLOps"],
    link: "https://github.com/anishdahiya1/fluxpulse",
    year: "2024"
  },
  {
    title: "Narrator AI",
    description:
      "Multi-modal storytelling tool that turns raw product analytics into narrative walkthroughs using retrieval augmented generation.",
    tags: ["GenAI", "LLM", "RAG"],
    link: "https://github.com/anishdahiya1/narrator-ai",
    year: "2023"
  },
  {
    title: "Atlas Vision",
    description:
      "Computer vision platform built for manufacturing QA teams with real-time defect detection and human-in-the-loop review tooling.",
    tags: ["Computer Vision", "Edge AI", "MLOps"],
    link: "https://github.com/anishdahiya1/atlas-vision",
    year: "2022"
  }
];

export const timeline: TimelineEntry[] = [
  {
    year: "2025",
    title: "Scaling X-Corp",
    description:
      "Building an applied AI lab focused on intelligent automation, developer tooling, and creative co-pilots for enterprise teams."
  },
  {
    year: "2023",
    title: "Lead Data Scientist",
    description:
      "Led cross-functional squads shipping personalization and risk intelligence models used by millions of customers."
  },
  {
    year: "2021",
    title: "Content Creator",
    description:
      "Launched weekly deep-dives on YouTube and LinkedIn demystifying machine learning systems, career strategy, and mindful productivity."
  },
  {
    year: "2018",
    title: "First ML Deployment",
    description:
      "Productionized a churn prediction pipeline that saved 1M USD in annualized revenue for a telecom conglomerate."
  }
];

export const contentHighlights: ContentPiece[] = [
  {
    title: "The Data Scientist OS",
    platform: "YouTube",
    url: "https://youtube.com/@anishdahiya",
    summary:
      "Long-form series unpacking the workflows, automations, and mental models that help data teams ship impact at startup speed."
  },
  {
    title: "Architecting AI Strategy",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/anishdahiya",
    summary:
      "LinkedIn newsletter where I share playbooks on building defensible AI capabilities without the hype."
  },
  {
    title: "Humans + Machines Podcast",
    platform: "Podcast",
    url: "https://open.spotify.com/show/anishdahiya",
    summary:
      "Weekly interviews with builders and researchers navigating the future of intelligent software."
  },
  {
    title: "Designing RL Systems",
    platform: "Medium",
    url: "https://medium.com/@anishdahiya",
    summary:
      "Technical essays on reinforcement learning infrastructure and aligning incentives between humans and agents."
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Anish blends storytelling with systems thinking—our leadership finally understands where AI creates leverage.",
    name: "Mira Kapoor",
    role: "VP Product, NovaFin"
  },
  {
    quote:
      "His playbooks on ML operations helped us cut experiment cycle times by half without sacrificing rigor.",
    name: "Julian Roth",
    role: "Head of AI, ForgeWorks"
  },
  {
    quote:
      "Working with Anish feels like partnering with a full-stack innovation lab—strategy, delivery, and narrative all in one.",
    name: "Priya Menon",
    role: "CEO, Aurora Labs"
  }
];

export const socials = {
  email: "hello@anishdahiya.in",
  youtube: "https://youtube.com/@anishdahiya",
  linkedin: "https://www.linkedin.com/in/anishdahiya",
  github: "https://github.com/anishdahiya1",
  twitter: "https://x.com/anishcodes"
};

export const blogPosts: BlogPost[] = [
  {
    slug: "applied-ai-roadmaps",
    title: "Designing Applied AI Roadmaps That Actually Ship",
    summary:
      "How I guide enterprise teams from high-level ambition to production models in 120 days without burning trust.",
    publishedAt: "2025-09-12",
    readingTime: "8 min"
  },
  {
    slug: "ml-systems-architecture",
    title: "An Opinionated Architecture for Modern ML Systems",
    summary:
      "A composable reference stack blending feature stores, vector databases, and orchestration best practices.",
    publishedAt: "2025-07-03",
    readingTime: "12 min"
  },
  {
    slug: "content-flywheel",
    title: "Building a Creator Flywheel as a Full-Time Data Scientist",
    summary:
      "The frameworks, templates, and automations that let me ship high-leverage content while leading teams.",
    publishedAt: "2025-04-21",
    readingTime: "9 min"
  }
];
