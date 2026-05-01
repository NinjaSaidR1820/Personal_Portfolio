'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Database, BarChart3, Code } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function Projects() {
  const projectAngel = PlaceHolderImages.find(img => img.id === 'project-angel');

  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Innovación en Acción</h2>
          <h3 className="text-4xl md:text-5xl font-black font-headline text-foreground">Projects</h3>
        </div>

        {/* Proyecto Estrella */}
        <Card className="group overflow-hidden border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:shadow-2xl transition-all duration-500 rounded-[2rem] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <Image
                src={projectAngel?.imageUrl || ''}
                alt="Proyecto Clínica El Ángel"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="medical dashboard analytics"
              />
              <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg z-20 font-bold text-sm">
                <Award className="w-4 h-4" /> Feria Nacional 2023
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-headline font-black mb-6 flex items-center gap-3">
                <span className="text-primary">01.</span> Sistema Integral Clínica El Ángel
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h5 className="font-bold text-sm uppercase text-accent mb-2">El Reto</h5>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    Modernizar la gestión de pacientes, recetas e inventarios médicos que generaban cuellos de botella críticos.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase text-secondary mb-2">El Impacto</h5>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    Reducción del 60% en tiempos de atención y trazabilidad total mediante procesos automatizados.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Power BI', 'SQL Server', 'ETL', 'DataCube', 'C#'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-muted-foreground border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              <Button className="w-fit rounded-full bg-accent hover:bg-accent/90 text-white font-bold px-8" asChild>
                <Link href="/works">
                  Explorar todos los proyectos <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Otros servicios/áreas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 border-white/5 bg-white/[0.02] rounded-3xl hover:border-primary/50 transition-all hover:-translate-y-2">
            <BarChart3 className="w-10 h-10 text-primary mb-6" />
            <h4 className="text-xl font-bold font-headline mb-3 text-foreground">Análisis de Datos</h4>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Transformación de datos crudos en dashboards accionables con Power BI para la toma de decisiones.
            </p>
          </Card>
          <Card className="p-8 border-white/5 bg-white/[0.02] rounded-3xl hover:border-accent/50 transition-all hover:-translate-y-2">
            <Database className="w-10 h-10 text-accent mb-6" />
            <h4 className="text-xl font-bold font-headline mb-3 text-foreground">Soporte IT Corporativo</h4>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Administración de infraestructura crítica, Active Directory y seguridad de endpoints en sector bancario.
            </p>
          </Card>
          <Card className="p-8 border-white/5 bg-white/[0.02] rounded-3xl hover:border-secondary/50 transition-all hover:-translate-y-2">
            <Code className="w-10 h-10 text-secondary mb-6" />
            <h4 className="text-xl font-bold font-headline mb-3 text-foreground">Desarrollo a Medida</h4>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Construcción de software escalable y eficiente enfocado en optimizar procesos de negocio.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}