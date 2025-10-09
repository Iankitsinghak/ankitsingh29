import { GraduationCap, Briefcase, Rocket, BrainCircuit, type LucideIcon, Code, Server, Cloud, Palette, GitBranch, Terminal } from "lucide-react";

export const navLinks = [
  { name: "Home", hash: "#home" },
  { name: "Timeline", hash: "#timeline" },
  { name: "Skills", hash: "#skills" },
  { name: "Stats", hash: "#stats" },
  { name: "Projects", hash: "#projects" },
  { name: "Journey", hash: "#journey" },
  { name: "Testimonials", hash: "#testimonials" },
  { name: "Contact", hash: "#contact" },
];

export const professionalTimeline = [
  {
    icon: GraduationCap,
    title: "B.Tech in Computer Science",
    logo: Code,
    duration: "2022 - 2026",
    description: "Pursuing my bachelor's degree with a focus on algorithms, data structures, and system design.",
  },
  {
    icon: Briefcase,
    title: "DevOps Intern",
    logo: Server,
    duration: "Summer 2024",
    description: "Automated deployment pipelines using Jenkins and Docker, reducing deployment time by 40%.",
  },
  {
    icon: Rocket,
    title: "Cloud Engineering Projects",
    logo: Cloud,
    duration: "Ongoing",
    description: "Building and deploying scalable applications on AWS, utilizing services like EC2, S3, and Lambda.",
  },
  {
    icon: BrainCircuit,
    title: "AI & ML Exploration",
    logo: BrainCircuit,
    duration: "2023 - Present",
    description: "Experimenting with AI tools and libraries like TensorFlow and PyTorch for personal projects.",
  },
];

export const skillsData = [
  { skill: "DevOps", level: 85 },
  { skill: "Cloud", level: 90 },
  { skill: "Backend", level: 80 },
  { skill: "DSA", level: 75 },
  { skill: "AI Tools", level: 70 },
  { skill: "System Design", level: 80 },
];

export const learningBadges = [
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Terminal },
  { name: "Kubernetes", icon: Rocket },
  { name: "Terraform", icon: Server },
  { name: "Go", icon: Code },
  { name: "Rust", icon: GitBranch },
];

export const githubContributions = Array.from({ length: 365 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 365 + i);
    return {
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * (Math.random() > 0.3 ? 10 : 1)),
    };
  });

export const gfgStats = {
  problemsSolved: "350+",
  rank: "1.2K",
};

export type Project = {
    title: string;
    tagline: string;
    tech: string[];
    description: string;
    challenges: string;
    outcomes: string;
    github?: string;
    live?: string;
    imageId: string;
}

export const projects: Project[] = [
  {
    title: "CloudFlow CI/CD",
    tagline: "A lightweight, container-native CI/CD pipeline orchestration tool built with Go.",
    tech: ["Go", "Docker", "Kubernetes", "gRPC"],
    description: "CloudFlow is a CI/CD automation server designed to run build, test, and deployment pipelines in isolated Docker containers. It uses a YAML-based configuration for defining pipelines and communicates with worker nodes via gRPC for distributed task execution.",
    challenges: "Designing a fault-tolerant, distributed architecture and ensuring secure container execution were the main challenges. Managing state across worker nodes and creating an intuitive pipeline DSL also required significant effort.",
    outcomes: "Successfully created a PoC that could run parallel stages across multiple nodes, reducing build times for a sample application by 60%. The project provided deep insights into distributed systems and container orchestration.",
    github: "https://github.com",
    live: "https://example.com",
    imageId: "project-1",
  },
  {
    title: "Infra-Genie",
    tagline: "An Infrastructure-as-Code (IaC) tool for provisioning cloud resources using a declarative syntax.",
    tech: ["Python", "AWS SDK (Boto3)", "Terraform concepts"],
    description: "This project is a simplified implementation of an IaC tool like Terraform. It parses a custom HCL-like configuration file, builds a dependency graph of cloud resources, and uses the AWS SDK to provision or update the infrastructure to match the desired state.",
    challenges: "Implementing a robust dependency resolution algorithm and managing state drift between cloud resources and the local state file were complex tasks. Ensuring idempotency in all API calls was critical.",
    outcomes: "Developed a tool capable of provisioning a simple VPC with subnets and security groups on AWS from a single configuration file. It was a great learning experience for understanding how modern IaC tools work under the hood.",
    github: "https://github.com",
    imageId: "project-2",
  },
  {
    title: "Log-Harbor",
    tagline: "A centralized, real-time log aggregation and analysis platform with a serverless backend.",
    tech: ["AWS Lambda", "API Gateway", "Elasticsearch", "Node.js"],
    description: "Log-Harbor provides a simple API endpoint for applications to push logs. These logs are processed by a Lambda function, indexed into an Elasticsearch cluster, and made searchable through a simple web interface. The system is designed to be highly scalable and cost-effective.",
    challenges: "Handling high-throughput log ingestion and ensuring data consistency without a dedicated server was challenging. Optimizing Elasticsearch queries for performance and setting up appropriate security rules were key learning areas.",
    outcomes: "The platform could successfully ingest and index over 10,000 log entries per minute during testing. It provided hands-on experience with serverless architectures and managed cloud services.",
    github: "https://github.com",
    live: "https://example.com",
    imageId: "project-3",
  },
];

export const journeySteps = [
    { year: "2022", description: "Learned Linux & Bash Scripting" },
    { year: "2023", description: "Built REST APIs with Node.js & Python" },
    { year: "2024", description: "Mastered CI/CD, Docker & AWS" },
    { year: "2025", description: "Focusing on Kubernetes & Open Source" },
];

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
  github: "https://github.com",
  linkedin: "https://linkedin.com/in/",
  resume: "/resume.pdf",
};
