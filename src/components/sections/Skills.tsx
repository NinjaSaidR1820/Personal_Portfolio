
'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Code2, Database, Shield, Monitor, Sparkles } from 'lucide-react';
import { SkillExplanationDialog } from '@/components/SkillExplanationDialog';

const skillCategories = [
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

export function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section className="py-24 bg-zinc-950 text-white dark">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Stack & Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black font-headline">Mi Ecosistema Tecnológico</h3>
          </div>
          <p className="text-zinc-400 max-w-md font-body">
            Dominio de herramientas que impulsan la eficiencia y seguridad empresarial. 
            <span className="text-accent font-medium ml-1">Haz clic para ver detalles con AI.</span>
          </p>
        </div>

        <div className="bento-grid">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className={`p-8 border-zinc-800 transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-primary/5 group ${category.className}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-zinc-800/50 rounded-xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h4 className="text-xl font-headline font-bold">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setActiveSkill(skill)}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800/40 rounded-full text-sm font-body border border-zinc-700/50 hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all"
                  >
                    {skill}
                    <Sparkles className="w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <SkillExplanationDialog 
        skillName={activeSkill} 
        onClose={() => setActiveSkill(null)} 
      />
    </section>
  );
}
