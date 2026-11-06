import type { Project, Experience, Publication, Education } from './types';
import { 
    GithubIcon, 
    LinkedinIcon, 
    MailIcon, 
    GlobeIcon,
} from '../components/icons';

export const PERSONAL_INFO = {
  name: "Shijas Cherakkatil",
  title: "Software Developer",
  email: "shijaswork@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/shijasck11", icon: GithubIcon },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammed-shijas-cherakkatil-50584a15b", icon: LinkedinIcon },
    { name: "Email", url: "mailto:shijaswork@gmail.com", icon: MailIcon },
    { name: "Portfolio", url: "https://shijas.netlify.app/", icon: GlobeIcon },
  ],
  about: "I'm a passionate Software Developer with a strong foundation in full-stack development, native desktop engineering, and immersive 3D/VR environments. My work at SimuTraffX Lab at York University allowed me to bridge the gap between complex traffic software like SUMO/Vissim and interactive 3D engines like Unity. Most recently, I architected and launched NeatNotes, a high-performance native Windows note-taking application built with C#, .NET 8, and WinUI 3. I am driven by the challenge of optimizing performance—whether tuning Win2D rendering pipelines for infinite canvases or building intuitive user interfaces. My experience spans from mobile and web app development to pioneering co-simulation tools and publishing production-ready applications to the Microsoft Store."
};

export const SKILLS = {
    "Languages & Frameworks": [
        { name: "C#", icon: "/media/skills/csharp.svg" },
        { name: "React Native", icon: "/media/skills/react-native.svg" },
        { name: "Angular", icon: "/media/skills/angular.svg" },
        { name: ".NET 8", icon: "/media/skills/csharp.svg" },
        { name: "TypeScript", icon: "/media/skills/typescript.svg" },
        { name: "JavaScript", icon: "/media/skills/javascript.svg" },
        { name: "HTML", icon: "/media/skills/html.svg" },
        { name: "CSS", icon: "/media/skills/css.svg" },
        { name: "Tailwind CSS", icon: "/media/skills/tailwind-css.svg" },
        { name: "Node.js", icon: "/media/skills/nodejs.svg" },
        { name: "Express", icon: "/media/skills/express.svg" },
        { name: "Python", icon: "/media/skills/python.svg" },
        { name: "RESTful API", icon: "/media/skills/rest-api.svg" },
        { name: "Django", icon: "/media/skills/django.svg" },
        { name: "WinUI 3", icon: "/media/skills/winui.svg" },
        { name: "XAML", icon: "/media/skills/xaml.svg" },
        { name: "Win2D", icon: "/media/skills/win2d.svg" }
    ],
    "3D & Simulation": [
        { name: "Unity", icon: "/media/skills/unity.svg" },
        { name: "C#", icon: "/media/skills/csharp.svg" },
        { name: "SUMO", icon: "/media/skills/sumo.svg" },
        { name: "Vissim", icon: "/media/skills/vissim.svg" },
        { name: "VR/AR", icon: "/media/skills/vr-ar.svg" },
        { name: "Blender", icon: "/media/skills/blender.svg" }
    ],    
    "Databases": [
        { name: "MongoDB", icon: "/media/skills/mongodb.svg" },
        { name: "PostgreSQL", icon: "/media/skills/postgresql.svg" },
        { name: "Firebase", icon: "/media/skills/firebase.svg" },
        { name: "SQL", icon: "/media/skills/sql.svg" }
    ],
    "Cloud & DevOps": [
        { name: "Google Cloud", icon: "/media/skills/google-cloud.svg" },
        { name: "Git", icon: "/media/skills/git.svg" },
        { name: "GitHub", icon: "/media/skills/github.svg" },
        { name: "Heroku", icon: "/media/skills/heroku.svg" }
    ],
};

