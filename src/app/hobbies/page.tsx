'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Music, Camera, Trophy, Star, Heart, Quote } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const achievements = [
  {
    title: 'Excelencia Académica',
    description: 'Graduado con Honores en el bachillerato, reflejando mi compromiso y disciplina desde mis inicios.',
    icon: <Trophy className="w-6 h-6 text-primary" />
  },
  {
    title: 'Ganador Feria Nacional 2023',
    description: '2.º Lugar en la categoría de Tecnología e Innovación con el Proyecto Clínica El Ángel.',
    icon: <Star className="w-6 h-6 text-accent" />
  }
];

const hobbies = [
  {
    id: 'hobby-guitar',
    title: 'Pasión por la Música',
    description: 'Tocar la guitarra es mi forma de desconectar y encontrar inspiración. La música y el código comparten una estructura lógica y creativa única.',
    icon: <Music className="w-6 h-6 text-secondary" />
  },
  {
    id: 'hobby-achievement',
    title: 'Logros y Crecimiento',
    description: 'Me apasiona aprender cosas nuevas constantemente, ya sea en tecnología o en retos personales fuera de la pantalla.',
    icon: <Heart className="w-6 h-6 text-primary" />
  }
];

export default function HobbiesPage() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-20 text-center">
          <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Fuera del Código</h2>
          <h3 className="text-4xl md:text-6xl font-black font-headline mb-8">Mis Pasiones & Logros</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            No todo es tecnología. Aquí comparto un poco más sobre quién soy fuera del entorno profesional.
          </p>
        </div>

        {/* Sección Logros */}
        <div className="mb-24">
          <h4 className="text-2xl font-black font-headline mb-8 flex items-center gap-3">
            <Trophy className="text-primary" /> Logros Personales
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, idx) => (
              <Card key={idx} className="p-8 bg-white/[0.02] border-white/5 hover:border-primary/50 transition-all">
                <div className="p-3 bg-white/5 rounded-2xl w-fit mb-6">
                  {item.icon}
                </div>
                <h5 className="text-xl font-black font-headline mb-3">{item.title}</h5>
                <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Sección Hobbies con Fotos */}
        <div className="space-y-12">
          <h4 className="text-2xl font-black font-headline mb-8 flex items-center gap-3">
            <Heart className="text-primary" /> Mis Hobbies
          </h4>
          
          <div className="grid grid-cols-1 gap-12">
            {hobbies.map((hobby, idx) => {
              const hobbyImage = PlaceHolderImages.find(img => img.id === hobby.id);
              return (
                <Card key={idx} className="overflow-hidden bg-white/[0.02] border-white/5 group">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative aspect-video lg:aspect-auto h-full min-h-[300px] overflow-hidden">
                      <Image
                        src={hobbyImage?.imageUrl || ''}
                        alt={hobby.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        data-ai-hint={hobbyImage?.imageHint || 'lifestyle photography'}
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="p-3 bg-white/5 rounded-2xl w-fit mb-6">
                        {hobby.icon}
                      </div>
                      <h5 className="text-3xl font-black font-headline mb-6">{hobby.title}</h5>
                      <p className="text-lg text-muted-foreground font-body leading-relaxed">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                </Card>
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