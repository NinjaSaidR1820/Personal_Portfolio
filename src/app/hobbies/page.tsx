'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Music, Trophy, Star, Heart, Quote } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const achievements = [
  {
    title: 'Excelencia Académica',
    description: 'Graduado con Honores en el bachillerato, reflejando mi compromiso y disciplina desde mis inicios.',
    icon: <Trophy className="w-6 h-6 text-primary" />
  },
  {
    title: 'Feria Nacional 2023',
    description: 'Reconocimiento en la categoría de Tecnología e Innovación con el Proyecto Clínica El Ángel.',
    icon: <Star className="w-6 h-6 text-accent" />
  }
];

const hobbyGallery = [
  {
    id: 'hobby-guitar',
    title: 'Guitarra Acústica',
    category: 'Música',
    description: 'La música y el código comparten una estructura lógica única. Tocar la guitarra es mi forma de desconectar y crear.',
    icon: <Music className="w-4 h-4" />
  },
  {
    id: 'hobby-achievement',
    title: 'Disciplina & Retos',
    category: 'Crecimiento',
    description: 'La superación constante en proyectos personales me motiva a ser mejor ingeniero cada día.',
    icon: <Trophy className="w-4 h-4" />
  },
  {
    id: 'project-angel',
    title: 'Innovación Social',
    category: 'Impacto',
    description: 'Crear soluciones tecnológicas que tienen un propósito real en la sociedad.',
    icon: <Heart className="w-4 h-4" />
  }
];

export default function HobbiesPage() {
  return (
    <main className="min-h-screen py-24 px-6 pb-32">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Fuera del Código</h2>
          <h3 className="text-4xl md:text-6xl font-black font-headline mb-8">Mis Pasiones & Logros</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Conoce un poco más sobre lo que me motiva a seguir creciendo, más allá de las líneas de código.
          </p>
        </div>

        {/* Sección Logros (El "Tarjetero") */}
        <div className="mb-24">
          <h4 className="text-2xl font-black font-headline mb-8 flex items-center gap-3">
            <Trophy className="text-primary" /> Logros Destacados
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, idx) => (
              <Card key={idx} className="p-8 bg-white/[0.02] border-white/5 hover:border-primary/50 transition-all matte-card">
                <div className="p-3 bg-white/5 rounded-2xl w-fit mb-6">
                  {item.icon}
                </div>
                <h5 className="text-xl font-black font-headline mb-3">{item.title}</h5>
                <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Sección Hobbies Galería de Fotos */}
        <div className="space-y-12">
          <h4 className="text-2xl font-black font-headline mb-8 flex items-center gap-3">
            <Heart className="text-primary" /> Galería de Momentos
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbyGallery.map((hobby, idx) => {
              const galleryImage = PlaceHolderImages.find(img => img.id === hobby.id);
              return (
                <div key={idx} className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02]">
                  <Image
                    src={galleryImage?.imageUrl || ''}
                    alt={hobby.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={galleryImage?.imageHint || 'lifestyle photography'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-primary/20 rounded-lg text-primary">
                        {hobby.icon}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/80">{hobby.category}</span>
                    </div>
                    <h5 className="text-xl font-black font-headline text-white mb-2">{hobby.title}</h5>
                    <p className="text-sm text-zinc-300 font-body leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cierre */}
        <div className="mt-32 text-center p-12 bg-white/[0.02] rounded-[3rem] border border-white/5">
          <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
          <p className="text-2xl font-black font-headline italic mb-4">
            "La disciplina en el arte se traduce en excelencia en la ingeniería."
          </p>
          <span className="text-muted-foreground font-bold">- Denis Said Rivas Sánchez</span>
        </div>
      </div>

      <footer className="py-16 mt-24 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground text-sm font-body">
            &copy; {new Date().getFullYear()} Denis Said Rivas Sánchez | Ingeniería de Sistemas.
          </p>
        </div>
      </footer>
    </main>
  );
}
