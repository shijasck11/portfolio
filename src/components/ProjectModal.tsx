import { useEffect, useState } from 'react';
import type { Project } from '../data/types';
import ProjectDetails from './ProjectDetails';

/**
 * The home page's only island. Project cards are plain links to
 * /projects/<slug>/ marked with data-project="<slug>"; once this island has
 * hydrated it opens those links in a modal instead. Before hydration, with
 * JavaScript off, or with a modifier/middle click, the link simply navigates.
 */
export default function ProjectModal({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[data-project]');
      const project = link && projects.find((p) => p.slug === link.dataset.project);
      if (!project) return;
      e.preventDefault();
      setSelected(project);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [projects]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selected]);

  if (!selected) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={selected.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs"
    >
      <ProjectDetails
        key={selected.slug}
        project={selected}
        onClose={() => setSelected(null)}
        className="max-h-[90vh] overflow-y-auto"
      />
    </div>
  );
}
