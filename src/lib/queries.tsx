import { prisma } from '@/lib/db';
import { Profile, Experience, Certification, Education, Project, Service, SkillCategory } from '@/types';
import { Code2, Database, Shield, Terminal, Globe, BarChart3, Code } from 'lucide-react';
import { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  Code2: <Code2 className="w-10 h-10 text-secondary mb-6" />,
  Database: <Database className="w-10 h-10 text-accent mb-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-10 h-10 text-primary mb-6" />,
  Code: <Code className="w-10 h-10 text-secondary mb-6" />,
};

export async function getProfile(): Promise<Profile | null> {
  const db = await prisma.profile.findFirst();
  if (!db) return null;
  return {
    name: db.name,
    title: db.title,
    tagline: db.tagline,
    bio: db.bio,
    email: db.email,
    phone: db.phone,
    location: db.location,
    linkedin: db.linkedin,
    github: db.github,
    education: db.education,
    university: db.university,
  };
}

export async function getExperiences(): Promise<Experience[]> {
  const db = await prisma.experience.findMany({
    include: { bullets: true },
    orderBy: { createdAt: 'asc' },
  });
  return db.map(e => ({
    role: e.role,
    company: e.company,
    period: e.period,
    location: e.location,
    type: e.type as 'Corporativo' | 'Proyectos Personales',
    description: e.description,
    bullets: e.bullets.map(b => b.content),
  }));
}

export async function getCertifications(): Promise<Certification[]> {
  const db = await prisma.certification.findMany();
  return db.map(c => ({
    title: c.title,
    issuer: c.issuer,
    details: c.details,
    date: c.date || undefined,
  }));
}

export async function getEducation(): Promise<Education | null> {
  const db = await prisma.education.findFirst();
  if (!db) return null;
  return {
    degree: db.degree,
    institution: db.institution,
    year: db.year || undefined,
  };
}

export async function getFeaturedProject(): Promise<Project | null> {
  const db = await prisma.project.findFirst({ where: { isFeatured: true } });
  if (!db) return null;
  return {
    id: db.id,
    title: db.title,
    number: db.number || undefined,
    description: db.description,
    challenge: db.challenge,
    impact: db.impact,
    technologies: db.technologies,
    imageUrl: db.imageUrl,
    isFeatured: db.isFeatured,
    award: db.award || undefined,
    githubUrl: db.githubUrl || undefined,
    liveUrl: db.liveUrl || undefined,
  };
}

export async function getServices(): Promise<Service[]> {
  const db = await prisma.service.findMany({ orderBy: { order: 'asc' } });
  return db.map(s => ({
    icon: iconMap[s.icon] || <Globe className="w-6 h-6" />,
    title: s.title,
    description: s.description,
    color: s.color,
  }));
}

export async function getSkillCategories(): Promise<SkillCategory[]> {
  const db = await prisma.skillCategory.findMany({
    include: { skills: true },
    orderBy: { order: 'asc' },
  });
  return db.map(c => ({
    title: c.title,
    icon: iconMap[c.icon] || <Code2 className="w-6 h-6" />,
    skills: c.skills.map(s => s.name),
    className: c.className || undefined,
  }));
}
