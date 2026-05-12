import { ReactNode } from 'react';

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  education: string;
  university: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: ReactNode;
}

export interface Skill {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience?: number;
}

export interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
  className?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Corporativo' | 'Proyectos Personales';
  description: string;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  number?: string;
  description: string;
  challenge: string;
  impact: string;
  technologies: string[];
  imageUrl: string;
  isFeatured?: boolean;
  award?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

export interface Certification {
  title: string;
  issuer: string;
  details: string;
  date?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year?: string;
}

export interface NavigationItem {
  href: string;
  label: string;
  icon: ReactNode;
}

export interface MediaAsset {
  id: string;
  type: 'image' | 'video' | 'document';
  url: string;
  alt?: string;
  caption?: string;
}
