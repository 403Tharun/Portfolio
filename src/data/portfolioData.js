// ============================================================
// portfolioData.js — Centralized configuration for Tharun Kumar S's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Tharun Kumar S",
  firstName: "Tharun Kumar",
  brandName: "Tharun Kumar S",
  title: "AI & Full-Stack Software Developer",
  location: "Coimbatore, Tamil Nadu, India",
  phone: "+91 9790000347",
  emails: {
    primary: "tharun25kumar@gmail.com",
    secondary: "tharun25kumar@gmail.com",
  },
  summary:
    "Full-stack developer with internship experience building scalable AI-powered web and mobile applications using React.js, Python, Node.js, and modern cloud technologies. Experienced in developing intelligent systems with LLM integration, REST APIs, static code analysis, and real-time workflows. Skilled in Microsoft Power Platform, full-stack engineering, and AI-assisted software solutions.",
  resumeUrl: "/Tharun_Kumar_S_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/403Tharun",
  linkedin: "https://www.linkedin.com/in/tharun-kumar-softwaredeveloper",
  instagram: "#",
};

export const heroContent = {
  greeting: "Hi, I'm Tharun Kumar",
  titleHighlight: "AI & Full-Stack Software Developer",
  subtitle:
    "I design and build AI-powered products, full-stack applications, and developer tools that turn complex ideas into reliable software. Welcome to my portfolio.",
  ctaPrimary: { text: "View Projects", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:tharun25kumar@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Tharun Kumar,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Tharun_Kumar_S_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Full-stack developer with internship experience building scalable AI-powered web and mobile applications using <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">React.js</span>, <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Python</span>, Node.js, and modern cloud technologies. Experienced in developing intelligent systems with LLM integration, REST APIs, static code analysis, and real-time workflows alongside <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Microsoft Power Platform</span> development.`,
  techStack: ["React.js", "Python", "FastAPI", "MongoDB"],
  achievementsHighlights: [
    {
      title: "1st Prize – IMpathon Hackathon",
      organization: "Sona College of Technology",
      description: "Secured 1st place in a 30-hour nonstop hackathon by developing an R-CNN-based deep learning model for real-time object detection, competing against 50+ teams."
    },
    {
      title: "Global Rank 6914 – TCS CodeVita Season 13",
      organization: "Tata Consultancy Services",
      description: "Secured a global rank of 6914 in TCS CodeVita Season 13, demonstrating strong algorithmic problem-solving and competitive coding skills."
    }
  ]
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn complex ideas into robust AI-powered applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends, responsive frontends, and AI pipelines using modern tech stacks and engineering best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 90 },
        { name: "C", level: 80 },
        { name: "HTML & CSS", level: 95 }
      ]
    },
    {
      title: "Frameworks & Web",
      skills: [
        { name: "React.js & Redux", level: 92 },
        { name: "React Native", level: 85 },
        { name: "Next.js", level: 88 },
        { name: "FastAPI & Flask", level: 90 },
        { name: "Node.js & Express", level: 86 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "AI / LLM & Engineering",
      skills: [
        { name: "OpenAI APIs & Ollama", level: 90 },
        { name: "LangChain & RAG", level: 88 },
        { name: "FAISS Vector DB", level: 85 },
        { name: "Prompt Engineering", level: 92 },
        { name: "AST Parsing & Code Analysis", level: 86 }
      ]
    },
    {
      title: "Microsoft Power Platform",
      skills: [
        { name: "Power Apps (Canvas & Model-Driven)", level: 88 },
        { name: "Power Automate (Flows & RPA)", level: 86 },
        { name: "Power BI (Dashboards & DAX)", level: 85 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB & Atlas", level: 90 },
        { name: "SQL Server", level: 85 },
        { name: "Oracle DB", level: 80 }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "VS Code & Postman", level: 95 },
        { name: "Jira & Agile", level: 88 },
        { name: "Docker", level: 80 },
        { name: "Vercel & Render", level: 86 }
      ]
    }
  ]
};
export const contentCreation = {
  badge: "Technical Projects",
  heading: "Engineering & AI Solutions",
  description: "Crafting intelligent tools, real-time data pipelines, and full-stack web/mobile applications.",
  categories: [
    {
      title: "AI & RAG Systems",
      description: "Local-first RAG knowledge bases and conversational agents powered by Ollama, LangChain, and FAISS.",
      stats: "Production Ready"
    },
    {
      title: "Real-Time Data Pipelines & BI Dashboards",
      description: "Built live BI dashboards for a multi-supplier data pipeline — ingesting real-time data via Kafka,  and managing storage in SQL Server (SSMS).",
      stats: "Real-Time Ingestion"
    },
    {
      title: "Full-Stack Development",
      description: "Scalable web applications built with React.js, Next.js, FastAPI, Node.js, and MongoDB.",
      stats: "Responsive & Fast"
    },
    {
      title: "Power Platform Automation",
      description: "Business process automation using Power Apps, Power Automate flows, and interactive Power BI dashboards.",
      stats: "60% Effort Saved"
    }
  ]
};
export const leadershipList = [
  {
    title: "1st Prize – IMpathon Hackathon",
    description: "Secured 1st place in a 30-hour nonstop hackathon at Sona College of Technology by developing an R-CNN-based deep learning model for real-time object detection, competing against 50+ teams.",
    role: "Hackathon Champion",
    badge: "Award"
  },
  {
    title: "Global Rank 6914 – TCS CodeVita Season 13",
    description: "Achieved a global rank of 6914 in TCS CodeVita Season 13, demonstrating advanced algorithmic problem-solving and competitive coding expertise.",
    role: "Competitive Programmer",
    badge: "Global Honor"
  },
  {
    title: "Performer of the Month (August 2024)",
    description: "Honored as Performer of the Month at Xyloite Technologies for independently leading real-time IT tasks and demonstrating strong cross-functional team collaboration.",
    role: "Junior Software Engineer Intern",
    badge: "Recognition"
  }
];

