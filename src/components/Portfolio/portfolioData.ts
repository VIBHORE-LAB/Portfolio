
export interface Project {
  title: string;
  description: string[];
  github: string;
  live?: string;
  status?: string;
  year?: string;
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
      title: "Odeon",
      description: [
        "Full-stack Spotify analytics platform using React (TypeScript), Node.js, Apollo GraphQL, and LowDB.",
        "Developed personalized dashboards showcasing top tracks, artists, genres, mood metrics, and real-time listening trends.",
      ],
      github: "https://github.com/VIBHORE-LAB/Odeon-Server",
      live: "https://odeon-frontend.netlify.app/",
      status: "Completed",
      year: "2024",
    },
    {
      title: "Buyora",
      description: [
        "Full-stack e-commerce platform using Flask (backend) and React with Redux-Saga (frontend), supporting both customer and seller roles.",
        "Implemented features such as product listings, cart management, order processing, and authentication with role-based dashboards.",
      ],
      github: "https://github.com/VIBHORE-LAB/Buyora-Server",
      live: "https://buyora.netlify.app/",
      status: "Completed",
      year: "2024",
    },
    {
      title: "Appointment Manager",
      description: [
        "Appointment management platform for businesses and users to schedule, manage, and track appointments in real time using the MERN stack and Tailwind CSS.",
        "Implemented secure role-based authentication for users and admins via Passport.js, JWT, bcrypt.js, and OAuth.",
      ],
      github: "https://github.com/VIBHORE-LAB/Appointment-Manager",
      status: "In Progress",
      year: "2024",
    },
    {
      title: "WebAnalyzer.AI",
      description: [
        "WebStack Insight is a browser extension that uses AI to inspect and summarize the underlying technologies used in any website — including the tech stack, API calls, frameworks. Powered by Cohere, it provides instant insights in a clean and intuitive UI.",
      ],
      github: "https://github.com/VIBHORE-LAB/WebAnalyzer.Ai",
      status: "Completed",
      year: "2023",
    },
    {
      title: "AltDee",
      description: [
        "Chrome Extension to convert old aged light mode websites, into a less eye-straining dark themed website.",
      ],
      github: "https://github.com/VIBHORE-LAB/altDee",
      status: "Completed",
      year: "2023",
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
      role: "MERN DEVELOPER INTERN ",
      company: "SoftSensor.AI",
      period: "May'2025 - Present",
      description: ["Contributed to the development of a fleet management solution, working across both frontend and backend using",
            "Collaborated within an agile team to implement new features, improve performance, and ensure scalability of the platform.",
            "Refactored legacy code to reduce complexity, enhance maintainability, and align with current development standards."
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Anuin Techlogix",
      period: "July'2024 - September'2024",
      description: ["Worked on frontend of Restaurant Management System using React-Redux, MUI and tailwind CSS.","Built and integrated dynamic frontend components for managing orders,menus, and reservations"] 
    },
 
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/VIBHORE-LAB", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/alex-chen-dev", icon: "Linkedin" },
    { platform: "Twitter", url: "https://twitter.com/alexchen_dev", icon: "Twitter" },
  ],
  contact: {
    email: "onlyvibhore@email.com",
    location: "Jaipur, Rajasthan",
  },
};