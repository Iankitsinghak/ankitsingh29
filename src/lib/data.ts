import { GraduationCap, Briefcase, Rocket, BrainCircuit, type LucideIcon, Code, Server, Cloud, GitBranch, Terminal } from "lucide-react";

export const navLinks = [
  { name: "Home", hash: "#home" },
  { name: "Education", hash: "#education" },
  { name: "Experience", hash: "#experience" },
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
  },
  {
    icon: Rocket,
    title: "CloudFlow CI/CD",
    organization: "Personal Project",
    duration: "Ongoing",
    description: "A lightweight, container-native CI/CD pipeline orchestration tool built with Go, Docker, and gRPC for efficient, scalable builds.",
  },
  {
    icon: Server,
    title: "Infra-Genie",
    organization: "Personal Project",
    duration: "3 Months",
    description: "An Infrastructure-as-Code (IaC) tool for provisioning cloud resources on AWS using a declarative YAML syntax, inspired by Terraform.",
  },
];

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