export const internshipsList = [
  {
    organization: "Novintix, Coimbatore",
    role: "Software Developer Intern",
    duration: "Nov 2025 – Apr 2026",
    skills: [
      "Built & maintained full-stack web apps using React.js/Redux and Python connected to MongoDB.",
      "Customised Starlet admin panel to manage application data and streamline internal operations.",
      "Designed Power Apps canvas apps, Power Automate workflows, and Power BI dashboards, reducing manual reporting effort ~60%."
    ],
    tech: ["React.js", "Redux", "Python", "MongoDB", "Starlet", "Power Apps", "Power Automate", "Power BI", "FastAPI", "Git", "Jira"]
  },
  {
    organization: "Xyloite Technologies, Coimbatore",
    role: "Junior Software Engineer Intern",
    duration: "Jul 2024 – Dec 2024",
    skills: [
      "React Native mobile application development and REST API integration, contributing to 9+ dynamic app screens.",
      "Developed an AI chatbot using Ollama and open-source LLMs to handle real-time user queries with improved response accuracy.",
      "Honored as Performer of the Month (August 2024) for leading IT tasks and cross-functional collaboration."
    ],
    tech: ["React Native", "Ollama", "REST APIs", "JavaScript", "TypeScript", "LangChain", "FAISS DB", "Git", "Postman", "Agile/Scrum"]
  }
];

export const softSkillsList = [
  { name: "Communication", desc: "Clear, structured, and effective interactions in technical and business environments." },
  { name: "Problem Solving", desc: "Breaking down complex engineering tasks into modular, efficient, and scalable code." },
  { name: "Team Collaboration", desc: "Working seamlessly with cross-functional teams to deliver production-grade software." },
  { name: "Decision-Making", desc: "Evaluating trade-offs to choose the optimal architecture, tools, and algorithms." },
  { name: "Agile / Scrum", desc: "Iterative development, sprint planning, and active participation in Agile workflows." }
];

export const projects = [
  {
    id: "sniff-ai",
    number: "01",
    badge: " Flagship AI Platform",
    title: "Sniff-AI – Intelligent Code Review Platform",
    description:
      "An AI-powered intelligent code review platform that detects code smells, logic flaws, hallucinated APIs, and security vulnerabilities using AI-assisted semantic analysis and static validation. Features an AI fingerprint detection workflow, severity-based reporting, test coverage estimation, and exportable review reports for developer-focused code auditing.",
    techTags: [
      "React.js",
      "Next.js",
      "FastAPI",
      "Python",
      "MongoDB",
      "OpenAI API",
      "AST Analysis",
      "Static Validation",
    ],
    links: {
      github: "https://github.com/403Tharun",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "cortex",
    number: "02",
    badge: " Local RAG System",
    title: "Cortex – Local-First RAG Knowledge Base",
    description:
      "A fully offline developer knowledge base that captures code snippets and notes, embeds them locally via Ollama, and indexes them in FAISS for semantic search beyond exact keyword matching. Features a code-aware chunking pipeline and a LangChain-orchestrated RAG chain enabling conversational Q&A over personal technical knowledge with zero cloud dependency.",
    techTags: [
      "React.js",
      "FastAPI",
      "Python",
      "LangChain",
      "FAISS",
      "Ollama",
      "RAG Architecture",
      "Vector DB",
    ],
    links: {
      github: "https://github.com/403Tharun",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Prompt Engineering for LLMs",
      issuer: "Udemy"

    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud Skills Boost"

    },
  ],
  viewAllUrl: "#",
};

export const education = {
  degree: "M.Sc – Decision and Computing Sciences",
  institution: "Coimbatore Institute of Technology, Coimbatore, Tamil Nadu",
  cgpa: "7.45 / 10",
  graduation: "Nov 2021 – April 2026",
};

export const footerContent = {
  taglines: [
    "AI & Full-Stack Engineering",
    "React.js · Python · FastAPI · LLMs",
    "Scalable Software & Developer Tools",
  ],
  credential: "M.Sc Decision & Computing Sciences · CGPA 7.45",
  copyright: `© ${new Date().getFullYear()} Tharun Kumar S | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
