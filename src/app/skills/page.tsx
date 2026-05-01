
'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Database, 
  Shield, 
  Monitor, 
  Sparkles, 
  Terminal, 
  FileCode, 
  Layout, 
  Zap, 
  Cpu, 
  Lock,
  BarChart3,
  Server,
  Cloud
} from 'lucide-react';
import { SkillExplanationDialog } from '@/components/SkillExplanationDialog';

const skillCategories = [
  {
    title: 'Desarrollo',
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'React', icon: <Zap className="w-4 h-4 text-[#61DAFB]" /> },
      { name: 'C#', icon: <Terminal className="w-4 h-4 text-[#178600]" /> },
      { name: 'Python', icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
      { name: 'Django', icon: <Server className="w-4 h-4 text-[#092E20]" /> },
      { name: 'Java', icon: <Cpu className="w-4 h-4 text-[#007396]" /> },
      { name: 'JavaScript', icon: <FileCode className="w-4 h-4 text-[#F7DF1E]" /> },
    ],
    className: 'lg:col-span-2 bg-zinc-900',
  },
  {
    title: 'Datos',
    icon: <Database className="w-6 h-6 text-accent" />,
    skills: [
      { name: 'SQL Server', icon: <Database className="w-4 h-4 text-[#CC2927]" /> },
      { name: 'Power BI', icon: <BarChart3 className="w-4 h-4 text-[#F2C811]" /> },
      { name: 'Procesos ETL', icon: <Zap className="w-4 h-4 text-accent" /> },
      { name: 'Data Warehouse', icon: <Cloud className="w-4 h-4 text-accent" /> },
    ],
    className: 'lg:col-span-2 bg-zinc-900',
  },
  {
    title: 'Infraestructura IT',
    icon: <Monitor className="w-6 h-6 text-secondary" />,
    skills: [
      { name: 'Active Directory', icon: <Layout className="w-4 h-4 text-secondary" /> },
      { name: 'Máquinas Virtuales', icon: <Monitor className="w-4 h-4 text-secondary" /> },
      { name: 'RDP', icon: <Server className="w-4 h-4 text-secondary" /> },
      { name: 'Troubleshooting', icon: <Terminal className="w-4 h-4 text-secondary" /> },
    ],
    className: 'lg:col-span-2 bg-zinc-900',
  },
  {
    title: 'Ciberseguridad',
    icon: <Shield className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'Pentesting', icon: <Lock className="w-4 h-4 text-primary" /> },
      { name: 'Nmap', icon: <Terminal className="w-4 h-4 text-primary" /> },
      { name: 'Vulnerabilidades', icon: <Shield className="w-4 h-4 text-primary" /> },
    ],
    className: 'lg:col-span-2 bg-zinc-900',
  },
];

export default function SkillsPage() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-zinc-950 text-white dark py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Stack & Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black font-headline">Mi Ecosistema Tecnológico</h3>
          </div>
          <p className="text-zinc-400 max-w-md font-body">
            Dominio de herramientas que impulsan la eficiencia y seguridad empresarial. 
            <span className="text-accent font-medium ml-1">Usa la IA para explorar detalles.</span>
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
                <h4 className="text-2xl font-headline font-bold">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <button
                    key={skill.name}
                    onClick={() => setActiveSkill(skill.name)}
                    className="flex items-center gap-3 px-5 py-3 bg-zinc-800/40 rounded-full text-sm font-bold font-body border border-zinc-700/50 hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all group/btn"
                  >
                    {skill.icon}
                    {skill.name}
                    <Sparkles className="w-3 h-3 text-accent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
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
    </main>
  );
}
