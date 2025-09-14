
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
}


export interface PortfolioData {
  projects: Project[];
  skills: string[];
  experience: Experience[];
  socialLinks: { platform: string; url: string; icon: string }[];
  contact: { email: string; location: string };
  
}





export const portfolioData: PortfolioData = {
  projects: [
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
      screenshot:["/images/Stratify1.png", "/images/Stratify2.png", "/images/Stratify3.png"],
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
      screenshot:["/images/Odeon.png", "/images/Odeon2.png"],
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
      screenshot:["/images/Buyora.png","/images/Buyora2.png", "/images/Buyora3.png", "/images/Buyora4.png", "/images/Buyora5.png"],
    },
    {
      title: "Appointment Manager",
      description: [
        "Appointment management platform for businesses and users to schedule, manage, and track appointments in real time using the MERN stack and Tailwind CSS.",
        "Implemented secure role-based authentication for users and admins via Passport.js, JWT, bcrypt.js, and OAuth.",
      ],
      github: "https://github.com/VIBHORE-LAB/Appointment-Manager",
      year: "2025",
      screenshot:["/images/Appointment1.png", "/images/Appointment2.png", "/images/Appointment3.png"]
    },
    {
      title: "WebAnalyzer.AI",
      description: [
        "WebStack Insight is a browser extension that uses AI to inspect and summarize the underlying technologies used in any website — including the tech stack, API calls, frameworks. Powered by Cohere, it provides instant insights in a clean and intuitive UI.",
      ],
      github: "https://github.com/VIBHORE-LAB/WebAnalyzer.Ai",
      year: "2025",
      screenshot:["/images/WebAnalyzer1.png", "/images/WebAnalyzer2.png"]
    },
    {
      title: "AltDee",
      description: [
        "Chrome Extension to convert old aged light mode websites, into a less eye-straining dark themed website.",
      ],
      github: "https://github.com/VIBHORE-LAB/altDee",
      year: "2025",
      screenshot:["/images/AltD.png"]
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
      role: "MERN DEVELOPER INTERN",
      company: "SoftSensor.AI",
      period: "May'2025 - August'2028",
      description: ["Contributed to the development of a fleet management solution, working across both frontend and backend.",
            "Engineered a centralized MQTT alert system delivering 1,000+ cross-app notifications per week, improving cross-application communication.",
            "Developed a centralized Data Transfer Object (DTO) architecture to unify 30+ back-end routes from mutable responses, eliminating response inconsistencies and reducing client-side defects.",
            "Partnered with cross-functional team members in an agile environment to design and implement scalable full-stack modules, ensuring robustness and long-term maintainability."
          ],
    },
    {
      role: "WEB DEVELOPER INTERN",
      company: "Anuin Techlogix",
      period: "July'2024 - September'2024",
      description: ["Developed dynamic order/reservation dashboard in React-Redux, enabling staff to process 100+ daily orders.",
        "Integrated REST APIs for menu and order workflows, ensuring a seamless experience across mobile and desktop platforms for employees.",
        "Engineered performance optimizations through code-splitting, lazy loading, and improved state management, reducing page load times by 25% and enhancing user interactions."
      ] 
    },
 
  ],
socialLinks: [
  { platform: "GitHub", url: "https://github.com/VIBHORE-LAB", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/vibhore-mathur-1911b1209/", icon: "Linkedin" },
  { platform: "Twitter/X", url: "https://x.com/Onlyvibhore", icon: "X" },
],
  contact: {
    email: "onlyvibhore@email.com",
    location: "Jaipur, Rajasthan",
  },
};