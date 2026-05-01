
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight font-headline animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Transformo <span className="text-primary italic">datos</span> y código en <br />
          <span className="text-secondary">soluciones</span> de impacto.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-body animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Egresado de Ingeniería en Sistemas. Combino mi pasión por el desarrollo de software, la ciberseguridad y el análisis de datos para construir infraestructuras sólidas y aplicaciones eficientes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg font-headline group" asChild>
            <a href="#proyectos">
              Ver mis proyectos <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg font-headline group border-2">
            Descargar CV <Download className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </Button>
          <div className="flex items-center gap-3 ml-0 sm:ml-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted hover:text-primary transition-colors" asChild>
              <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted hover:text-foreground transition-colors" asChild>
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
