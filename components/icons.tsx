import React from 'react';

// Using a generic props type for all icons to accept className
type IconProps = {
  className?: string;
};

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.948M12 21c-4.832 0-8.716-3.93-8.716-8.756C3.284 7.202 7.168 3.272 12 3.272c4.832 0 8.716 3.93 8.716 8.756 0 1.637-.44 3.17-1.22 4.51M12 21v-6.332m0 0a2.001 2.001 0 0 0-2-2 2.001 2.001 0 0 0-2 2m2 0V15m2 0v-2.25m0 0a2.001 2.001 0 0 0 2-2 2.001 2.001 0 0 0 2 2m-2 0V15m0-2.25a2.001 2.001 0 0 0 2-2 2.001 2.001 0 0 0 2 2" />
    </svg>
);

export const PaperAirplaneIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925a.75.75 0 00.976.634l11.41-2.282a.75.75 0 000-1.418l-11.41-2.283a.75.75 0 00-.15-.025z" />
    <path d="M5.223 10.278a.75.75 0 00.976.634l11.41-2.282a.75.75 0 000-1.418l-11.41-2.283a.75.75 0 00-1.126.95l1.414 4.925z" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
    <path d="M5.26 17.242a.75.75 0 10-1.06-1.06 3.75 3.75 0 00-5.304 5.304.75.75 0 101.06-1.06 2.25 2.25 0 013.182-3.182z" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.095a1.23 1.23 0 00.41-1.412A9.99 9.99 0 0010 12.75a9.99 9.99 0 00-6.535 1.743z" />
  </svg>
);

export const CpuChipIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m-3.75-16.5v1.5m0 16.5v-1.5M12 5.25v-1.5m0 16.5v-1.5m3.75-12H12m0 0V4.5m0 3.75 3.75 3.75M12 8.25l-3.75 3.75m0 0h3.75m-3.75 0V12m6.375 0l-3.75 3.75m3.75 0-3.75-3.75m0 0V12m-3.75 0h3.75" />
  </svg>
);

export const CodeBracketIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

export const XMarkIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export const ArrowTopRightOnSquareIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h4.125m-4.5 0L19.5 19.5" />
    </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
    </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.075c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125V14.15M12 4.5v6.75m0 0-3.75-3.75M12 11.25l3.75-3.75M3 10.5h18" />
    </svg>
);

export const FolderIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h16.5m-16.5 0A2.25 2.25 0 0 1 5.25 7.5h13.5a2.25 2.25 0 0 1 2.25 2.25m-16.5 0v6.75a2.25 2.25 0 0 0 2.25 2.25h12a2.25 2.25 0 0 0 2.25-2.25V9.75" />
    </svg>
);

export const AcademicCapIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
);

export const DocumentTextIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const EnvelopeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

export const Squares2X2Icon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
);

