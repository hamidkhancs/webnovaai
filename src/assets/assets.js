import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaMobileAlt, FaTools, FaVuejs, FaDatabase, FaCloud, FaJsSquare, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.jpg';
import projectImg2 from '../assets/projects2.jpg';
import projectImg3 from '../assets/project3.jpg';
import projectImg4 from '../assets/project4.webp';
import projectImg5 from '../assets/project5.webp';
import projectImg6 from '../assets/project6.avif';

export const assets = {
    profileImg,
}

export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Creative Thinker',
      description: 'I design intuitive and engaging interfaces that enhance user experience and deliver results.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design-Focused',
      description: 'Every project I build balances functionality and aesthetic appeal for modern web experiences.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Efficient Coder',
      description: 'I write clean, modular, and maintainable code using best practices and modern frameworks.',
      color: 'text-blue'
    }
];

export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Creating responsive, interactive web applications with React, Tailwind, and modern frontend tools.',
    tags: ['React', 'Next.js', 'Vue.js', 'JavaScript', 'TypeScript']
  },
  {
    title: 'UI/UX Design',
    icon: FaPaintBrush,
    description: 'Building visually appealing and user-friendly interfaces using modern design principles.',
    tags: ['Figma', 'Adobe XD', 'Tailwind CSS', 'CSS3', 'HTML5']
  },
  {
    title: 'Performance Optimization',
    icon: FaCode,
    description: 'Optimizing frontend performance, reducing load times, and improving accessibility across devices.',
    tags: ['Code Splitting', 'Lazy Loading', 'Responsive Design', 'SEO', 'Web Vitals']
  },
  {
    title: 'Modern JavaScript',
    icon: FaJsSquare,
    description: 'Writing modern, maintainable JavaScript with ES6+ features and best practices.',
    tags: ['ES6+', 'DOM Manipulation', 'Promises', 'Async/Await', 'Fetch API']
  },
  {
    title: 'Cross-Platform Apps',
    icon: FaMobileAlt,
    description: 'Developing mobile-friendly and progressive web applications for various platforms.',
    tags: ['React Native', 'PWA', 'Responsive Design']
  },
  {
    title: 'Developer Tools',
    icon: FaTools,
    description: 'Using essential tools to enhance workflow, version control, and testing for frontend projects.',
    tags: ['Git', 'VS Code', 'Jest', 'ESLint', 'Prettier']
  }
];

export const projects = [
  {
    title: "Modern Portfolio Website",
    description: "A sleek, responsive portfolio to showcase my projects and skills with interactive animations and dark/light mode support.",
    image: projectImg1,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Interactive Dashboard",
    description: "A data visualization dashboard with charts, filters, and responsive design for seamless user experience.",
    image: projectImg2,
    tech: ["React", "Chart.js", "Tailwind CSS"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "E-Commerce Frontend",
    description: "A fast, responsive online store frontend with dynamic product listings, filters, and animations.",
    image: projectImg3,
    tech: ["React", "Next.js", "Tailwind CSS"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Landing Page Template",
    description: "A modern, mobile-friendly landing page template with animations, responsive layout, and call-to-action sections.",
    image: projectImg4,
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    icons: [FaCode, FaPaintBrush],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat Interface UI",
    description: "A real-time chat interface with clean design, message animations, and interactive UI components.",
    image: projectImg5,
    tech: ["React", "Socket.IO", "Tailwind CSS"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Gallery",
    description: "A frontend interface to generate, display, and manage AI-generated images with smooth animations and responsive layout.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Tailwind CSS"],
    icons: [FaRobot, FaReact],
    demo: "#",
    code: "#",
  }
];

export const workData = [
  {
    role: "Frontend Developer",
    company: "Freelance Projects",
    duration: "2021 - Present",
    description:
      "Building responsive websites and modern web applications for clients, focusing on UI/UX, performance, and maintainability.",
    color: "purple"
  },
  {
    role: "Junior Frontend Developer",
    company: "Creative Web Studio",
    duration: "2019 - 2021",
    description:
      "Developed landing pages, interactive UI components, and assisted in design implementation for client projects.",
    color: "pink"
  },
  {
    role: "Intern Frontend Developer",
    company: "Startup Lab",
    duration: "2018 - 2019",
    description:
      "Learned modern frontend practices, built prototypes, and contributed to web projects under mentorship.",
    color: "blue"
  }
];
