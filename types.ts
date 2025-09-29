// FIX: Imported ReactNode to fix an error where the JSX namespace was not found in this .ts file.
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string[];
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  videos?: { title: string; url: string }[];
  isMobile?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Publication {
    title: string;
    conference: string;
    date: string;
    url: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}