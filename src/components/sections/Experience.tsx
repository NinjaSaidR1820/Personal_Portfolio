
import React from 'react';
import { Card } from '@/components/ui/card';
import { Building2, Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'IT Support',
    company: 'Banco de Finanzas (BDF)',
    period: 'Enero 2025 - Diciembre 2025',
    location: 'Managua, Nicaragua',
    type: 'Corporativo',
    bullets: [
      'Soporte técnico integral al personal interno, atendiendo incidencias relacionadas con hardware, software, redes y sistemas institucionales.',
      'Administración de Active Directory, incluyendo gestión de usuarios, restablecimiento de contraseñas, asignación de permisos y control de accesos.',
      'Soporte remoto utilizando herramientas como RDP, AnyDesk, TeamViewer y EndpointCentral, garantizando atención oportuna y eficiente.',
      'Atención y resolución de incidencias relacionadas con VPN, conectividad de red y configuración de impresoras.',
      'Soporte a Máquinas Virtuales (Virtual Machines), incluyendo asistencia en acceso, monitoreo básico, validación de funcionamiento y apoyo en la gestión operativa de entornos virtualizados.',
      'Imaging de equipos, configuración inicial de endpoints y preparación de estaciones de trabajo conforme a estándares institucionales.',
      'Registro, seguimiento y cierre de incidencias mediante herramientas ITSM como Jira y Aranda Software, cumpliendo con los SLA establecidos.',
      'Elaboración y actualización de documentación técnica y base de conocimientos, contribuyendo a procesos de auditoría y mejora continua del área de TI.',
      'Apoyo y participación en funciones básicas de SOC (Security Operations Center), realizando monitoreo de alertas de seguridad, revisión de eventos en herramientas de ciberseguridad (Logs), validación de posibles incidentes según Reportes.',
    ],
  },
  {
    role: 'Desarrollador de Software & Analista',
    company: 'Proyecto Clínica Farmacéutica El Ángel',
    period: 'Marzo 2023 - Julio 2023',
    location: 'Managua, Nicaragua',
    type: 'Proyectos personales',
    bullets: [
      'Desarrollé un sistema de escritorio completo para gestionar medicamentos, recetas y pacientes en entornos clínicos.',
      'Implementé procesos ETL y dashboards interactivos con Power BI, logrando una reducción del 60% en tiempos de atención.',
      'Diseñé un modelo de Data Warehouse que permitió una mayor trazabilidad de la información clínica y control de inventarios.',
      'Fui Ganador con el 2.º Lugar en la Feria Nacional de Ciencia y Tecnología en la categoría Tecnología e Innovación.',
    ],
  },
];

export function Experience() {
  return (
    <section className="py-24 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Trayectoria Profesional</h2>
          <h3 className="text-4xl md:text-5xl font-black font-headline text-foreground leading-tight">Experiencia en el <span className="text-accent">Mundo Real</span></h3>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 border-l-2 border-primary/20">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
              
              <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-tighter text-accent bg-accent/10 px-2 py-1 rounded-md mb-2 inline-block">
                    {exp.type}
                  </span>
                  <h4 className="text-3xl font-black font-headline text-foreground">{exp.company}</h4>
                  <p className="text-primary font-bold text-lg">{exp.role}</p>
                </div>
                <div className="flex flex-col md:items-end text-sm text-muted-foreground font-medium">
                  <div className="flex items-center gap-2 font-bold"><Calendar className="w-4 h-4 text-primary" /> {exp.period}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {exp.location}</div>
                </div>
              </div>

              <ul className="grid grid-cols-1 gap-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-4 text-muted-foreground leading-relaxed font-body">
                    <div className="mt-1.5 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-lg">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
