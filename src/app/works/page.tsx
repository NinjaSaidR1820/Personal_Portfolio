import React from 'react';
import { Card } from '@/components/ui/card';
import { Github, ExternalLink, Code2, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const impressiveWorks = [
  {
    id: 'project-angel',
    title: 'Proyecto Clínica Farmacéutica El Ángel',
    description: 'Sistema integral de gestión para clínicas y farmacias. Incluye control de inventarios, recetas electrónicas y dashboard de analítica.',
    tech: ['C#', 'SQL Server', 'Power BI', 'ETL'],
    github: 'https://github.com/NinjaSaidR1820/Project-2M2.git',
    icon: <Code2 className="w-8 h-8 text-primary" />,
  },
  {
    id: 'project-delafinca',
    title: 'E-commerce Cafetería DeLaFinca',
    description: 'Propuesta de plataforma de comercio electrónico para una cafetería local, optimizando el proceso de pedidos y gestión de productos.',
    tech: ['Java', 'Spring', 'JavaScript', 'Database'],
    github: 'https://github.com/NinjaSaidR1820/DeLaFincaEcommerce.git',
    icon: <Code2 className="w-8 h-8 text-accent" />,
  },
];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-background py-24 px-6 pb-32 sm:pb-24">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-20 text-center">
          <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black font-headline mb-4 italic text-foreground leading-tight">
            "El software es el arte de transformar la complejidad en simplicidad."
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Explora algunos de mis trabajos más recientes y las soluciones que estoy construyendo.
          </p>
        </div>

        <h3 className="text-4xl font-black font-headline mb-12 flex items-center gap-4">
          Impressive <span className="text-accent">Works</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impressiveWorks.map((work, idx) => {
            const projectImage = PlaceHolderImages.find(img => img.id === work.id);
            return (
              <Card key={idx} className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all hover:shadow-xl group rounded-[2rem] flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={projectImage?.imageUrl || ''}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={projectImage?.imageHint || 'software project'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6 flex justify-between items-start">
                    <div className="p-4 bg-muted rounded-2xl group-hover:scale-110 transition-transform">
                      {work.icon}
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full" asChild>
                      <a href={work.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6" />
                      </a>
                    </Button>
                  </div>
                  <h4 className="text-2xl font-black font-headline mb-4 text-foreground">{work.title}</h4>
                  <p className="text-muted-foreground font-body leading-relaxed mb-8 flex-1">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {work.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-muted rounded-lg text-xs font-bold text-muted-foreground border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full rounded-xl bg-muted hover:bg-primary hover:text-white transition-colors text-foreground font-bold" asChild>
                    <a href={work.github} target="_blank" rel="noopener noreferrer">
                      Ver Código en GitHub <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}