// Skill icons (unchanged)
export const UnityIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.004 9.177L12 3.535l-9.004 5.642v6.649L12 21.465l9.004-5.643v-4.145H16.5v1.86l-4.5 2.812-6.75-4.22v-3.7l6.75 4.219 2.25-1.406V3.535l6.75 4.22v.922h2.254v.5zM12 12L3 6l9 5.5V12zm0 0v5.5L3 12l9 5.5V12z"/></svg>
);
export const CSharpIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.03 13.85c.35-.35.82-.54 1.31-.54.98 0 1.76.79 1.76 1.76s-.78 1.76-1.76 1.76c-.49 0-.96-.19-1.31-.54l-4.24 2.45c.1.33.16.68.16 1.05 0 .98-.79 1.76-1.76 1.76s-1.76-.78-1.76-1.76c0-.37.11-.72.16-1.05L4.15 16.3c-.35.35-.82.54-1.31-.54-.98 0-1.76-.79-1.76-1.76s.78-1.76 1.76-1.76c.49 0 .96.19 1.31.54l4.24-2.45c-.1-.33-.16-.68-.16-1.05 0-.98.79-1.76 1.76-1.76s1.76.78 1.76 1.76c0 .37-.11.72-.16 1.05l4.24 2.45zM22.94 8.21h-2.2v-2.2h-1.46v2.2h-2.2v1.46h2.2v2.2h1.46v-2.2h2.2V8.21zm-4.39 5.1h-2.2v-2.2h-1.46v2.2h-2.2v1.46h2.2v2.2h1.46v-2.2h2.2v-1.46z"/></svg>
);
export const CarIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875m-16.5 0h16.5M5.25 6h13.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H5.25A1.125 1.125 0 0 1 4.125 9v-1.5c0-.621.504-1.125 1.125-1.125Z" /></svg>
);
export const VrIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>
);
export const BlenderIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.03 2.97a.75.75 0 00-1.06 0l-10 10a.75.75 0 000 1.06l5.5 5.5a.75.75 0 001.06 0l10-10a.75.75 0 000-1.06l-5.5-5.5zM13.5 4.06l4.44 4.44-1.47 1.47-4.44-4.44 1.47-1.47zm-11.44 9.5L6.5 9.12l4.44 4.44L6.5 18l-4.44-4.44z"/></svg>
);
export const ReactIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-8.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm3.5 4c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5zm5.5-4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/><ellipse cx="12" cy="12" rx="4" ry="8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="4" ry="8" transform="rotate(-60 12 12)"/></svg>
);
export const AngularIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 4.5v15L12 22l9-2.5v-15L12 2zm0 2.47L18.6 7H5.4L12 4.47zM12 19.53L5 17.5V9h14v8.5L12 19.53zM12 8l-7 8h2.5l4.5-5.5 4.5 5.5H19l-7-8z"/></svg>
);
export const TypescriptIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 1.5v21h21v-21h-21zM11.25 15.75H8.25v-6h5.25v2.25h-3v1.5h3v2.25h-5.25v-1.5zm7.5-1.5c0 .41-.34.75-.75.75h-3.75v1.5H12V9.75h6.75v1.5h-4.5v3z"/></svg>
);
export const JavascriptIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 1.5v21h21v-21h-21zM9.75 16.5c0 .41-.34.75-.75.75h-1.5c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v6zm5.25 0c0 .41-.34.75-.75.75h-2.25c-.41 0-.75-.34-.75-.75V10.5c0-.41.34-.75.75-.75h2.25c.41 0 .75.34.75.75v1.5h-1.5v-0.75h-1.5v4.5h1.5v-0.75h1.5v1.5z"/></svg>
);
export const HtmlIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.234-2.719 8.625.002.235-2.625H4.25l.75 8.953h9.469l.375-4.172h-4.781l.234 2.58h-2.156l-.235-2.563h6.844l-.765 8.5-5.094 1.406-5.094-1.406-.375-4.219h2.156l.156 1.765 3.125.859 3.125-.859.344-3.531H7.031z"/></svg>
);
export const CssIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.234-2.719h4.375l.235-2.625H4.25l.75 8.953h9.469l.375-4.172h-4.781l.234 2.58h-2.156l-.235-2.563h6.844l-.765 8.5-5.094 1.406-5.094-1.406-.375-4.219h2.156l.156 1.765 3.125.859 3.125-.859.344-3.531H7.031z"/></svg>
);
export const TailwindIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8 11.5c0-1.38 1.12-2.5 2.5-2.5S13 10.12 13 11.5s-1.12 2.5-2.5 2.5S8 12.88 8 11.5zm5.5 0c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5z"/></svg>
);
export const NodejsIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.04 15.65c-.2.2-.47.2-.67 0l-3.35-3.35c-.2-.2-.2-.47 0-.67l.67-.67c.2-.2.47-.2.67 0l2.33 2.33 5.33-5.33c.2-.2.47-.2.67 0l.67.67c.2.2.2.47 0 .67l-6 6z"/></svg>
);
export const ExpressIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h16v2H4v-2z"/></svg>
);
export const PythonIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.69 15.31c-1.68 0-3.04-1.36-3.04-3.04s1.36-3.04 3.04-3.04h1.38v-1.54H9.65v-1.53h4.04c1.68 0 3.04 1.36 3.04 3.04s-1.36 3.04-3.04 3.04h-1.38v1.54h3.04v1.53h-4.04c-1.68 0-3.04-1.36-3.04-3.04zm.69-4.57c-.84 0-1.52.68-1.52 1.52s.68 1.52 1.52 1.52h1.38v-3.04h-1.38zm0 6.1c-.84 0-1.52.68-1.52 1.52s.68 1.52 1.52 1.52h1.38v-3.04h-1.38z"/></svg>
);
export const ApiIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
);
export const DjangoIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 2h16v20H4V2zm2 2v16h12V4H6zm2 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>
);
export const MongodbIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
);
export const PostgresqlIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v8h-2v-8zm0-4h2v2h-2v-2z"/></svg>
);
export const FirebaseIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 4.5v15L12 22l9-2.5v-15L12 2zm0 2.47L18.6 7H5.4L12 4.47zM5 17.5V9h14v8.5L12 19.53 5 17.5z"/></svg>
);
export const GoogleCloudIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
);
export const GitIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2V7zm0 6h2v2h-2v-2z"/></svg>
);
export const HerokuIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4v-2zm0 4h4v2h-4v-2zM8 7h8v2H8V7z"/></svg>
);
export const CircleStackIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  );
  
export const ServerStackIcon: React.FC<IconProps> = ({ className }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
);
  
export const CloudIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-5.785-1.063 5.25 5.25 0 0 0-9.632 1.287v1.564Z" />
    </svg>
);

export const CubeTransparentIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);