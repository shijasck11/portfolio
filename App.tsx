

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCE, PUBLICATIONS } from './constants';
import type { Project, Experience as ExperienceType, Publication as PublicationType } from './types';
import { AIAssistant } from './components/AIAssistant';
import { CodeBracketIcon, CubeTransparentIcon, CircleStackIcon, CloudIcon, CpuChipIcon, ServerStackIcon, XMarkIcon, ArrowTopRightOnSquareIcon } from './components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Section: React.FC<{ children: React.ReactNode; className?: string; id: string }> = ({ children, className, id }) => (
  <motion.section
    id={id}
    className={`max-w-4xl mx-auto p-8 ${className || ''}`}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeIn}
  >
    {children}
  </motion.section>
);

const Header = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-secondary/80 backdrop-blur-sm border-b border-border">
            <nav className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <a href="#home" onClick={handleNavClick} className="text-xl font-bold text-accent hover:opacity-80 transition-opacity">
                    {PERSONAL_INFO.name}
                </a>
                <div className="hidden md:flex space-x-8 text-text-secondary">
                    <a href="#about" onClick={handleNavClick} className="relative group hover:text-accent transition-colors duration-300">
                        <span>About</span>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#experience" onClick={handleNavClick} className="relative group hover:text-accent transition-colors duration-300">
                        <span>Experience</span>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#projects" onClick={handleNavClick} className="relative group hover:text-accent transition-colors duration-300">
                        <span>Projects</span>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#contact" onClick={handleNavClick} className="relative group hover:text-accent transition-colors duration-300">
                        <span>Contact</span>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

const Hero = () => (
  <Section id="home" className="text-center pt-24 pb-16">
    <motion.img
      src="/media/profile.png"
      alt="Shijas Cherakkatil"
      className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-border shadow-lg object-cover"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
    />
    <h1 className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-500">
      {PERSONAL_INFO.name}
    </h1>
    <p className="text-xl text-text-secondary mb-6">{PERSONAL_INFO.title}</p>
    <div className="flex justify-center space-x-6">
      {PERSONAL_INFO.socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          title={social.name}
        >
          <social.icon className="w-8 h-8" />
        </motion.a>
      ))}
    </div>
  </Section>
);

const About = () => (
  <Section id="about">
    <h2 className="text-3xl font-bold mb-6 text-center text-accent">About Me</h2>
    <p className="text-lg text-text-secondary leading-relaxed text-center">{PERSONAL_INFO.about}</p>
  </Section>
);

