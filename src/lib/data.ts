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
        title: "MediTrack",
        tagline: "A comprehensive solution for tracking medical records and appointments.",
        tech: ["TypeScript", "React", "Node.js", "MongoDB"],
        links: {
            github: "https://github.com/Iankitsinghak/MediTrack",
            live: ""
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
            live: ""
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
            live: ""
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
          live: ""
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
        live: ""
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
      live: ""
  },
  featured: false,
  details: {
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
  github: "https://github.com/Iankitsinghak",
  linkedin: "https://linkedin.com/in/ankitsinglr26",
  resume: "/resume.pdf",
};
