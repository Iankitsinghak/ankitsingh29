
import { GraduationCap, Briefcase, Rocket, BrainCircuit, type LucideIcon, Code, Server, Cloud, GitBranch, Terminal, Award } from "lucide-react";

export const navLinks = [
  { name: "Home", hash: "#home" },
  { name: "Education", hash: "#education" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Certifications", hash: "#certifications" },
  { name: "Stats", hash: "#stats" },
  { name: "Contact", hash: "#contact" },
];

export const educationTimeline = [
  {
    icon: GraduationCap,
    title: "B.Tech in Computer Science",
    institute: "KAZI NAZRUL UNIVERSITY, ASANSOL",
    duration: "2024 - 2028",
    description: "Serving as Class Representative. Key skills: Communication and Leadership.",
  },
  {
    icon: GraduationCap,
    title: "Credit Linked Program in CSE",
    institute: "Indian Institute of Technology, Guwahati",
    duration: "2024 - 2025",
    description: "Coursework in DSA, Computer Architecture, and System Design. Key skills: C++, Teamwork, and Problem Solving.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Computer Science",
    institute: "Masai",
    duration: "2024 - 2025",
    description: "Focused on developing problem-solving skills with C++ and Data Structures & Algorithms.",
  },
  {
    icon: Rocket,
    title: "Higher Secondary, Science",
    institute: "Raghumal Arya vidyalaya",
    duration: "2021 - 2023",
    description: "Active in NCC and winner of YPC' 21 at the district level. Key skills: Communication and Team Leadership.",
  },
];

export const experienceTimeline = [
  {
    icon: Briefcase,
    title: "Google Student Ambassador",
    organization: "Google",
    duration: "Sep 2025 - Present",
    description: "Fostering community engagement and promoting developer tools on behalf of Google.",
  },
  {
    icon: Briefcase,
    title: "Campus Ambassador",
    organization: "Unstop",
    duration: "Aug 2025 - Present",
    description: "Leveraging team leadership and marketing skills to promote Unstop's platform.",
  },
  {
    icon: Briefcase,
    title: "Contributor & Campus Ambassador",
    organization: "GirlScript Summer of Code",
    duration: "Jun 2025 - Present",
    description: "Contributing to MERN stack projects and representing GSSoC on campus.",
  },
  {
    icon: Briefcase,
    title: "Public Relations & Outreach Head",
    organization: "GeeksforGeeks Campus Body",
    duration: "Jul 2025 - Present",
    description: "Leading outreach initiatives and managing public relations for the campus chapter.",
  },
  {
    icon: Briefcase,
    title: "Founder and President",
    organization: "TERMINAL TROOPS",
    duration: "May 2025 - Present",
    description: "Founded and currently leading a community focused on technology and development.",
  },
];


export const projectsData = [
    {
        title: "MediTrack",
        tagline: "A comprehensive solution for tracking medical records and appointments.",
        tech: ["TypeScript", "React", "Node.js", "MongoDB"],
        links: {
            github: "https://github.com/Iankitsinghak/MediTrack",
            live: "https://medi-track-indol.vercel.app"
        },
        featured: true,
        details: {
            description: "MediTrack is a full-stack application designed to help users manage their health records, track medical history, and schedule appointments with healthcare providers seamlessly.",
            challenges: "Implementing a secure authentication system for patient data privacy and ensuring the real-time synchronization of appointment slots across different users.",
            outcomes: "Developed a user-friendly platform that simplifies medical management. The project demonstrates strong skills in full-stack development, database management, and user-centric design."
        }
    },
    {
        title: "Sarkari-Sahayak",
        tagline: "A platform to simplify access to government schemes and services.",
        tech: ["TypeScript", "Next.js", "TailwindCSS", "Firebase"],
        links: {
            github: "https://github.com/Iankitsinghak/Sarkari-Sahayak",
            live: "https://sarkari-sahayak.vercel.app"
        },
        featured: false,
        details: {
            description: "An application aimed at making information about government schemes easily accessible to citizens, featuring search, filtering, and application tracking functionalities.",
            challenges: "Aggregating and structuring data from various government portals. Creating an intuitive UI that is accessible to users with varying levels of digital literacy.",
            outcomes: "A valuable resource for citizens that reduces the complexity of finding and applying for government assistance programs."
        }
    },
    {
        title: "skillforge-x",
        tagline: "An online platform for skill development and project collaboration.",
        tech: ["JavaScript", "React", "Express", "PostgreSQL"],
        links: {
            github: "https://github.com/Iankitsinghak/skillforge-x",
            live: "https://skillforge-x.vercel.app"
        },
        featured: false,
        details: {
            description: "A collaborative web application where users can join projects, learn new skills, and showcase their work. It includes features for team formation and progress tracking.",
            challenges: "Building a real-time chat feature for project teams and designing a recommendation engine to suggest relevant projects to users based on their skills.",
            outcomes: "A functional MVP that connects learners and builders, fostering a community of collaborative development and continuous learning."
        }
    },
  {
    title: "smart_weather_dash",
    tagline: "A smart weather dashboard with real-time data and forecasts.",
    tech: ["JavaScript", "HTML/CSS", "Weather API"],
    links: {
        github: "https://github.com/Iankitsinghak/smart_weather_dash",
        live: "https://smart-weather-dash.vercel.app"
    },
    featured: false,
    details: {
        description: "A clean and modern weather dashboard that provides current weather conditions, multi-day forecasts, and other meteorological data by integrating with a third-party weather API.",
        challenges: "Handling asynchronous API calls gracefully and presenting the data in a visually appealing and easy-to-understand format.",
        outcomes: "A responsive and practical weather application that demonstrates proficiency in working with external APIs and frontend data visualization."
    }
  },
  {
    title: "OpenSauce Contribution",
    tagline: "Contributed to a community-driven DSA repository.",
    tech: ["Java", "DSA"],
    links: {
        github: "https://github.com/Iankitsinghak/OpenSauce",
        live: ""
    },
    featured: false,
    details: {
        description: "Contributed data structures and algorithms code to a popular open-source repository aimed at providing a comprehensive collection of DSA implementations.",
        challenges: "Adhering to the project's coding standards and contribution guidelines, and ensuring the correctness and efficiency of the submitted code.",
        outcomes: "Successfully merged contributions into the main branch, demonstrating the ability to collaborate on open-source projects and a strong understanding of fundamental computer science concepts."
    }
  },
  {
    title: "food-troops",
    tagline: "A web application for food discovery and ordering.",
    tech: ["JavaScript", "HTML/CSS"],
    links: {
        github: "https://github.com/Iankitsinghak/food-troops",
        live: "https://food-troops.vercel.app"
    },
    featured: false,
    details: {
        description: "A front-end application for a food delivery service, allowing users to browse restaurants, view menus, and place orders.",
        challenges: "Creating a responsive and engaging user interface for browsing a large variety of food options.",
        outcomes: "A visually appealing prototype that showcases front-end development skills and UI/UX design considerations."
    }
  },
  {
    title: "gistify",
    tagline: "An AI-powered webpage summarizer.",
    tech: ["JavaScript", "AI"],
    links: {
        github: "https://github.com/Iankitsinghak/gistify",
        live: "https://gistify-snowy.vercel.app"
    },
    featured: false,
    details:
    {
        description: "An AI-powered tool that takes a webpage URL and provides a concise summary of its content, making it easy to digest information quickly.",
        challenges: "Integrating with a third-party AI service for summarization and handling various webpage structures to extract the main content effectively.",
        outcomes: "A useful utility that demonstrates the practical application of AI in a web-based tool, showcasing skills in API integration and asynchronous programming."
    }
  },
  {
    title: "Similarity-cheaker-from-Books",
    tagline: "A C++ tool to detect content overlap in texts.",
    tech: ["C++"],
    links: {
        github: "https://github.com/Iankitsinghak/Similarity-cheaker-from-Books",
        live: ""
    },
    featured: false,
    details: {
        description: "A command-line tool written in C++ that analyzes text from multiple book files to check for similarity and potential plagiarism.",
        challenges: "Implementing an efficient algorithm for text comparison and handling large file I/O operations without compromising performance.",
        outcomes: "A high-performance utility that showcases a strong understanding of C++ and fundamental algorithms for text processing."
    }
  }
];


export const skillsData = [
  { skill: "DevOps", level: 85 },
  { skill: "System Architect", level: 90 },
  { skill: "Backend", level: 80 },
  { skill: "DSA", level: 95 },
  { skill: "AI Tools", level: 90 },
];

export const coreCompetencies: { name: string; icon: LucideIcon }[] = [
  { name: "C", icon: Code },
  { name: "C++", icon: Code },
  { name: "Java", icon: Code },
  { name: "Python", icon: Code },
  { name: "JavaScript", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "OOPs", icon: BrainCircuit },
  { name: "React", icon: Code },
  { name: "Next.js", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Server },
  { name: "Flask", icon: Server },
  { name: "Spring Boot", icon: Server },
  { name: "PostgreSQL", icon: Server },
  { name: "MongoDB", icon: Server },
  { name: "Tailwind CSS", icon: Code },
  { name: "Docker", icon: Terminal },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "SQL", icon: Server },
  { name: "HLD", icon: BrainCircuit },
  { name: "LLD", icon: BrainCircuit },
  { name: "DBMS", icon: Server },
];


