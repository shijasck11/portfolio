import type { Project, Experience, Publication } from './types';
import { GithubIcon, LinkedinIcon, MailIcon } from './components/icons';

export const PERSONAL_INFO = {
  name: "Shijas Cherakkatil",
  title: "Software Developer",
  email: "shijaswork@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/shijasck11", icon: GithubIcon },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammed-shijas-cherakkatil-50584a15b/", icon: LinkedinIcon },
    { name: "Email", url: "mailto:shijaswork@gmail.com", icon: MailIcon },
  ],
  about: "I'm a passionate Junior Software Developer with a strong foundation in full-stack development and a specialized focus on creating immersive 3D/VR environments for transportation simulations. My work at SimuTraffX Lab at York University has allowed me to bridge the gap between complex traffic software like SUMO/Vissim and interactive 3D engines like Unity. I am driven by the challenge of optimizing performance, building intuitive user interfaces, and leveraging technology to solve real-world problems. My experience spans from mobile and web app development to pioneering co-simulation tools for road safety research."
};

export const SKILLS = {
    "3D & Simulation": ["Unity", "C#", "SUMO", "Vissim", "VR/AR", "Blender"],
    "Frontend": ["React", "React Native", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "Python", "RESTful API", "Django"],
    "Databases": ["MongoDB", "PostgreSQL", "Firebase", "SQL"],
    "Cloud & DevOps": ["Google Cloud", "Git", "GitHub", "Heroku"],
};

