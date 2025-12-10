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
  external?: boolean;
  linkLabel?: string;
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
  { title: "Content", href: "/content" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" }
];

export const projects: Project[] = [
  {
    title: "Document Theme Identifier",
    description:
      "LLM-powered research chatbot that ingests 75+ docs, runs OCR + embeddings, and answers queries with citation-backed summaries.",
    tags: ["RAG", "NLP", "LLM"],
    link: "/projects/document-theme-identifier",
    year: "2025",
    linkLabel: "Explore AI assistant"
  },
  {
    title: "Diamond Price Prediction",
    description:
      "Predictive pricing engine that cleanses diamond attributes, trains ensemble regressors, and exposes results through a polished Flask web app.",
    tags: ["Regression", "Flask", "Pricing"],
    link: "/projects/diamond-price-prediction",
    year: "2023",
    linkLabel: "Try pricing lab"
  },
  {
    title: "Parkinson's Disease Prediction",
    description:
      "Biomedical voice analytics pipeline that standardizes acoustic biomarkers and trains interpretable classifiers for early Parkinson's screening.",
    tags: ["Healthcare AI", "Classification", "Logistic Regression"],
    link: "/projects/parkinsons-disease-prediction",
    year: "2022",
    linkLabel: "Review diagnostic build"
  },
  {
    title: "Acoustic Keyboard Detection",
    description:
      "Deep learning system that hears keyboard keystrokes via MFCC features and a custom 1D-CNN, shipped with a Streamlit UI for real-time inference.",
    tags: ["Audio AI", "Deep Learning", "Streamlit"],
    link: "/projects/acoustic-keyboard-detection",
    year: "2024",
    linkLabel: "View Streamlit build"
  },
  {
    title: "Wafer Fault Detection",
    description:
      "End-to-end ML workflow that validates 590-sensor wafer batches, clusters signals, and selects the best Random Forest/XGBoost model per cluster.",
    tags: ["Anomaly Detection", "MLOps", "AWS"],
    link: "/projects/wafer-fault-detection",
    year: "2024",
    linkLabel: "Read case study"
  }
];

export const timeline: TimelineEntry[] = [
  {
    year: "2025",
    title: "Applied AI Practice",
    description:
      "Leading cross-functional efforts to build intelligent automation, developer tooling, and creative co-pilots for enterprise teams."
  },
  {
    year: "Nov 2025",
    title: "Content Creator",
    description:
      "Started publishing consistently across YouTube and LinkedIn—documenting AI, data science, and creator systems."
  },
  {
    year: "2023",
    title: "Data Scientist",
    description:
      "Led cross-functional squads shipping personalization and risk intelligence models used by millions of customers."
  },
  {
    year: "2023",
    title: "Bus Congestion Prediction (DIMTS)",
    description:
      "Built a congestion prediction model for Delhi Integrated Multi-Modal Transit System to forecast bus load and improve scheduling."
  },
  {
    year: "2022–2024",
    title: "SME — Computer Science (Chegg)",
    description:
      "Solved curriculum-aligned problems and authored explanations for CS learners while pursuing undergrad."
  },
  {
    year: "2021–2025",
    title: "B.Tech CSE (AIML), Chandigarh University",
    description:
      "Specialized in Artificial Intelligence & Machine Learning with hands-on projects across CV, NLP, and forecasting."
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
    url: "https://www.youtube.com/@AnishDahiya8",
    summary:
      "Long-form series unpacking the workflows, automations, and mental models that help data teams ship impact at startup speed."
  },
  {
    title: "Architecting AI Strategy",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/anishdahiya7/",
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
  email: "anishdahiya89@gmail.com",
  youtube: "https://www.youtube.com/@AnishDahiya8",
  linkedin: "https://www.linkedin.com/in/anishdahiya7/",
  github: "https://github.com/anishdahiya1",
  instagram: "https://www.instagram.com/anishdahiya16/"
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
