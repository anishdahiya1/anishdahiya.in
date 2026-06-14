export type NavItem = { title: string; href: string };

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
  external?: boolean;
  linkLabel?: string;
  featured?: boolean;
  specs?: Record<string, string>;
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

export const navItems: NavItem[] = [
  { title: "Work", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Journey", href: "#journey" },
  { title: "Content", href: "#content" },
  { title: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "Hindi GPT — LLM From Scratch",
    description:
      "Built an end-to-end decoder-only GPT for Hindi entirely from PyTorch. Pretrained on 1.35B tokens with a custom SentencePiece BPE tokenizer, fine-tuned on Alpaca-style Q&A, and deployed on Hugging Face Spaces via Gradio.",
    tags: ["PyTorch", "Transformers", "NLP", "Hindi AI", "Hugging Face"],
    link: "https://huggingface.co/spaces/Anishss333/hindi_chatbot",
    year: "2025",
    external: true,
    linkLabel: "Try live demo",
    featured: true,
    specs: {
      Parameters: "57.7M",
      Layers: "12 Transformer blocks",
      Heads: "8 attention heads",
      Vocabulary: "32,768 (Hindi BPE)",
      Tokens: "1.35B pretraining tokens",
      Hardware: "NVIDIA RTX 4060",
      "Train loss": "~3.2 → stable",
      Perplexity: "~400 → ~53",
      Optimizer: "AdamW + cosine LR",
      Precision: "bfloat16 + torch.compile",
    },
  },
  {
    title: "Document Theme Identifier",
    description:
      "LLM-powered research chatbot that ingests 75+ docs, runs OCR + embeddings, and answers queries with citation-backed summaries.",
    tags: ["RAG", "NLP", "LLM"],
    link: "#",
    year: "2025",
    linkLabel: "Explore AI assistant",
  },
  {
    title: "Wafer Fault Detection",
    description:
      "End-to-end ML workflow that validates 590-sensor wafer batches, clusters signals, and selects the best Random Forest/XGBoost model per cluster.",
    tags: ["Anomaly Detection", "MLOps", "AWS"],
    link: "#",
    year: "2024",
    linkLabel: "Read case study",
  },
  {
    title: "Acoustic Keyboard Detection",
    description:
      "Deep learning system that hears keyboard keystrokes via MFCC features and a custom 1D-CNN, shipped with a Streamlit UI for real-time inference.",
    tags: ["Audio AI", "Deep Learning", "Streamlit"],
    link: "#",
    year: "2024",
    linkLabel: "View build",
  },
  {
    title: "Diamond Price Prediction",
    description:
      "Predictive pricing engine that cleanses diamond attributes, trains ensemble regressors, and exposes results through a polished Flask web app.",
    tags: ["Regression", "Flask", "Pricing"],
    link: "#",
    year: "2023",
    linkLabel: "Try pricing lab",
  },
  {
    title: "Parkinson's Disease Prediction",
    description:
      "Biomedical voice analytics pipeline that standardizes acoustic biomarkers and trains interpretable classifiers for early Parkinson's screening.",
    tags: ["Healthcare AI", "Classification"],
    link: "#",
    year: "2022",
    linkLabel: "Review build",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2025",
    title: "Data Scientist, Applied AI",
    description:
      "Joined a fast-moving ML team shipping production-ready models, tightening evaluation loops, and translating research spikes into real user impact.",
  },
  {
    year: "2025",
    title: "Built Hindi GPT From Scratch",
    description:
      "Pretrained a 57.7M parameter decoder-only transformer on 1.35B Hindi tokens, reduced perplexity from ~400 to ~53, fine-tuned with SFT, and deployed on Hugging Face Spaces.",
  },
  {
    year: "2024",
    title: "AI Internships + Capstone",
    description:
      "Split time between research internships and final-year capstone — hardening MLOps pipelines and documenting lessons for the next cohort.",
  },
  {
    year: "2023",
    title: "Bus Congestion Prediction (DIMTS)",
    description:
      "Built a congestion prediction model for Delhi's Integrated Multi-Modal Transit System to forecast bus load and improve scheduling.",
  },
  {
    year: "2022",
    title: "SME — Computer Science (Chegg)",
    description:
      "Solved curriculum-aligned problems and authored explanations for CS learners while pursuing undergrad.",
  },
  {
    year: "2021",
    title: "B.Tech CSE (AIML), Chandigarh University",
    description:
      "Specialized in AI & ML with hands-on projects across CV, NLP, and forecasting. Graduated 2025.",
  },
];

export const contentHighlights: ContentPiece[] = [
  {
    title: "The Data Scientist OS",
    platform: "YouTube",
    url: "https://www.youtube.com/@AnishDahiya8",
    summary:
      "Long-form series unpacking the workflows, automations, and mental models that help data teams ship impact at startup speed.",
  },
  {
    title: "Architecting AI Strategy",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/anishdahiya7/",
    summary:
      "Newsletter sharing playbooks on building defensible AI capabilities without the hype.",
  },
  {
    title: "Humans + Machines Podcast",
    platform: "Podcast",
    url: "#",
    summary:
      "Weekly interviews with builders and researchers navigating the future of intelligent software.",
  },
  {
    title: "Designing RL Systems",
    platform: "Medium",
    url: "https://medium.com/@anishdahiya",
    summary:
      "Technical essays on reinforcement learning infrastructure and aligning incentives between humans and agents.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Anish blends storytelling with systems thinking — our leadership finally understands where AI creates leverage.",
    name: "Mira Kapoor",
    role: "VP Product, NovaFin",
  },
  {
    quote:
      "His playbooks on ML operations helped us cut experiment cycle times by half without sacrificing rigor.",
    name: "Julian Roth",
    role: "Head of AI, ForgeWorks",
  },
  {
    quote:
      "Working with Anish feels like partnering with a full-stack innovation lab — strategy, delivery, and narrative all in one.",
    name: "Priya Menon",
    role: "CEO, Aurora Labs",
  },
];

export const socials = {
  email: "anishdahiya89@gmail.com",
  youtube: "https://www.youtube.com/@AnishDahiya8",
  linkedin: "https://www.linkedin.com/in/anishdahiya7/",
  github: "https://github.com/anishdahiya1",
  instagram: "https://www.instagram.com/anishdahiya16/",
};
