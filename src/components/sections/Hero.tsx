
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-5xl text-center">
        <div className="inline-flex items-center space-x-2 bg-muted px-4 py-1.5 rounded-full mb-8 border border-border animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-headline">Open to new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight font-headline animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Crafting <span className="text-primary italic">Digital</span> <br />
          <span className="text-secondary">Excellence.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-body animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          I'm a Full-Stack Engineer focused on building robust, scalable infrastructure and beautiful, user-centric interfaces. Transforming complex problems into elegant software.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-white px-8 group font-headline">
            View My Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex items-center gap-4 ml-0 sm:ml-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted hover:text-secondary transition-colors">
              <Twitter className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
