import { useState } from 'react';
import type { Project } from '../data/types';
import { GithubIcon, ExternalLinkIcon, XMarkIcon, MicrosoftStoreIcon } from './icons';

interface Props {
  project: Project;
  /** h2 inside the home-page modal, h1 on the project's own page. */
  headingLevel?: 'h1' | 'h2';
  /** Shows the close button when set (modal only). */
  onClose?: () => void;
  /** Extra classes for the card, e.g. the modal's max height and scrolling. */
  className?: string;
}

/**
 * The full write-up for one project: bullet points, demo videos, links,
 * tags and the screenshot or phone mock-up. Rendered statically on
 * /projects/<slug>/ and inside ProjectModal on the home page.
 */
export default function ProjectDetails({ project, headingLevel = 'h2', onClose, className = '' }: Props) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const Heading = headingLevel;

  return (
    <div className={`bg-white rounded-2xl shadow-xl w-full max-w-4xl ${className} relative flex flex-col md:flex-row`}>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors z-10"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      )}

      <div className="p-8 md:w-1/2 flex flex-col">
        <Heading className="text-3xl font-bold text-[#1e3a8a] mb-6">{project.title}</Heading>

        <ul className="space-y-4 mb-8 grow">
          {project.longDescription.map((desc, i) => (
            <li key={i} className="flex items-start text-slate-600">
              <span className="text-slate-400 mr-2 mt-1.5 text-xs" aria-hidden="true">•</span>
              <span className="leading-relaxed">{desc}</span>
            </li>
          ))}
        </ul>

        {project.videos && project.videos.length > 0 && (
          <div className="mb-8">
            <h4 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Demos:</h4>
            <div className="flex flex-wrap gap-2">
              {project.videos.map((video, i) =>
                project.isMobile ? (
                  <button
                    key={i}
                    onClick={() => setActiveVideoIndex(i)}
                    aria-pressed={activeVideoIndex === i}
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
                ),
              )}
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
              className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-xs"
            >
              {project.linkIcon ? (
                <img src={project.linkIcon} alt="" className="w-4 h-4 object-contain" />
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
              className="inline-flex items-center gap-2 bg-[#0078D7] hover:bg-[#005A9E] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-xs"
            >
              <MicrosoftStoreIcon className="w-4 h-4" /> Get it for Windows
            </a>
          )}
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
              {tag}
            </li>
          ))}
        </ul>
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
          <img src={project.image} alt={`${project.title} screenshot`} className="w-full rounded-lg shadow-md" />
        )}
      </div>
    </div>
  );
}
