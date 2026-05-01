'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight font-headline animate-in fade-in duration-700">
          Denis Said Rivas Sánchez<br />
          <span className="text-primary text-2xl md:text-3xl lg:text-4xl block mt-4 font-bold">
            Ingeniero de Sistemas, Developer & IT Support Analista
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-body">
          Egresado de Ingeniería en Sistemas. Combino mi pasión por el desarrollo de software, la ciberseguridad y el análisis de datos para construir infraestructuras sólidas y aplicaciones eficientes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg font-headline group" asChild>
            <Link href="/works">
              Ver mis proyectos <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg font-headline group border-white/10 hover:bg-white/5">
            Descargar CV <Download className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </Button>
          <div className="flex items-center gap-3 ml-0 sm:ml-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/5 hover:text-primary transition-colors" asChild>
              <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/5 hover:text-white transition-colors" asChild>
              <a href="https://github.com/NinjaSaidR1820" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}