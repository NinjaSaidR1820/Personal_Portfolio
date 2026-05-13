import { Code2, Database, Shield, Monitor } from 'lucide-react';
import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Desarrollo',
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ['C#', 'Python', 'Java', 'JavaScript', 'React', 'Django'],
    className: 'lg:col-span-2 lg:row-span-1 bg-zinc-900',
  },
  {
    title: 'Datos',
    icon: <Database className="w-6 h-6 text-accent" />,
    skills: ['SQL Server', 'Power BI', 'Procesos ETL', 'Data Warehouse'],
    className: 'lg:col-span-2 lg:row-span-1 bg-zinc-900',
  },
  {
    title: 'Infraestructura IT',
    icon: <Monitor className="w-6 h-6 text-secondary" />,
    skills: ['Active Directory', 'Máquinas Virtuales', 'RDP', 'Jira', 'Troubleshooting'],
    className: 'lg:col-span-2 lg:row-span-1 bg-zinc-900',
  },
  {
    title: 'Ciberseguridad',
    icon: <Shield className="w-6 h-6 text-primary" />,
    skills: ['Pentesting', 'Nmap', 'Análisis de vulnerabilidades'],
    className: 'lg:col-span-2 lg:row-span-1 bg-zinc-900',
  },
];

export const allSkills = skillCategories.flatMap(cat => cat.skills);
