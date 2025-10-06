// FIX: Import React to provide the 'React' namespace for types like React.FC.
import React from 'react';

// Renamed Skill to avoid conflict with new SKILLS structure
export interface IndividualSkill {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string | string[];
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

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}