const Skills = () => {
    const iconMap: { [key: string]: React.ReactNode } = {
        "3D & Simulation": <CubeTransparentIcon className="w-6 h-6 text-accent" />,
        "Frontend": <CodeBracketIcon className="w-6 h-6 text-accent" />,
        "Backend": <ServerStackIcon className="w-6 h-6 text-accent" />,
        "Databases": <CircleStackIcon className="w-6 h-6 text-accent" />,
        "Cloud & DevOps": <CloudIcon className="w-6 h-6 text-accent" />,
    };

    return (
      <Section id="skills">
        <h2 className="text-3xl font-bold mb-8 text-center text-accent">Technical Skills</h2>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
        >
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div key={category} className="bg-secondary p-6 rounded-lg border border-border" variants={fadeIn}>
              <div className="flex items-center mb-4">
                  {iconMap[category] || <CpuChipIcon className="w-6 h-6 text-accent"/>}
                  <h3 className="text-xl font-bold ml-3 text-text-primary">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="bg-border text-text-secondary text-sm font-medium px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    );
};

const ExperienceCard: React.FC<{ experience: ExperienceType }> = ({ experience }) => (
  <Section id="experience">
    <h2 className="text-3xl font-bold mb-8 text-center text-accent">Experience</h2>
    <div className="bg-secondary p-8 rounded-lg border border-border shadow-lg">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-bold text-text-primary">{experience.role}</h3>
        <span className="text-accent font-semibold">{experience.period}</span>
      </div>
      <p className="text-lg text-text-secondary mb-4">{experience.company}</p>
      <ul className="list-disc list-outside ml-5 space-y-2 text-text-secondary">
        {experience.description.map((point, index) => {
          const commaIndex = point.indexOf(',');
          if (commaIndex > 0) {
            const boldPart = point.substring(0, commaIndex);
            const restPart = point.substring(commaIndex);
            return (
              <li key={index}>
                <strong className="text-text-primary">{boldPart}</strong>
                {restPart}
              </li>
            );
          }
          return <li key={index}>{point}</li>;
        })}
      </ul>
    </div>
  </Section>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    const [activeVideo, setActiveVideo] = useState(project.videos?.[0] || null);

    return (
        <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-secondary rounded-lg border border-border w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full md:w-1/2 p-8 flex flex-col">
                    <h3 className="text-3xl font-bold mb-4 text-accent">{project.title}</h3>
                    <div className="text-text-secondary mb-6 flex-grow overflow-y-auto">
                        {project.longDescription && project.longDescription.length > 0 ? (
                            <ul className="list-disc list-outside ml-5 space-y-2">
                                {project.longDescription.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{project.description}</p>
                        )}
                    </div>
                     {project.videos && project.videos.length > 1 && (
                        <div className="mb-4">
                            <p className="text-sm font-semibold text-text-secondary mb-2">Demos:</p>
                            <div className="flex flex-wrap gap-2">
                                {project.videos.map((video) => (
                                    <button
                                        key={video.title}
                                        onClick={() => setActiveVideo(video)}
                                        className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${activeVideo?.url === video.url ? 'bg-accent text-white' : 'bg-border text-text-secondary hover:bg-border/70'}`}
                                    >
                                        {video.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="bg-border text-text-secondary text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <div className="flex space-x-4 text-accent">
                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">Code <ArrowTopRightOnSquareIcon className="w-4 h-4" /></a>}
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">Live Demo <ArrowTopRightOnSquareIcon className="w-4 h-4" /></a>}
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-primary flex items-center justify-center p-8">
                    {activeVideo ? (
                        project.isMobile ? (
                             <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[450px] w-[220px]">
                                <div className="h-[22px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[72px] rounded-s-lg"></div>
                                <div className="h-[36px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[124px] rounded-s-lg"></div>
                                <div className="h-[36px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[172px] rounded-s-lg"></div>
                                <div className="h-[52px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -end-[12px] top-[145px] rounded-e-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black">
                                    <video src={activeVideo.url} key={activeVideo.url} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                                </div>
                            </div>
                        ) : (
                            activeVideo.url.includes('youtube.com') || activeVideo.url.includes('youtube-nocookie.com') ? (
                                <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                                        src={activeVideo.url}
                                        title={project.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <video src={activeVideo.url} key={activeVideo.url} className="w-full h-auto max-h-full rounded-lg" controls autoPlay loop muted playsInline />
                            )
                        )
                    ) : (
                        <img src={project.image} alt={project.title} className="w-full h-auto max-h-full object-contain rounded-lg" />
                    )}
                </div>
            </motion.div>
            <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-accent transition-colors">
                <XMarkIcon className="w-8 h-8" />
            </button>
        </motion.div>
    );
};


const ProjectCard: React.FC<{ project: Project; onViewProject: () => void }> = ({ project, onViewProject }) => (
  <motion.div className="bg-secondary rounded-lg overflow-hidden border border-border flex flex-col group" variants={fadeIn}>
    <div className="overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
      <p className="text-text-secondary mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-border text-text-secondary text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-auto">
        <button onClick={onViewProject} className="text-accent font-semibold hover:underline">View Project &rarr;</button>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center text-accent">Projects</h2>
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} onViewProject={() => setSelectedProject(project)} />
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </Section>
  );
};

const PublicationCard: React.FC<{ publication: PublicationType }> = ({ publication }) => (
    <motion.div 
        className="bg-secondary p-6 rounded-lg border border-border shadow-lg transition-shadow hover:shadow-accent/20"
        variants={fadeIn}
    >
        <h3 className="text-xl font-bold text-text-primary mb-1">{publication.title}</h3>
        <p className="text-text-secondary mb-3">{publication.conference} - {publication.date}</p>
        <a href={publication.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
          View Publication <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </a>
    </motion.div>
);

const Publications: React.FC = () => (
    <Section id="publications">
      <h2 className="text-3xl font-bold mb-8 text-center text-accent">Publications</h2>
      <motion.div className="space-y-6" variants={staggerContainer}>
         {PUBLICATIONS.map((pub, index) => (
             <PublicationCard key={index} publication={pub} />
         ))}
      </motion.div>
    </Section>
);

const Contact = () => (
  <Section id="contact" className="text-center py-16">
    <h2 className="text-3xl font-bold mb-4 text-accent">Get In Touch</h2>
    <p className="text-lg text-text-secondary mb-6">
      I'm currently seeking new opportunities. Feel free to reach out!
    </p>
    <a
      href={`mailto:${PERSONAL_INFO.email}`}
      className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-accent-dark transition-colors text-lg"
    >
      {PERSONAL_INFO.email}
    </a>
    <div className="flex justify-center space-x-6 mt-8">
      {PERSONAL_INFO.socials.map((social) => (
        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
          <social.icon className="w-8 h-8" />
        </a>
      ))}
    </div>
  </Section>
);

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-6 text-center text-text-secondary">
    <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
  </footer>
);


export default function App() {
  return (
    <div className="bg-primary min-h-screen font-sans">
        <Header />
        <main>
          <Hero />
          <About />
          <ExperienceCard experience={EXPERIENCE} />
          <Skills />
          <Projects />
          <Publications />
          <AIAssistant />
          <Contact />
        </main>
        <Footer />
    </div>
  );
}