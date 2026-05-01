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
  Cloud,
  GraduationCap,
  Award,
  CheckCircle2,
  ExternalLink,
  Calendar,
  MapPin
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
    className: 'lg:col-span-2 bg-white/[0.02]',
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
    className: 'lg:col-span-2 bg-white/[0.02]',
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
    className: 'lg:col-span-2 bg-white/[0.02]',
  },
  {
    title: 'Ciberseguridad',
    icon: <Shield className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'Pentesting', icon: <Lock className="w-4 h-4 text-primary" /> },
      { name: 'Nmap', icon: <Terminal className="w-4 h-4 text-primary" /> },
      { name: 'Vulnerabilidades', icon: <Shield className="w-4 h-4 text-primary" /> },
    ],
    className: 'lg:col-span-2 bg-white/[0.02]',
  },
];

const education = [
  {
    institution: 'UNIVERSIDAD NACIONAL DE INGENIERIA (UNI)',
    degree: 'Ingeniería de Sistemas',
    status: 'Egresado',
    location: 'Managua, Nicaragua',
    period: 'Feb. 2021 – Dic. 2025',
    icon: <GraduationCap className="w-6 h-6 text-primary" />
  },
  {
    institution: 'INSTITUTO CRISTIANO LA PALABRA',
    degree: 'Bachiller en Ciencias y Letras',
    status: 'Graduado con Honores (Excelencia Académica)',
    location: 'Managua, Nicaragua',
    period: 'Nov. 2019',
    icon: <Award className="w-6 h-6 text-accent" />
  }
];

const certifications = [
  {
    title: 'CS50x – Harvard University',
    subtitle: 'Introduction to Computer Science',
    description: 'Certificado obtenido tras completar 10 problem sets, 9 laboratorios y un proyecto final. Adquirí fundamentos sólidos en algoritmos, C, Python, SQL, HTML, CSS, JavaScript y Git.',
    issuer: 'Harvard University'
  },
  {
    title: 'IBM – edX',
    subtitle: 'DA0130: Analyzing Data with Excel',
    description: 'Aprendí a limpiar, analizar y visualizar datos en Excel usando funciones estadísticas, dashboards y herramientas avanzadas.',
    issuer: 'IBM'
  },
  {
    title: 'Cisco Network Academy',
    subtitle: 'Cisco Certified Ethical Hacker (CEH) – (En Proceso)',
    description: 'Identificación y explotación ética de vulnerabilidades en sistemas, redes y aplicaciones.',
    issuer: 'Cisco'
  },
  {
    title: 'NicaSecurity – ¿How to Begin In Pentesting?',
    subtitle: 'Capacitación Especializada',
    description: 'Participación en capacitación especializada sobre pruebas de penetración (pentesting) y seguridad ofensiva.',
    issuer: 'NicaSecurity'
  }
];

export default function SkillsPage() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <main className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section 1: Stack & Expertise */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Stack & Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-black font-headline">Mi Ecosistema Tecnológico</h3>
            </div>
          </div>

          <div className="bento-grid">
            {skillCategories.map((category, idx) => (
              <Card
                key={idx}
                className={`p-8 border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-white/10 ${category.className}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl">
                    {category.icon}
                  </div>
                  <h4 className="text-2xl font-headline font-bold">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => setActiveSkill(skill.name)}
                      className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-full text-sm font-bold border border-white/5 hover:bg-primary/20 hover:border-primary/50 transition-all group/btn"
                    >
                      {skill.icon}
                      {skill.name}
                    </button>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 2: Educacion */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-secondary font-headline font-bold uppercase tracking-widest text-sm mb-4">Formación Académica</h2>
            <h3 className="text-4xl md:text-5xl font-black font-headline">Educación y Estudios Profesionales</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {education.map((item, idx) => (
              <Card key={idx} className="p-8 bg-white/[0.02] border-white/5 hover:border-secondary/50 transition-colors">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex gap-6">
                    <div className="p-4 bg-white/5 rounded-2xl h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black font-headline mb-2">{item.institution}</h4>
                      <p className="text-secondary font-bold text-lg mb-1">{item.degree}</p>
                      <p className="text-muted-foreground font-medium italic">{item.status}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-muted-foreground font-body gap-2">
                    <div className="flex items-center gap-2 font-bold"><Calendar className="w-4 h-4 text-secondary" /> {item.period}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> {item.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 3: Certificaciones */}
        <div className="pb-24">
          <div className="mb-12">
            <h2 className="text-accent font-headline font-bold uppercase tracking-widest text-sm mb-4">Especialización</h2>
            <h3 className="text-4xl md:text-5xl font-black font-headline">Certificaciones Destacadas</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="p-8 bg-white/[0.02] border-white/5 hover:border-accent/50 transition-all group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-xs font-black uppercase tracking-tighter text-accent/80">{cert.issuer}</span>
                  </div>
                </div>
                <h4 className="text-xl font-black font-headline mb-2 group-hover:text-accent transition-colors">{cert.title}</h4>
                <p className="text-sm font-bold text-zinc-400 mb-4">{cert.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {cert.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <SkillExplanationDialog 
        skillName={activeSkill} 
        onClose={() => setActiveSkill(null)} 
      />
    </main>
  );
}