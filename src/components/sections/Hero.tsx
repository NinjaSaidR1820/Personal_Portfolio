'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { profile } from '@/data';

export function Hero() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo');

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden py-24 sm:py-12">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4 animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight font-headline leading-tight">
                {profile.tagline.split('soluciones')[0]}<span className="text-primary">soluciones tecnológicas</span> que impulsan resultados.
              </h1>
            </div>

            <div className="animate-in fade-in slide-in-from-left duration-700 delay-200">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">
                {profile.name}
              </h2>
              <p className="text-xl md:text-2xl font-bold text-primary mb-4">
                {profile.title}
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
                {profile.bio}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg font-headline group shadow-xl shadow-primary/20" asChild>
                <Link href="/works">
                  Ver mis proyectos <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg font-headline group border-white/10 hover:bg-white/5 transition-all">
                Descargar CV <Download className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </Button>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/5 hover:text-primary transition-colors" asChild>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/5 hover:text-white transition-colors" asChild>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center animate-in fade-in zoom-in duration-1000">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white/5 matte-shadow group transition-all duration-500 hover:rotate-2">
                <Image
                  src={profileImage?.imageUrl || ''}
                  alt={profile.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint="professional portrait"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