export const PROJECTS: Project[] = [
  {
    slug: "neatnotes",
    title: "NeatNotes",
    description: "A lightning-fast, native Windows note-taking app featuring an infinite canvas, smart math solver, and total local privacy.",
    longDescription: [
        "Architected and developed a production-grade native desktop application using C#, .NET 8, and the Windows App SDK (WinUI 3).",
        "Engineered a high-performance infinite canvas with ultra-low latency vector inking and stylus pressure sensitivity using the Win2D graphics engine.",
        "Integrated an algorithmic math solver capable of parsing and calculating handwritten equations directly on the canvas.",
        "Designed a local-first file system architecture, ensuring secure, offline data ownership without forced cloud synchronization.",
        "Managed the full release pipeline, passing Windows App Certification Kit (WACK) validation and deploying optimized x64/ARM64 MSIX bundles to the Microsoft Store.",
        "Established a professional GitHub workflow featuring strict branching, PR templates, and YAML-based issue form tracking."
    ],
    tags: ["C#", ".NET 8", "WinUI 3", "Win2D", "MSIX", "Windows App SDK"],
    image: "/media/NeatNotes.png", // Replace with your actual screenshot path
    liveUrl: "https://stamesoftwares.github.io/",
    microsoftStoreUrl: "https://apps.microsoft.com/detail/9N8H9XZMHLH6?hl=en-us&gl=CA&ocid=pdpshare",
    linkIcon: "/media/NeatNotesLogoSquare256.png", // Replace with your actual icon path
  },
  {
    slug: "sumo2unity",
    title: "Sumo2Unity",
    description: "Developed a co-simulation tool to link traffic simulators with Unity for immersive 3D/VR analysis.",
    longDescription: [
        "Spearheaded the integration of SUMO traffic simulation software with the Unity 3D engine.",
        "Created realistic, immersive VR environments for traffic safety analysis and infrastructure planning.",
        "Focused on performance, implementing Occlusion Culling and LOD adjustments to achieve a 35% frame rate improvement.",
        "Enabled researchers to analyze complex traffic scenarios in a highly interactive and visual manner.",
        "The project's success led to a publication in the 2024 IEEE Intelligent Vehicles Symposium."
    ],
    tags: ["Unity", "C#", "SUMO", "Vissim", "VR/AR", "Performance Optimization"],
    image: "/media/SimuTrafixLab.jpg",
    githubUrl: "https://github.com/SimuTraffX-Lab/SUMO2Unity",
    videos: [{ title: "Demo", url: "https://www.youtube.com/watch?v=9nSCKIz6lQI&list=TLGGlvP7zGF-afwyNDAzMjAyNg&t=4s" }],
  },
  {
    slug: "vibetribe",
    title: "VibeTribe",
    description: "A full-stack mobile app for service booking, built with React Native and a Node.js backend.",
    longDescription: [
        "Led the UI/UX and full-stack development of a mobile app connecting users with local service providers.",
        "Built a cross-platform, responsive interface using React Native Expo.",
        "Developed a robust backend with Node.js, Express, and MongoDB for flexible data storage.",
        "Implemented key features such as secure user authentication, profile management, and a seamless booking system.",
        "Hosted all backend services and data on Google Cloud for scalability and reliability."
    ],
    tags: ["React Native", "TypeScript", "Node.js", "MongoDB", "Google Cloud", "Express"],
    image: "/media/VibeTribe.jpg",
    videos: [
        { title: "Create Business Profile", url: "/media/Videos/businessProfileCreation.mp4" },
        { title: "Make A Booking", url: "/media/Videos/MakingABooking.mp4" },
        { title: "Create an Event", url: "/media/Videos/creatingEvent.mp4" }
    ],
    isMobile: true,
  },
  {
    slug: "campusbuddy",
    title: "CampusBuddy",
    description: "A web application built with Angular and PostgreSQL to assist students with campus life.",
    longDescription: [
        "Developed a web platform to enhance the student experience, featuring user registration, profiles, and search functionality.",
        "Built a clean and intuitive front-end using Angular and TypeScript.",
        "Designed the PostgreSQL database schema from scratch.",
        "Built the RESTful API backend using Node.js and Express.",
        "Managed the full development lifecycle, from database design to front-end implementation."
    ],
    tags: ["Angular", "TypeScript", "Node.js", "PostgreSQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const EXPERIENCE: Experience = {
  role: "Junior Software Developer",
  company: "SimuTraffX Lab - York University",
  period: "May 2023 – Dec 2025",
  description: [
    "Integrating transportation software (SUMO & Vissim) with Unity and C# to build immersive 3D and VR/AR environments for traffic scenario analysis.",
    "Utilizing Python to establish a robust connection with transportation software, facilitating the retrieval of critical real-time data.",
    "Implementing various algorithms and techniques, such as Occlusion Culling, to improve the overall performance of the Unity project, resulting in a 35% frame rate improvement.",
    "Building responsive and user-friendly interfaces for simulation control and data visualization.",
    "Ensuring code quality and collaboration by effectively utilizing version control systems like GitHub for code distribution, review, and management."
  ],
};

export const EDUCATION: Education = {
    institution: "Seneca College",
    degree: "Computer Programming and Analysis",
    period: "May 2019 - Aug 2022",
    details: [
        "Specialized in full-stack development, database management, and object-oriented programming.",
        "Key Coursework: Advanced Web Development (React, Angular), Database Design (SQL, NoSQL), Systems Analysis and Design.",
        "Completed a capstone project (CampusBuddy) that involved designing and implementing a full-stack web application from scratch."
    ]
};

export const PUBLICATIONS: Publication[] = [
    {
        title: "SUMO2Unity: An Open-Source Traffic Co-Simulation Tool to Improve Road Safety",
        conference: "2024 IEEE Intelligent Vehicles Symposium (IV)",
        date: "2024",
        url: "https://ieeexplore.ieee.org/abstract/document/10588571"
    },
    {
        title: "An Open-Source Virtual Reality Traffic Co-Simulation for Enhanced Traffic Safety Assessment",
        conference: "Applied Sciences",
        date: "2024",
        url: "https://www.mdpi.com/2076-3417/15/17/9351"
    },
    {
        title: "Development of a Virtual Reality Traffic Simulation to Analyze Road User Behavior",
        conference: "7th International Congress on Human-Computer Interaction, Optimization and Robotic Applications (ICHORA 2025)",
        date: "2025",
        url: "https://ieeexplore.ieee.org/abstract/document/11017092"
    },
    {
        title: "A Novel Virtual Reality Traffic Simulation for Enhanced Traffic Safety Assessment",
        conference: "n International Conference on Artificial Intelligence and Virtual Reality",
        date: "2025",
        url: "https://journals.sagepub.com/doi/abs/10.1177/03611981241238127"
    }
];
