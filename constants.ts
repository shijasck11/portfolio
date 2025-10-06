import type { Project, Experience, Publication, Education } from './types';
import { 
    GithubIcon, 
    LinkedinIcon, 
    MailIcon, 
    GlobeIcon,
} from './components/icons';

export const PERSONAL_INFO = {
  name: "Shijas Cherakkatil",
  title: "Junior Software Developer",
  email: "shijaswork@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/shijasck11", icon: GithubIcon },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shijas-cherakkatil/", icon: LinkedinIcon },
    { name: "Email", url: "mailto:shijaswork@gmail.com", icon: MailIcon },
    { name: "Portfolio", url: "https://shijas.netlify.app/", icon: GlobeIcon },
  ],
  about: "I'm a passionate Junior Software Developer with a strong foundation in full-stack development and a specialized focus on creating immersive 3D/VR environments for transportation simulations. My work at SimuTraffX Lab at York University has allowed me to bridge the gap between complex traffic software like SUMO/Vissim and interactive 3D engines like Unity. I am driven by the challenge of optimizing performance, building intuitive user interfaces, and leveraging technology to solve real-world problems. My experience spans from mobile and web app development to pioneering co-simulation tools for road safety research."
};

export const SKILLS = {
    "3D & Simulation": [
        { name: "Unity", icon: "/media/skills/unity.svg" },
        { name: "C#", icon: "/media/skills/csharp.svg" },
        { name: "Java", icon: "/media/skills/Java.svg" },
        { name: "SUMO", icon: "/media/skills/sumo.svg" },
        { name: "Vissim", icon: "/media/skills/Vissim.svg" },
        { name: "VR/AR", icon: "/media/skills/vr-ar.svg" },
        { name: "Blender", icon: "/media/skills/blender.svg" }
    ],
    "Frontend": [
        { name: "React", icon: "/media/skills/react.svg" },
        { name: "React Native", icon: "/media/skills/react.svg" },
        { name: "Angular", icon: "/media/skills/angular.svg" },
        { name: "TypeScript", icon: "/media/skills/typescript.svg" },
        { name: "JavaScript", icon: "/media/skills/javascript.svg" },
        { name: "HTML5", icon: "/media/skills/html.svg" },
        { name: "CSS3", icon: "/media/skills/css.svg" },
        { name: "Tailwind CSS", icon: "/media/skills/tailwind-css.svg" },
        { name: "Bootstrap", icon: "/media/skills/bootstrap.svg" }
    ],
    "Backend": [
        { name: "Node.js", icon: "/media/skills/nodejs.svg" },
        { name: "Express", icon: "/media/skills/express.svg" },
        { name: "Python", icon: "/media/skills/python.svg" },
        { name: "RESTful API", icon: "/media/skills/rest-api.svg" },
        { name: "Django", icon: "/media/skills/django.svg" }
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
    title: "Sumo2Unity Tool",
    description: "Developed a co-simulation tool to link traffic simulators with Unity for immersive 3D/VR analysis.",
    longDescription: "At the SimuTraffX Lab, I spearheaded the integration of traffic simulation software SUMO with the Unity 3D engine. This project aimed to create realistic, immersive virtual reality environments for traffic safety analysis and infrastructure planning. A major focus was performance; I implemented various optimization techniques, including Occlusion Culling and Level of Detail (LOD) adjustments, which collectively resulted in a 35% improvement in frame rate. This tool allows researchers to experience and analyze complex traffic scenarios in a highly interactive and visual manner. The success and novelty of this work led to a publication in the 2024 IEEE Intelligent Vehicles Symposium.",
    tags: ["Unity", "C#", "SUMO", "Vissim", "VR/AR", "Performance Optimization"],
    image: "/media/SimuTrafixLab.jpg",
    githubUrl: "https://github.com/SUMO2Unity/SUMO2Unity",
    videos: [{ title: "Demo", url: "https://www.youtube-nocookie.com/embed/9nSCKIz6lQI?autoplay=1&mute=1&controls=0&loop=1&playlist=9nSCKIz6lQI&playsinline=1" }],
  },
  {
    title: "VibeTribe",
    description: "A full-stack mobile app for service booking, built with React Native and a Node.js backend.",
    longDescription: "VibeTribe is a full-stack mobile application designed from the ground up to connect users with local service providers. As the lead on UI/UX and full-stack development, I used React Native Expo to build a cross-platform, responsive user interface. The backend was built with Node.js and Express, connected to a MongoDB database for flexible data storage. The application features secure user authentication, profile management, and a seamless service booking system. All backend services and data are hosted on Google Cloud, ensuring scalability and reliability.",
    tags: ["React Native", "TypeScript", "Node.js", "MongoDB", "Google Cloud", "Express"],
    image: "https://images.unsplash.com/photo-1554425219-9e3241ff76f1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    longDescription: "CampusBuddy is a web platform aimed at enhancing the student experience. I developed the front-end using Angular and TypeScript, focusing on creating a clean and intuitive interface with features like user registration, profiles, and a search function. For the backend, I designed the PostgreSQL database schema and built the necessary REST APIs using Node.js and Express. The project was a great exercise in full-stack web development, from database design to front-end implementation.",
    tags: ["Angular", "TypeScript", "Node.js", "PostgreSQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const EXPERIENCE: Experience = {
  role: "Junior Software Developer",
  company: "SimuTraffX Lab - York University",
  period: "May 2023 – Present",
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
        url: "https://ieeexplore.ieee.org/abstract/document/10567529/"
    },
    {
        title: "A virtual reality-based digital twin for evaluating the safety and operational performance of truck-only lanes",
        conference: "Accident Analysis & Prevention",
        date: "2024",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S000145752400122X"
    },
    {
        title: "Developing an Open-Source Tool for Pedestrian Safety and Level of Service Analysis",
        conference: "2024 IEEE Intelligent Vehicles Symposium (IV)",
        date: "2024",
        url: "https://ieeexplore.ieee.org/abstract/document/10567232/"
    },
    {
        title: "Investigating the Impact of In-Vehicle Auditory Collision Warnings on Driver Behavior in a Virtual Reality Environment",
        conference: "Transportation Research Record",
        date: "2024",
        url: "https://journals.sagepub.com/doi/abs/10.1177/03611981241238127"
    }
];


export const GEMINI_CONTEXT = `
You are Shijas Cherakkatil's AI assistant. Your purpose is to answer questions from recruiters and hiring managers about Shijas's skills, experience, and projects based ONLY on the context provided below. Be professional, concise, and helpful. Frame your answers from the perspective of an assistant talking about Shijas. Do not make up information. If the answer is not in the context, say "I don't have specific information on that, but I can tell you about his related skills and experience."

**CONTEXT ABOUT SHIJAS CHERAKKATIL:**

**Role:** Junior Software Developer at SimuTraffX Lab, York University.

**Summary:**
Shijas is a software developer focused on full-stack development and creating immersive 3D/VR environments for transportation simulations. He integrates traffic software like SUMO and Vissim with Unity. He is passionate about performance optimization, building intuitive UIs, and solving real-world problems.

**Work Experience: SimuTraffX Lab - York University (May 2023 - Present)**
- Integrates SUMO & Vissim with Unity using C# for 3D/VR traffic analysis.
- Uses Python for real-time data connections with transportation software.
- Optimized Unity projects with techniques like Occlusion Culling, achieving a 35% frame rate improvement.
- Builds user-friendly interfaces for simulation control.
- Uses Git and GitHub for version control.

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
- **A virtual reality-based digital twin for evaluating...truck-only lanes** (Accident Analysis & Prevention 2024)
- **Developing an Open-Source Tool for Pedestrian Safety and Level of Service Analysis** (IEEE IV 2024)
- **Investigating the Impact of In-Vehicle Auditory Collision Warnings on Driver Behavior...** (Transportation Research Record 2024)

**Education:**
- **Institution:** Seneca College
- **Program:** Computer Programming and Analysis (Graduated with Honors, 3.8/4.0 GPA)
- **Key Skills Gained:** Full-stack development, database management, software design principles, React, Angular, SQL, NoSQL.
`;