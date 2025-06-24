import { Server } from "lucide-react"
import { Award, Briefcase, Code, Coffee, Heart, Palette } from "lucide-react";

  export const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Features include real-time analytics, automated email marketing, and multi-vendor support.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL", "Redis"],
      github: "https://github.com/username/ecommerce",
      live: "https://ecommerce-demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      featured: true
    },
    {
      title: "AI Task Manager",
      description: "Intelligent project management tool with AI-powered task prioritization, team collaboration features, and automated workflow optimization.",
      tech: ["React", "Node.js", "OpenAI", "MongoDB", "Socket.io", "Docker"],
      github: "https://github.com/username/ai-taskmanager",
      live: "https://ai-taskmanager-demo.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      featured: true
    },
    {
      title: "Weather Analytics",
      description: "Advanced weather dashboard with machine learning predictions, interactive maps, climate data visualization, and API for third-party integrations.",
      tech: ["Vue.js", "Python", "TensorFlow", "D3.js", "FastAPI", "PostgreSQL"],
      github: "https://github.com/username/weather-analytics",
      live: "https://weather-analytics-demo.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      featured: false
    },
    {
      title: "Developer Portfolio CMS",
      description: "Headless CMS specifically designed for developer portfolios with drag-and-drop builder, markdown support, and automatic SEO optimization.",
      tech: ["Next.js", "Sanity", "Tailwind CSS", "Vercel", "GraphQL"],
      github: "https://github.com/username/portfolio-cms",
      live: "https://portfolio-cms-demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      featured: false
    }
  ]

 export const skills = [
    { 
      name: "Frontend Development", 
      icon: Code, 
      items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Three.js"],
      level: 95,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Backend & DevOps", 
      icon: Server, 
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS"],
      level: 88,
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "Design & UX", 
      icon: Palette, 
      items: ["Figma", "Adobe XD", "UI/UX", "Prototyping", "Design Systems", "Animation"],
      level: 82,
      color: "from-purple-500 to-pink-500"
    }
  ];

  export const experience = [
  {
    title: "Full Stack Developer Intern",
    company: "Tech Innovations Inc.",
    period: "Jan 2023 - Jun 2023",
    description:
      "Assisted in building scalable web features and fixing bugs in production code. Worked closely with senior developers to understand system architecture and deployment practices.",
    achievements: [
      "Contributed to a user dashboard with 10K+ active users",
      "Wrote reusable components in React and TypeScript",
      "Learned Git, API integration, and Agile workflows",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Digital Solutions Ltd.",
    period: "Jul 2022 - Dec 2022",
    description:
      "Collaborated with the UI/UX team to implement accessible and responsive interfaces. Gained practical experience with React, Tailwind CSS, and modern frontend tools.",
    achievements: [
      "Built UI components for 3 internal projects",
      "Improved website responsiveness across devices",
      "Documented UI library components for team use",
    ],
  },
  {
    title: "Web Development Intern",
    company: "StartUp Studio",
    period: "Jan 2022 - Jun 2022",
    description:
      "Worked under mentorship to understand full web development lifecycle. Participated in code reviews, testing, and simple feature development using HTML, CSS, and JavaScript.",
    achievements: [
      "Created static landing pages for startup campaigns",
      "Practiced version control and code collaboration",
      "Gained foundational knowledge in REST APIs",
    ],
  },
];

 export const stats = [
    { label: "Projects Completed", value: "50+", icon: Briefcase },
    { label: "Happy Clients", value: "30+", icon: Heart },
    { label: "Cups of Coffee", value: "1000+", icon: Coffee },
    { label: "Got Rewarded", value: "2", icon: Award }
  ]