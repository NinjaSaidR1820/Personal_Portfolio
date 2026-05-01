
import React from 'react';
import { Card } from '@/components/ui/card';
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Soporte IT & Operaciones',
    company: 'Banco de Finanzas (BDF)',
    period: '2023 - Presente',
    location: 'Managua, Nicaragua',
    description: 'Aseguré la estabilidad tecnológica de la institución financiera mediante soporte remoto, administración de Active Directory y configuración de endpoints. Participación activa en validación de incidentes de seguridad (SOC) y monitoreo de vulnerabilidades.',
    icon: <Building2 className="w-6 h-6 text-primary" />,
  },
  {
    role: 'Desarrollador de Software & Analista',
    company: 'Proyecto Clínica El Ángel',
    period: '2022 - 2023',
    location: 'Nicaragua',
    description: 'Lideré el ciclo de vida del software clínico, integrando visualización de datos avanzada mediante Power BI y garantizando una experiencia de usuario eficiente para el personal médico. Implementé procesos ETL para la integración de datos.',
    icon: <Briefcase className="w-6 h-6 text-accent" />,
  },
];

export function Experience() {
  return (
    <section className="py-24 bg-muted/20 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16">
          <h2 className="text-secondary font-headline font-bold uppercase tracking-widest text-sm mb-4">Trayectoria</h2>
          <h3 className="text-4xl md:text-5xl font-black font-headline text-foreground leading-tight">Experiencia en el <span className="text-accent">Mundo Real</span></h3>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="p-8 border-border bg-card rounded-3xl hover:shadow-lg transition-all border-l-8 border-l-primary/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-muted rounded-2xl">
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black font-headline text-foreground">{exp.role}</h4>
                    <span className="text-primary font-bold font-body">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground font-medium">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {exp.period}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {exp.location}</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed font-body text-lg">
                {exp.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
