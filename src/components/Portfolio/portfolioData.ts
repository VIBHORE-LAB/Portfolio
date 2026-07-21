
export interface Project {
  title: string;
  description: string[];
  github: string;
  live?: string;
  status?: string;
  year?: string;
  screenshot?: string[];
}
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech?: string;
}


export interface PortfolioData {
  projects: Project[];
  skills: string[];
  experience: Experience[];
  socialLinks: { platform: string; url: string; icon: string }[];
  contact: { email: string };

}





export const portfolioData: PortfolioData = {
  projects: [
    {
      title: "CSV SQL Parser",
      description: [
        "Developed a Terminal User Interface (TUI) based CSV to SQL compiler and query executor in Python.",
        "Designed and implemented a custom lexer, parser, Abstract Syntax Tree (AST) representation, query planner, and executor to query CSV files directly with SQL.",
        "Created an interactive terminal interface using Textual and Rich, featuring syntax highlighting, live schema view, autocompletion suggestions, query execution timer, and responsive data table grid."
      ],
      github: "https://github.com/VIBHORE-LAB/csv-sql-parser",
      year: "2025",
      screenshot: ["/images/csv-sql1.png", "/images/csv-sql2.png"]
    },
    {
      title: "Email RAG Pipeline",
      description: [
        "Developed a full-stack Retrieval-Augmented Generation (RAG) pipeline for real-time email classification and AI-assisted responses, with automated Slack notifications.",
        "Engineered with Node.js (TypeScript), GraphQL, MongoDB, Elasticsearch, Qdrant, Docker, and React (TypeScript).",
        "Implemented IMAP synchronization and intelligent email parsing, storing vector embeddings in Qdrant and indexing metadata in Elasticsearch.",
        "Integrated OpenAI APIs for zero-shot classification and context-aware AI-generated replies.",
      ],
      github: "https://github.com/VIBHORE-LAB/reachinbox-backend",
      live: "https://elaborate-dusk-b92b23.netlify.app/",
      year: "2025",
      screenshot: ["/images/Email-Rag-Pipeline1.png", "/images/Email-Rag-Pipeline2.png"]
    },



    {
      title: "Stratify",
      description: [
        "Full-stack trading strategy backtester built with C++ computation engine, React (TypeScript), Node.js, Express, PostgreSQL, Socket.io, Recharts, and JWT authentication.",
        "Developed and integrated multiple strategies (Bollinger Bands, Mean Reversion, Momentum, etc.) to support configurable backtests.",
        "Implemented equity curve visualizations, real-time trade updates, drawdown analysis, and interactive dashboards with performance metrics and position tracking.",
      ],

      github: "https://github.com/VIBHORE-LAB/stratify-backend",
      live: "https://stratifyy.netlify.app/",
      year: "2025",
      screenshot: ["/images/Stratify1.png", "/images/Stratify2.png", "/images/Stratify3.png"],
    },
    {
      title: "Odeon",
      description: [
        "Full-stack Spotify analytics platform using React (TypeScript), Node.js, Apollo GraphQL, and LowDB.",
        "Developed personalized dashboards showcasing top tracks, artists, genres, mood metrics, and real-time listening trends.",
      ],
      github: "https://github.com/VIBHORE-LAB/Odeon-Server",
      live: "https://odeon-frontend.netlify.app/",
      year: "2025",
      screenshot: ["/images/Odeon.png", "/images/Odeon2.png"],
    },
    {
      title: "Buyora",
      description: [
        "Full-stack e-commerce platform using Flask (backend) and React with Redux-Saga (frontend), supporting both customer and seller roles.",
        "Implemented features such as product listings, cart management, order processing, and authentication with role-based dashboards.",
      ],
      github: "https://github.com/VIBHORE-LAB/Buyora-Server",
      live: "https://buyora.netlify.app/",
      year: "2025",
      screenshot: ["/images/Buyora.png", "/images/Buyora2.png", "/images/Buyora3.png", "/images/Buyora4.png", "/images/Buyora5.png"],
    },
    {
      title: "Appointment Manager",
      description: [
        "Appointment management platform for businesses and users to schedule, manage, and track appointments in real time using the MERN stack and Tailwind CSS.",
        "Implemented secure role-based authentication for users and admins via Passport.js, JWT, bcrypt.js, and OAuth.",
      ],
      github: "https://github.com/VIBHORE-LAB/Appointment-Manager",
      year: "2025",
      screenshot: ["/images/Appointment1.png", "/images/Appointment2.png", "/images/Appointment3.png"]
    },
    {
      title: "WebAnalyzer.AI",
      description: [
        "WebStack Insight is a browser extension that uses AI to inspect and summarize the underlying technologies used in any website — including the tech stack, API calls, frameworks. Powered by Cohere, it provides instant insights in a clean and intuitive UI.",
      ],
      github: "https://github.com/VIBHORE-LAB/WebAnalyzer.Ai",
      year: "2025",
      screenshot: ["/images/WebAnalyzer1.png", "/images/WebAnalyzer2.png"]
    },
    {
      title: "AltDee",
      description: [
        "Chrome Extension to convert old aged light mode websites, into a less eye-straining dark themed website.",
      ],
      github: "https://github.com/VIBHORE-LAB/altDee",
      year: "2025",
      screenshot: ["/images/AltD.png"]
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Flask",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Redux",
    "Passport.js",
    "JWT",
    "Docker",
    "AWS",
    "Git",
  ],
  experience: [
    {
      role: "Software Developer 1",
      company: "Outbox Labs",
      period: "October 2025 - Present",
      description: [
        "Engineered and maintained full-stack features across the Zapmail SaaS platform spanning deliverability pipelines, domain management, user and workspace management, automation workflows, and system reliability.",
        "Built a proactive domain health monitoring engine that automated DNS reputation tracking and real-time blacklist detection, eliminating pre-deployment configuration failures and improving email deliverability reliability.",
        "Designed and shipped a centralized async job processing system using BullMQ and Redis with rate-limit-aware exponential backoff strategies, reducing job failure rates by 40%.",
        "Developed a high-throughput webhook event delivery system processing 15,000+ events per day, implementing HMAC-based payload verification, idempotency controls, and configurable retry logic.",
        "Spearheaded the end-to-end engineering of a major full-product redesign, architecting and delivering multiple critical user flows, improving onboarding completion rates and platform retention.",
      ],
      tech: "React · TypeScript · Node.js · BullMQ · Redis · PostgreSQL · REST APIs",
    },
    {
      role: "Full Stack Developer Intern",
      company: "SoftSensor.AI",
      period: "May 2025 - August 2025",
      description: [
        "Built and maintained scalable frontend and backend features for a fleet management SaaS platform, working across the full development lifecycle from design to deployment.",
        "Engineered a centralized MQTT-based real-time alert notification system delivering 1,000+ cross-application alerts per week, improving inter-service communication reliability.",
        "Designed a standardized Data Transfer Object (DTO) architecture across 30+ backend API routes, eliminating response inconsistencies and reducing client-side integration defects.",
        "Collaborated in an agile environment to design and ship scalable full-stack modules, following TypeScript best practices and maintaining long-term code quality.",
      ],
      tech: "React · Node.js · TypeScript · MQTT · REST APIs · MongoDB",
    },
    {
      role: "Frontend Developer Intern",
      company: "Anuin Techlogix",
      period: "July 2024 - September 2024",
      description: [
        "Developed a dynamic order and reservation management dashboard enabling staff to process 100+ daily orders with real-time state updates.",
        "Integrated RESTful APIs for menu and order workflows, delivering a consistent cross-platform experience across mobile and desktop clients.",
        "Applied performance optimization techniques including code-splitting, lazy loading, and state management improvements that reduced page load times by 25%.",
      ],
      tech: "React · Redux · JavaScript · REST APIs · CSS",
    },

  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/VIBHORE-LAB", icon: "Github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/vibhore-mathur-1911b1209/", icon: "Linkedin" },
    { platform: "Twitter/X", url: "https://x.com/Onlyvibhore", icon: "X" },
  ],
  contact: {
    email: "onlyvibhore@email.com",
  },
};
