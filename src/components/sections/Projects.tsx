'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award } from 'lucide-react';
import Link from 'next/link';
import { featuredProject, services } from '@/data';

export function Projects() {

  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Innovación en Acción</h2>
          <h3 className="text-4xl md:text-5xl font-black font-headline text-foreground">Projects</h3>
        </div>

        {/* Proyecto Estrella */}
        <Card className="group overflow-hidden border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:shadow-2xl transition-all duration-500 rounded-[2rem] mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <Image
                src={featuredProject.imageUrl}
                alt={featuredProject.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="medical dashboard analytics"
              />
              {featuredProject.award && (
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg z-20 font-bold text-sm animate-pulse">
                  <Award className="w-4 h-4" /> {featuredProject.award}
                </div>
              )}
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-headline font-black mb-6 flex items-center gap-3">
                <span className="text-primary">{featuredProject.number}.</span> {featuredProject.title}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h5 className="font-bold text-sm uppercase text-accent mb-2">El Reto</h5>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {featuredProject.challenge}
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase text-secondary mb-2">El Impacto</h5>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {featuredProject.impact}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.technologies.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-muted-foreground border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              <Button className="w-fit rounded-full bg-accent hover:bg-accent/90 text-white font-bold px-8 h-12 transition-all hover:scale-105" asChild>
                <Link href="/works">
                  Explorar todos los proyectos <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Otros servicios/áreas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card 
              key={idx} 
              className={`p-8 border-white/5 bg-white/[0.02] rounded-3xl ${service.color} transition-all hover:-translate-y-2 duration-500 animate-in fade-in slide-in-from-bottom-4`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {service.icon}
              <h4 className="text-xl font-bold font-headline mb-3 text-foreground">{service.title}</h4>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
