



import React, { useState, useEffect } from 'react';
// FIX: Import Variants type from framer-motion to correctly type the animation variants object.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCE, PUBLICATIONS, EDUCATION } from './constants';
import type { Project, Experience as ExperienceType, Publication as PublicationType, Education as EducationType } from './types';
import { AIAssistant } from './components/AIAssistant';
import { 
    HomeIcon, BriefcaseIcon, CpuChipIcon, FolderIcon, AcademicCapIcon, SparklesIcon, EnvelopeIcon, 
    XMarkIcon, ArrowTopRightOnSquareIcon, GithubIcon, ChevronLeftIcon, ChevronRightIcon, DownloadIcon
} from './components/icons';

// FIX: Explicitly type viewVariants with Variants to resolve type incompatibility with the 'ease' property.
const viewVariants: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] } }
};

const NAV_ITEMS = {
    home: { icon: HomeIcon, label: 'Home' },
    experience: { icon: BriefcaseIcon, label: 'Experience' },
    academics: { icon: AcademicCapIcon, label: 'Academics' },
    skills: { icon: CpuChipIcon, label: 'Skills' },
    projects: { icon: FolderIcon, label: 'Projects' },
    ai: { icon: SparklesIcon, label: 'AI Assistant' },
    contact: { icon: EnvelopeIcon, label: 'Contact' }
};

// Create a skill icon map for easy lookup in the project card
const SKILL_ICON_MAP = Object.values(SKILLS).flat().reduce((acc, skill) => {
    acc[skill.name] = skill.icon;
    return acc;
}, {} as Record<string, string>);

// Utility to wrap the project index for infinite looping
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};


type ViewKey = keyof typeof NAV_ITEMS;

const SideNav: React.FC<{ activeView: ViewKey; setActiveView: (view: ViewKey) => void }> = ({ activeView, setActiveView }) => {
    return (
        <nav className="p-2 md:p-4 border-r border-white/10 flex flex-col items-center gap-2 md:gap-4">
            <img
                src="/media/profile.png"
                alt={PERSONAL_INFO.name}
                className="w-10 h-10 rounded-full mb-4 shrink-0 object-cover border-2 border-white/10"
            />
            {Object.entries(NAV_ITEMS).map(([key, { icon: Icon, label }]) => (
                <button
                    key={key}
                    onClick={() => setActiveView(key as ViewKey)}
                    className={`relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg transition-colors duration-200 shrink-0 ${
                        activeView === key ? 'bg-white/20 text-white' : 'text-slate-400 hover:bg-white/10 hover:text-slate-200'
                    }`}
                    aria-label={label}
                    title={label}
                >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    {activeView === key && (
                        <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-sky-400 rounded-r-full"
                            layoutId="active-indicator"
                        />
                    )}
                </button>
            ))}
        </nav>
    );
};

