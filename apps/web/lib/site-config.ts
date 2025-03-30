import { Icons } from "@/components/icons";
import { Education, Experience, SkillCategory } from "@/types";
import {
  Home,
  User,
  Code,
  Rocket,
  Mail,
  Database,
  Server,
  Globe,
  Cloud,
  Braces,
  GitBranch,
} from "lucide-react";

export const sections = {
  home: {
    title: "Home",
    url: "#home",
    icon: Home,
  },
  about: {
    title: "About",
    url: "#about",
    icon: User,
  },
  skills: {
    title: "Skills",
    url: "#skills",
    icon: Code,
  },
  projects: {
    title: "Projects",
    url: "#projects",
    icon: Rocket,
  },
  contact: {
    title: "Contact",
    url: "#contact",
    icon: Mail,
  },
};

const name = "Paul Lam";
const legalName = "Ka Shing Lam";
export const titleOfSite = `${name}'s Digital Garde`;
export const titleTemplateOfSite = `%s • ${titleOfSite}`;

const email = "lamkashingpaul@gmail.com";
const phone = "+852 9779 6767";
export const personalInfo = {
  name,
  fullname: legalName,
  location: "Hong Kong",
  email,
  languages: ["Cantonese", "English", "Mandarin"],
  phone,
};

export const socialLinks = {
  gitHub: "https://github.com/lamkashingpaul",
  linkedIn: "https://www.linkedin.com/in/lamkashingpaul/",
  email: `mailto:${email}`,
  resume: "#",
  phone: `tel:+${phone.replace(/\D/g, "")}`,
};

export const experiences: Experience[] = [
  {
    title: "Junior Software Developer",
    company: "Forex Forest Limited",
    period: "Jun 2022 - Present",
    descriptions: [
      "Developed a full-stack web application with Next.js and NestJS, enhancing user access to trading data. Designed robust PostgreSQL database schemas and streamlined interactions using MikroORM, reducing coding time by 40%. Engineered scalable architecture on AWS, ensuring 99.9% uptime.",
      "Collaborated with external developers to improve client system functionality, increasing user engagement by 30%. Redesigned over 15 frontend pages with React and TypeScript. Conducted code reviews to enhance code quality, reducing bugs by 25%, and created CI/CD pipelines to cut development time by 20%.",
      "Designed a validation server for software license authentication, collaborating with product teams to define criteria. Developed RESTful APIs for license validation, leading to a 40% reduction in licensing issues through enhanced testing and error handling.",
    ],
  },
];

export const educations: Education[] = [
  {
    degree: "Bachelor of Science in Mathematics and Information Engineering",
    institution: "The Chinese University of Hong Kong, Hong Kong",
    period: "Sep 2018 - Jul 2022",
    descriptions: [
      "Learned the fundamentals of mathematics and information engineering, including data structures, algorithms, and software engineering principles.",
      "Earned dean's list honors for outstanding academic performance in academic years 2018-2019 and 2019-2020.",
    ],
  },
];

export const skillIcons = [
  Icons.nextJs,
  Icons.reactJs,
  Icons.tailwindCss,
  Icons.typeScript,
  Icons.nodeJs,
  Icons.expressJs,
  Icons.postgreSql,
  Icons.docker,
  Icons.git,
  Icons.jest,
  Icons.python,
  Icons.javaScript,
  Icons.html5,
  Icons.css,
  Icons.nestJs,
  Icons.terraform,
  Icons.postman,
  Icons.aws,
  Icons.shadcnUi,
  Icons.mySql,
  Icons.reactQuery,
  Icons.redux,
  Icons.githubActions,
  Icons.mui,
  Icons.vite,
  Icons.turborepo,
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Braces,
    skills: [
      { name: "Python", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "Next.js", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "Tailwind CSS", level: "intermediate" },
      { name: "Framer Motion", level: "beginner" },
      { name: "HTML", level: "beginner" },
      { name: "CSS", level: "beginner" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "NestJS", level: "advanced" },
      { name: "Express.js", level: "intermediate" },
      { name: "Node.js", level: "beginner" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "advanced" },
      { name: "MySQL", level: "intermediate" },
      { name: "Redis", level: "beginner" },
      { name: "MongoDB", level: "beginner" },
    ],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: [
      { name: "Git", level: "advanced" },
      { name: "Docker", level: "intermediate" },
      { name: "CI/CD", level: "intermediate" },
      { name: "GitHub Actions", level: "intermediate" },
    ],
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    skills: [
      { name: "AWS", level: "advanced" },
      { name: "Azure", level: "beginner" },
    ],
  },
];