export const learningBadges = [
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Terminal },
  { name: "Kubernetes", icon: Rocket },
];

export const certificationsData = [
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "Issued Jul 2025",
    credentialId: "B73684D1276B",
    skills: "SQL, Oracle SQL Developer",
  },
  {
    title: "Object Oriented Programming",
    issuer: "Daksh Gurukul IIT Guwahati",
    date: "Issued Jun 2025",
    credentialId: null,
    skills: "C++, OOP",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "Issued Jun 2025",
    credentialId: "96671AFDCCF1",
    skills: "SQL",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Issued Jun 2025",
    credentialId: "1802C83B9E97",
    skills: "SQL",
  },
  {
    title: "ICDMAI Hackathon",
    issuer: "Semi-Finalist",
    date: "",
    credentialId: null,
    skills: "Team collaboration, Prototyping, and problem-solving.",
  },
  {
    title: "Adobe India Hackathon",
    issuer: "Participant",
    date: "",
    credentialId: null,
    skills: "Creative problem-solving and rapid application development.",
  },
  {
    title: "Smart India Hackathon 2024",
    issuer: "University Rank #2",
    date: "",
    credentialId: null,
    skills: "Led backend development and trained the ML model for the team project.",
  },
  {
    title: "NCC 'B' Certificate",
    issuer: "National Cadet Corps",
    date: "",
    credentialId: null,
    skills: "Discipline, Leadership, Teamwork",
  },
];


export const generateGithubContributions = () =>
  Array.from({ length: 365 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 365 + i);
    const count = Math.random() > 0.3 ? Math.floor(Math.random() * 10) : 0;
    return {
      date: date.toISOString().split('T')[0],
      count: count,
    };
  });

export const gfgStats = {
  score: "900",
  problemsSolved: "250+",
  rank: "4",
};

export const socialLinks = {
  github: "https://github.com/Iankitsinghak",
  linkedin: "https://www.linkedin.com/in/ankit-singh-ak29/",
  resume: "https://drive.google.com/file/d/11GqMLnP-R7fQxBt_V1WtFIvVUzXDi2rz/view?usp=share_link",
};

