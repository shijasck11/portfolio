export interface IndividualSkill {
  name: string;
  icon: string;
}

export interface ProjectVideo {
  title: string;
  url: string;
}

export interface Project {
  /** URL-safe id, used for /projects/<slug> pages. */
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  microsoftStoreUrl?: string;
  linkIcon?: string;
  videos?: ProjectVideo[];
  isMobile?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export interface Publication {
  title: string;
  conference: string;
  date: string;
  url: string;
}