export const PROJECTS: Project[] = [
  {
    title: "Vissim & SUMO to Unity Integration",
    description: "Developed a co-simulation tool to link traffic simulators with Unity for immersive 3D/VR analysis.",
    longDescription: [
        "Spearheaded the integration of traffic simulators (SUMO, Vissim) with the Unity 3D engine.",
        "Created realistic, immersive VR environments for traffic safety analysis and infrastructure planning.",
        "Implemented performance optimizations like Occlusion Culling and LOD, achieving a 35% frame rate improvement.",
        "Developed a tool enabling interactive analysis of complex traffic scenarios.",
        "The project's success led to a publication in the 2024 IEEE Intelligent Vehicles Symposium."
    ],
    tags: ["Unity", "C#", "SUMO", "Vissim", "VR", "Performance Optimization"],
    image: "/media/SimuTrafixLab.jpg",
    githubUrl: "https://github.com/SUMO2Unity/SUMO2Unity",
    videos: [{ title: "Demo", url: "https://www.youtube-nocookie.com/embed/9nSCKIz6lQI?autoplay=1&mute=1&controls=0&loop=1&playlist=9nSCKIz6lQI&playsinline=1" }],
  },
  {
    title: "VibeTribe",
    description: "A full-stack mobile app for service booking, built with React Native and a Node.js backend.",
    longDescription: [
        "Led UI/UX and full-stack development for a mobile service booking application.",
        "Built a cross-platform, responsive UI using React Native Expo.",
        "Developed the backend with Node.js and Express, utilizing a MongoDB database.",
        "Implemented key features including secure user authentication, profile management, and service booking.",
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
    title: "CampusBuddy",
    description: "A web application built with Angular and PostgreSQL to assist students with campus life.",
    longDescription: [
        "Developed a web platform to enhance the student campus experience.",
        "Built the front-end with Angular and TypeScript, focusing on a clean, intuitive UI.",
        "Implemented features such as user registration, profiles, and a search function.",
        "Designed the PostgreSQL database schema and built REST APIs using Node.js and Express."
    ],
    tags: ["Angular", "TypeScript", "Node.js", "PostgreSQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const EXPERIENCE: Experience = {
  role: "Junior Software Developer",
  company: "SimuTraffX Lab - York University",
  period: "May 2023 – Present",
  description: [
    "Developed a large-scale (60 km) Vissim-Unity digital twin, optimizing real-time traffic simulation performance through Level of Detail (LOD), occlusion culling, and advanced animation techniques.",
    "Co-authored and developed the SUMO2Unity tool, engineering the Python (SUMO) to C# (Unity) data link using ZMQ for real-time co-simulation, resulting in a published IEEE paper.",
    "Built a Unity-based data visualization tool for academic research, implementing C# algorithms to display complex pedestrian analytics, including social force models, Level of Service (LOS), and interactive heatmaps.",
    "Managed the complete 3D asset pipeline for multiple projects, using Blender and RoadRunner to create and optimize vehicles, road signs, and environments for efficient real-time rendering.",
    "Produced a series of educational road safety videos, handling the full production cycle from research and storyboarding to building 3D scenes in Unity and final video editing."
  ],
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
        date: "2025",
        url: "https://www.mdpi.com/2076-3417/15/17/9351"
    },
    {
        title: "Development of a Virtual Reality Traffic Simulation to Analyze Road User Behavior",
        conference: "2025 7th International Congress on Human-Computer Interaction, Optimization and Robotic Applications (ICHORA 2025)",
        date: "2025",
        url: "https://ieeexplore.ieee.org/abstract/document/11017092"
    },
    {
        title: "A Novel Virtual Reality Traffic Simulation for Enhanced Traffic Safety Assessment",
        conference: "Article",
        date: "2025",
        url: "https://www.preprints.org/frontend/manuscript/a08583452234cda693f9649c194b4320/download_pub"
    }
];



export const GEMINI_CONTEXT = `
You are Shijas Cherakkatil's AI assistant. Your purpose is to answer questions from recruiters and hiring managers about Shijas's skills, experience, and projects based ONLY on the context provided below. Be professional, concise, and helpful. Frame your answers from the perspective of an assistant talking about Shijas. Do not make up information. If the answer is not in the context, say "I don't have specific information on that, but I can tell you about his related skills and experience."

**CONTEXT ABOUT SHIJAS CHERAKKATIL:**

**Role:** Junior Software Developer at SimuTraffX Lab, York University.

**Summary:**
Shijas is a software developer focused on full-stack development and creating immersive 3D/VR environments for transportation simulations. He integrates traffic software like SUMO and Vissim with Unity. He is passionate about performance optimization, building intuitive UIs, and solving real-world problems.

**Work Experience: SimuTraffX Lab - York University (May 2023 - Present)**
- Developed a large-scale (60 km) Vissim-Unity digital twin, optimizing real-time traffic simulation performance through Level of Detail (LOD), occlusion culling, and advanced animation techniques.
- Co-authored and developed the SUMO2Unity tool, engineering the Python (SUMO) to C# (Unity) data link using ZMQ for real-time co-simulation, resulting in a published IEEE paper.
- Built a Unity-based data visualization tool for academic research, implementing C# algorithms to display complex pedestrian analytics, including social force models, Level of Service (LOS), and interactive heatmaps.
- Managed the complete 3D asset pipeline for multiple projects, using Blender and RoadRunner to create and optimize vehicles, road signs, and environments for efficient real-time rendering.
- Produced a series of educational road safety videos, handling the full production cycle from research and storyboarding to building 3D scenes in Unity and final video editing.

**Key Skills:**
- **3D & Simulation:** Unity, C#, SUMO, Vissim, VR/AR, Blender
- **Frontend:** React, React Native, Angular, TypeScript, JavaScript, HTML, CSS, Tailwind CSS
- **Backend:** Node.js, Express, Python, RESTful API, Django
- **Databases:** MongoDB, PostgreSQL, Firebase, SQL
- **Cloud & DevOps:** Google Cloud, Git, GitHub, Heroku

**Projects:**
1.  **Vissim & SUMO to Unity Integration:** This is his main work at the research lab. He developed a tool to connect traffic simulators with Unity for immersive 3D/VR analysis. This work resulted in a published IEEE paper. Key technologies are Unity, C#, SUMO, Vissim, VR.
2.  **VibeTribe (Mobile App):** A full-stack mobile app for service booking. It includes user authentication and profile management. Built with React Native, TypeScript, Node.js, MongoDB, and Google Cloud.
3.  **CampusBuddy (Web App):** A full-stack web application for students with registration and search features. Built with Angular, TypeScript, Node.js, and PostgreSQL.

**Academic Publications:**
- **SUMO2Unity:** An Open-Source Traffic Co-Simulation Tool to Improve Road Safety (IEEE IV 2024)
- **An Open-Source Virtual Reality Traffic Co-Simulation for Enhanced Traffic Safety Assessment** (Applied Sciences 2025)
- **Development of a Virtual Reality Traffic Simulation to Analyze Road User Behavior** (2025 7th International Congress on Human-Computer Interaction, Optimization and Robotic Applications (ICHORA 2025))
- **A Novel Virtual Reality Traffic Simulation for Enhanced Traffic Safety Assessment** (Article)

**Education:**
- Seneca College - Computer Programming and Analysis.
`;