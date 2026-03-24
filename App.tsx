





import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS, PUBLICATIONS } from './constants';
import { GithubIcon, LinkedinIcon, MailIcon, CodeBracketIcon, CubeTransparentIcon, ExternalLinkIcon, XMarkIcon, MicrosoftStoreIcon } from './components/icons';

const NavBar: React.FC = () => (
  <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center">
          <span className="font-bold text-xl text-slate-800">{PERSONAL_INFO.name}</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-slate-500 hover:text-slate-900 transition-colors">About</a>
          <a href="#experience" className="text-slate-500 hover:text-slate-900 transition-colors">Experience</a>
          <a href="#projects" className="text-slate-500 hover:text-slate-900 transition-colors">Projects</a>
          <a href="#contact" className="text-slate-500 hover:text-slate-900 transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);

const HeroSection: React.FC = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    id="about" 
    className="pt-32 pb-16 px-4 flex flex-col items-center justify-center text-center"
  >
    <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <img src="/media/profile.png" alt={PERSONAL_INFO.name} className="w-full h-full object-cover" />
    </div>
    <h1 className="text-5xl md:text-6xl font-extrabold text-[#1e3a8a] mb-2 tracking-tight">
      {PERSONAL_INFO.name}
    </h1>
    <p className="text-xl text-slate-500 mb-6">{PERSONAL_INFO.title}</p>
    <div className="flex gap-6 mb-16">
      <a href={PERSONAL_INFO.socials.find(s => s.name === 'GitHub')?.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-800 transition-colors">
        <GithubIcon className="w-7 h-7" />
      </a>
      <a href={PERSONAL_INFO.socials.find(s => s.name === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors">
        <LinkedinIcon className="w-7 h-7" />
      </a>
      <a href={PERSONAL_INFO.socials.find(s => s.name === 'Email')?.url} className="text-slate-400 hover:text-slate-800 transition-colors">
        <MailIcon className="w-7 h-7" />
      </a>
    </div>

    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">About Me</h2>
      <p className="text-lg text-slate-500 leading-relaxed">
        {PERSONAL_INFO.about}
      </p>
    </div>
  </motion.section>
);

const ExperienceSection: React.FC = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    id="experience" 
    className="py-16 px-4 max-w-4xl mx-auto"
  >
    <h2 className="text-3xl font-bold text-[#1e3a8a] text-center mb-10">Experience</h2>
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <h3 className="text-2xl font-bold text-slate-900">{EXPERIENCE.role}</h3>
        <span className="text-slate-600 font-semibold mt-2 md:mt-0">{EXPERIENCE.period}</span>
      </div>
      <p className="text-lg text-slate-500 mb-6">{EXPERIENCE.company}</p>
      <ul className="space-y-3">
        {EXPERIENCE.description.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-slate-400 mr-2 mt-1.5 text-xs">•</span>
            <span className="text-slate-500 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.section>
);

const SkillsSection: React.FC = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    id="skills" 
    className="py-16 px-4 max-w-4xl mx-auto"
  >
    <h2 className="text-3xl font-bold text-[#1e3a8a] text-center mb-10">Technical Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Languages & Frameworks */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <CodeBracketIcon className="w-6 h-6 text-slate-800" />
          <h3 className="text-xl font-bold text-slate-900">Languages & Frameworks</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {SKILLS["Languages & Frameworks"].map(skill => (
            <span key={skill.name} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
              {skill.name}
            </span>
          ))}
        </div>
      </div>
      
      {/* 3D & Simulation */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <CubeTransparentIcon className="w-6 h-6 text-slate-800" />
          <h3 className="text-xl font-bold text-slate-900">3D & Simulation</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {SKILLS["3D & Simulation"].map(skill => (
            <span key={skill.name} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Databases & Cloud */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <CodeBracketIcon className="w-6 h-6 text-slate-800" />
          <h3 className="text-xl font-bold text-slate-900">Databases & Cloud</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[...SKILLS["Databases"], ...SKILLS["Cloud & DevOps"]].map(skill => (
            <span key={skill.name} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

const ProjectModal: React.FC<{ project: any; onClose: () => void }> = ({ project, onClose }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors z-10"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        <div className="p-8 md:w-1/2 flex flex-col">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">{project.title}</h2>
          
          <ul className="space-y-4 mb-8 flex-grow">
            {(Array.isArray(project.longDescription) ? project.longDescription : [project.longDescription]).map((desc: string, i: number) => (
              <li key={i} className="flex items-start text-slate-600">
                <span className="text-slate-400 mr-2 mt-1.5 text-xs">•</span>
                <span className="leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>

          {project.videos && project.videos.length > 0 && (
            <div className="mb-8">
              <h4 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Demos:</h4>
              <div className="flex flex-wrap gap-2">
                {project.videos.map((video: any, i: number) => (
                  project.isMobile ? (
                    <button 
                      key={i} 
                      onClick={() => setActiveVideoIndex(i)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeVideoIndex === i ? 'bg-[#1e3a8a] text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                    >
                      {video.title}
                    </button>
                  ) : (
                    <a 
                      key={i} 
                      href={video.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      {video.title}
                    </a>
                  )
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mb-8">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" /> View Source on GitHub
              </a>
            )}

            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm"
              >
                {project.linkIcon ? (
                  <img src={project.linkIcon} alt="Link Icon" className="w-4 h-4 object-contain" />
                ) : (
                  <ExternalLinkIcon className="w-4 h-4" />
                )}
                Visit Website
              </a>
            )}

            {project.microsoftStoreUrl && (
              <a 
                href={project.microsoftStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0078D7] hover:bg-[#005A9E] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm"
              >
                <MicrosoftStoreIcon className="w-4 h-4" /> Get from Microsoft Store
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 bg-slate-50 p-8 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-100">
          {project.isMobile ? (
             <div className="relative w-64 h-[500px] bg-slate-800 rounded-[3rem] border-[8px] border-slate-800 shadow-xl overflow-hidden">
                {project.videos && project.videos.length > 0 ? (
                  <video 
                    src={project.videos[activeVideoIndex].url} 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  />
                ) : (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                )}
             </div>
          ) : (
            <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-md" />
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="projects" 
      className="py-16 px-4 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-[#1e3a8a] text-center mb-10">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden group">
               {/* Using a placeholder or the actual image if it fits well in a 16:9 box */}
               <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
               <div className="relative z-10 text-white font-bold text-xl drop-shadow-md">{project.title}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-500 mb-6 text-sm flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs font-medium">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-4">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-sm font-bold text-slate-900 hover:text-[#1e3a8a] transition-colors flex items-center"
                >
                  View Project &rarr;
                </button>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                      title="View Source Code"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                      title="Visit Website"
                    >
                      {project.linkIcon ? (
                        <img src={project.linkIcon} alt="Link Icon" className="w-5 h-5 object-contain" />
                      ) : (
                        <ExternalLinkIcon className="w-5 h-5" />
                      )}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-[#1e3a8a] text-center mt-24 mb-10">Publications</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {PUBLICATIONS.map((pub, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index} 
            className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">{pub.title}</h3>
            <p className="text-slate-500 mb-5">{pub.conference} - {pub.date}</p>
            <a 
              href={pub.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-[#1e3a8a] transition-colors w-fit font-medium"
            >
              View Publication <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </motion.section>
  );
};

const Footer: React.FC = () => (
  <motion.footer 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    id="contact" 
    className="py-16 text-center bg-[#f8fafc] mt-16"
  >
    <h2 className="text-3xl font-bold text-[#003366] mb-4">Get In Touch</h2>
    <p className="text-slate-500 mb-8 max-w-md mx-auto text-lg">
      I'm currently seeking new opportunities. Feel free to reach out!
    </p>
    <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-block bg-[#003366] text-white font-bold py-3 px-10 rounded-lg hover:bg-[#002244] transition-colors mb-10 text-lg">
      {PERSONAL_INFO.email}
    </a>
    
    <div className="flex justify-center gap-6 mb-8">
      <a href={PERSONAL_INFO.socials.find(s => s.name === 'GitHub')?.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
        <GithubIcon className="w-8 h-8" />
      </a>
      <a href={PERSONAL_INFO.socials.find(s => s.name === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0077b5] transition-colors">
        <LinkedinIcon className="w-8 h-8" />
      </a>
      <a href={PERSONAL_INFO.socials.find(s => s.name === 'Email')?.url} className="text-slate-500 hover:text-slate-900 transition-colors">
        <MailIcon className="w-8 h-8" />
      </a>
    </div>

    <p className="text-slate-400 text-sm">
      © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
    </p>
  </motion.footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900">
      <NavBar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}