const HomeView: React.FC = () => (
    <motion.div key="home" variants={viewVariants} initial="initial" animate="animate" exit="exit" className="h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <p className="text-sky-400 font-semibold mb-2">Software Developer</p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-4 tracking-tight">{PERSONAL_INFO.name}</h1>
                <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-8 mx-auto md:mx-0">{PERSONAL_INFO.about}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                    <a href="/media/Shijas_Cherakkatil_Resume.pdf" download="Shijas_Cherakkatil_Resume.pdf" className="w-full sm:w-auto px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-slate-100 hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                        <DownloadIcon className="w-5 h-5" />
                         Resume
                    </a>
                    <div className="flex gap-6">
                        {PERSONAL_INFO.socials.map(social => (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name} className="text-slate-400 hover:text-slate-100 transition-colors">
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center order-first md:order-last">
                <motion.img
                    src="/media/profile.png"
                    alt={PERSONAL_INFO.name}
                    className="w-48 h-64 md:w-80 md:h-96 rounded-2xl object-cover border-4 border-white/10 shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
            </div>
        </div>
    </motion.div>
);

const ExperienceView: React.FC<{ experience: ExperienceType }> = ({ experience }) => (
    <motion.div key="experience" variants={viewVariants} initial="initial" animate="animate" exit="exit">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Experience</h2>
        <p className="text-slate-400 mb-8">My professional journey so far.</p>
        <div className="bg-white/5 p-6 md:p-8 rounded-lg border border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-sky-400">{experience.role}</h3>
                <span className="text-slate-300 font-semibold mt-2 sm:mt-0">{experience.period}</span>
            </div>
            <p className="text-lg text-slate-400 mb-6">{experience.company}</p>
            <ul className="list-disc list-outside ml-5 space-y-3 text-slate-400">
                {experience.description.map((point, index) => (
                    <li key={index}><span className="text-slate-200">{point}</span></li>
                ))}
            </ul>
        </div>
    </motion.div>
);

const AcademicsView: React.FC<{ education: EducationType; publications: PublicationType[] }> = ({ education, publications }) => (
    <motion.div key="academics" variants={viewVariants} initial="initial" animate="animate" exit="exit">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Academics</h2>
        <p className="text-slate-400 mb-8">My academic background and research contributions.</p>
        
        <div className="space-y-12">
            {/* Education Section */}
            <div>
                <h3 className="text-2xl font-bold text-slate-200 mb-4 border-b border-white/10 pb-2">Education</h3>
                <div className="bg-white/5 p-6 md:p-8 rounded-lg border border-white/10">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                        <h4 className="text-xl md:text-2xl font-bold text-sky-400">{education.degree}</h4>
                        <span className="text-slate-300 font-semibold mt-2 sm:mt-0">{education.period}</span>
                    </div>
                    <p className="text-lg text-slate-400 mb-6">{education.institution}</p>
                    <ul className="list-disc list-outside ml-5 space-y-3 text-slate-400">
                        {education.details.map((point, index) => (
                            <li key={index}><span className="text-slate-200">{point}</span></li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Publications Section */}
            <div>
                <h3 className="text-2xl font-bold text-slate-200 mb-4 border-b border-white/10 pb-2">Publications</h3>
                <div className="space-y-4">
                    {publications.map((pub, index) => (
                        <div key={index} className="bg-white/5 p-4 md:p-6 rounded-lg border border-white/10">
                            <h4 className="text-lg md:text-xl font-bold text-slate-100 mb-1">{pub.title}</h4>
                            <p className="text-slate-400 mb-3 text-sm md:text-base">{pub.conference} - {pub.date}</p>
                            <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline flex items-center gap-1">
                                View Publication <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const SkillsView: React.FC = () => (
    <motion.div key="skills" variants={viewVariants} initial="initial" animate="animate" exit="exit">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Technical Skills</h2>
        <p className="text-slate-400 mb-8">The tools and technologies I work with.</p>
        <div className="space-y-8">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-bold text-sky-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center bg-white/10 text-slate-200 text-sm font-medium px-4 py-2 rounded-lg border border-white/10">
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5 mr-2" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </motion.div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    const [currentVideoUrl, setCurrentVideoUrl] = useState(
        (project.isMobile && project.videos && project.videos.length > 0)
        ? project.videos[0].url
        : null
    );

    return (
        <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg w-full max-w-4xl h-auto max-h-full md:max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-400">{project.title}</h3>
                    <div className="text-slate-400 mb-6 flex-grow overflow-y-auto custom-scrollbar">
                        <p>{project.longDescription || project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="bg-white/10 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <div className="flex space-x-4 text-sky-400 mt-auto">
                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">Code <ArrowTopRightOnSquareIcon className="w-4 h-4" /></a>}
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">Live Demo <ArrowTopRightOnSquareIcon className="w-4 h-4" /></a>}
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-black/20 flex flex-col items-center justify-center p-6 md:p-8 order-first md:order-last shrink-0 overflow-y-auto custom-scrollbar">
                    {(project.isMobile && project.videos && project.videos.length > 0 && currentVideoUrl) ? (
                        <div className="w-full max-w-[250px] flex flex-col items-center">
                            <div className="relative mx-auto border-slate-800 bg-slate-800 border-[8px] rounded-[2rem] h-auto w-full aspect-[9/19.5] shadow-xl mb-6">
                                <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-black">
                                    <video
                                        key={currentVideoUrl}
                                        src={currentVideoUrl}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        crossOrigin="anonymous"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                {project.videos.map((video) => (
                                    <button
                                        key={video.title}
                                        onClick={() => setCurrentVideoUrl(video.url)}
                                        className={`w-full text-center py-2 px-4 rounded-lg transition-colors text-sm font-semibold ${
                                            currentVideoUrl === video.url
                                                ? 'bg-sky-500 text-white'
                                                : 'bg-white/10 text-slate-200 hover:bg-white/20'
                                        }`}
                                    >
                                        {video.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <img src={project.image} alt={project.title} className="w-full h-auto max-h-[40vh] md:max-h-full object-contain rounded-lg" />
                    )}
                </div>
            </motion.div>
            <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
                <XMarkIcon className="w-8 h-8" />
            </button>
        </motion.div>
    );
};


const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ProjectsView: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [[page, direction], setPage] = useState([0, 0]);

    const projectIndex = wrap(0, PROJECTS.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <motion.div 
            key="projects" 
            variants={viewVariants} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
            className="flex flex-col h-full w-full items-center justify-center relative"
        >
            <div className="text-center w-full pt-0 md:pt-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Projects</h2>
                <p className="text-slate-400 mb-8">A selection of my work.</p>
            </div>
            
            <div className="relative w-full flex-grow flex items-center justify-center">
                {PROJECTS.map((project, i) => {
                    const total = PROJECTS.length;
                    const distance = i - projectIndex;
                    
                    let displayIndex = distance;
                    if (Math.abs(distance) > total / 2) {
                        displayIndex = distance > 0 ? distance - total : distance + total;
                    }
                    
                    const isCenter = displayIndex === 0;
                    const isVisible = Math.abs(displayIndex) <= 1;

                    return (
                        <motion.div
                            key={i}
                            className="w-full max-w-sm md:max-w-xl lg:max-w-2xl absolute"
                            initial={false}
                            animate={{
                                scale: isCenter ? 1 : 0.7,
                                x: `${displayIndex * 45}%`,
                                zIndex: total - Math.abs(displayIndex),
                                opacity: isVisible ? (isCenter ? 1 : 0.4) : 0,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            drag={isCenter ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                if (!isCenter) return;
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                        >
                            <div className={`relative rounded-xl transition-all duration-300 ${isCenter ? 'shadow-2xl shadow-sky-500/20' : ''}`}>
                                <div className="p-4 md:p-6 bg-[#50493f] rounded-xl flex flex-col items-center text-center">
                                    <div className="w-full flex justify-center items-center h-48 md:h-64 mb-4">
                                        {project.isMobile ? (
                                            <div className="relative mx-auto border-slate-800 bg-slate-800 border-[8px] rounded-[2rem] h-full w-auto aspect-[9/19.5] shadow-xl">
                                                <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-black">
                                                    <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full h-full bg-black/30 rounded-lg p-2 border border-white/10 shadow-lg">
                                                <div className="flex space-x-1.5 mb-2">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                                </div>
                                                {project.videos && project.videos.length > 0 ? (
                                                    <iframe
                                                        src={project.videos[0].url}
                                                        title={project.videos[0].title}
                                                        className="w-full h-full object-cover rounded-sm border-0"
                                                        allow="autoplay; encrypted-media; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                ) : (
                                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-sm" />
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-100">{project.title}</h3>
                                    <p className="text-slate-400 my-3 text-sm md:text-base leading-relaxed h-20 md:h-16">{project.description}</p>
                                    <div className="my-4 flex flex-wrap justify-center items-center gap-4 h-8">
                                        {project.tags.slice(0, 6).map(tag => {
                                            const iconSrc = SKILL_ICON_MAP[tag];
                                            return iconSrc ? (
                                                <div key={tag} className="group relative" title={tag}>
                                                    <img src={iconSrc} alt={tag} className="w-7 h-7" />
                                                </div>
                                            ) : null;
                                        })}
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-4 mt-4 w-full">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 px-4 bg-white/10 border border-white/20 rounded-lg text-slate-100 hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                                                <GithubIcon className="w-5 h-5" /> GitHub
                                            </a>
                                        )}
                                         <button onClick={() => setSelectedProject(project)} className="flex-1 text-center py-2 px-4 bg-sky-500 rounded-lg text-white hover:bg-sky-600 transition-colors">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-30">
                <button onClick={() => paginate(-1)} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                    <ChevronLeftIcon className="w-6 h-6"/>
                </button>
            </div>
             <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-30">
                <button onClick={() => paginate(1)} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                    <ChevronRightIcon className="w-6 h-6"/>
                </button>
            </div>

             <AnimatePresence>
                {selectedProject && (
                  <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const ContactView: React.FC = () => (
    <motion.div key="contact" variants={viewVariants} initial="initial" animate="animate" exit="exit" className="h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Get In Touch</h2>
        <p className="text-lg text-slate-400 mb-8 max-w-md">
            I'm currently seeking new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-600 transition-colors text-lg"
        >
            Say Hello
        </a>
    </motion.div>
);


export default function App() {
    const [activeView, setActiveView] = useState<ViewKey>('home');

    const renderContent = () => {
        switch(activeView) {
            case 'home': return <HomeView />;
            case 'experience': return <ExperienceView experience={EXPERIENCE} />;
            case 'academics': return <AcademicsView education={EDUCATION} publications={PUBLICATIONS} />;
            case 'skills': return <SkillsView />;
            case 'projects': return <ProjectsView />;
            case 'ai': return <AIAssistant />;
            case 'contact': return <ContactView />;
            default: return <HomeView />;
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-0 md:p-4 text-slate-100">
            <main className="w-full h-screen md:h-[95vh] md:max-w-[90rem] bg-black/20 backdrop-blur-2xl border border-white/10 rounded-none md:rounded-2xl flex shadow-2xl">
                <SideNav activeView={activeView} setActiveView={setActiveView} />
                <div className="flex-1 p-4 md:p-12 overflow-y-auto custom-scrollbar relative">
                    <AnimatePresence mode="wait">
                        {renderContent()}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}