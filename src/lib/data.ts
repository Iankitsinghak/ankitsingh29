import { GraduationCap, Briefcase, Rocket, BrainCircuit, type LucideIcon, Code, Server, Cloud, GitBranch, Terminal } from "lucide-react";

export const navLinks = [
  { name: "Home", hash: "#home" },
  { name: "Education", hash: "#education" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Stats", hash: "#stats" },
  { name: "Testimonials", hash: "#testimonials" },
  { name: "Contact", hash: "#contact" },
];

export const educationTimeline = [
    {
      icon: GraduationCap,
      title: "B.Tech in Computer Science",
      institute: "Lovely Professional University",
      duration: "2022 - 2026",
      description: "Key coursework in Data Structures, Algorithms, and System Design.",
    },
    {
      icon: Rocket,
      title: "High School Diploma",
      institute: "St. Karen's High School",
      duration: "2020 - 2022",
      description: "Focused on Physics, Chemistry, and Mathematics.",
    },
];

export const experienceTimeline = [
  {
    icon: Briefcase,
    title: "DevOps Intern",
    organization: "Innovate Solutions Ltd.",
    duration: "Summer 2024",
    description: "Automated deployment pipelines using Jenkins and Docker, reducing deployment time by 40%.",
  }
];


export const projectsData = [
    {
        title: "CloudFlow CI/CD",
        tagline: "A lightweight, container-native CI/CD pipeline tool.",
        tech: ["Go", "Docker", "gRPC", "Kubernetes"],
        links: {
            github: "https://github.com/ankitsinglr26",
            live: ""
        },
        featured: true,
        details: {
            description: "A CI/CD pipeline orchestration tool built from scratch, designed for efficient and scalable builds in a cloud-native environment. It uses Go for performance, Docker for containerization, and gRPC for inter-service communication.",
            challenges: "Designing a fault-tolerant and distributed job execution system. Implementing a clean, declarative YAML-based pipeline definition.",
            outcomes: "Achieved parallel job execution, reducing build times by up to 60% compared to sequential scripts. The tool is now used in several personal projects for automated testing and deployment."
        }
    },
    {
        title: "Infra-Genie",
        tagline: "Infrastructure-as-Code tool for provisioning cloud resources.",
        tech: ["Go", "AWS SDK", "YAML"],
        links: {
            github: "https://github.com/ankitsinglr26",
            live: ""
        },
        featured: false,
        details: {
            description: "An IaC tool inspired by Terraform for declaratively provisioning cloud resources on AWS. It parses a YAML configuration file and translates it into AWS API calls to create and manage infrastructure.",
            challenges: "Managing state and dependencies between resources. Ensuring idempotency so that repeated applications of the same configuration produce the same state.",
            outcomes: "Successfully implemented support for core AWS services like EC2, S3, and VPC. Simplified the process of spinning up and tearing down testing environments."
        }
    },
    {
        title: "Portfolio Website",
        tagline: "This very portfolio, built to be sleek and professional.",
        tech: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
        links: {
            github: "https://github.com/ankitsinglr26",
            live: "#"
        },
        featured: false,
        details: {
            description: "A personal portfolio website designed to be modern, minimal, and fully responsive. Built with a focus on clean design, smooth animations, and a great user experience.",
            challenges: "Implementing a responsive and accessible design. Optimizing performance and load times with Next.js features like Server Components and Image Optimization.",
            outcomes: "A beautiful, performant, and HR-friendly personal site that effectively showcases my skills and projects."
        }
    }
]


export const skillsData = [
  { skill: "DevOps", level: 85 },
  { skill: "Cloud", level: 90 },
  { skill: "Backend", level: 80 },
  { skill: "DSA", level: 75 },
  { skill: "AI Tools", level: 70 },
];

export const learningBadges = [
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Terminal },
  { name: "Kubernetes", icon: Rocket },
];

export const githubContributions = Array.from({ length: 365 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 365 + i);
    const count = Math.random() > 0.3 ? Math.floor(Math.random() * 10) : 0;
    return {
      date: date.toISOString().split('T')[0],
      count: count,
    };
  });

export const gfgStats = {
  problemsSolved: "350+",
  rank: "1.2K",
};

export const testimonials = [
  {
    quote: "Ankit is a smart, consistent, and reliable developer who can be counted on to deliver high-quality work on time.",
    name: "Dr. Alisha Sharma",
    title: "Professor, CSE Department",
  },
  {
    quote: "He has a rare ability to understand complex systems deeply and communicate his ideas clearly. A true team player.",
    name: "Rohan Verma",
    title: "Senior DevOps Engineer & Mentor",
  },
  {
    quote: "Working with Ankit on our cloud project was a great experience. His passion for automation and scalability is infectious.",
    name: "Priya Desai",
    title: "Peer & Project Collaborator",
  },
];

export const socialLinks = {
  github: "https://github.com/ankitsinglr26",
  linkedin: "https://linkedin.com/in/ankitsinglr26",
  resume: "/resume.pdf",
};
