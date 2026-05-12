
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { profile } from '@/data';

export function Contact() {
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-6">Conversión Final</h2>
        <h3 className="text-4xl md:text-6xl font-black font-headline mb-6">¿Tienes un proyecto en mente o buscas <span className="text-accent">talento técnico?</span></h3>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body">
          Ya sea para fortalecer tu infraestructura IT, desarrollar una nueva solución de software, o analizar los datos de tu empresa, estoy listo para aportar valor desde el día uno.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left max-w-4xl mx-auto">
          <Card className="p-6 bg-card border-border rounded-2xl flex flex-col items-center md:items-start">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <span className="text-sm font-bold text-foreground mb-1 font-headline">Correo</span>
            <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary transition-colors font-body">{profile.email}</a>
          </Card>
          
          <Card className="p-6 bg-card border-border rounded-2xl flex flex-col items-center md:items-start">
            <Phone className="w-8 h-8 text-accent mb-4" />
            <span className="text-sm font-bold text-foreground mb-1 font-headline">Teléfono</span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors font-body">{profile.phone}</a>
          </Card>
          
          <Card className="p-6 bg-card border-border rounded-2xl flex flex-col items-center md:items-start">
            <MapPin className="w-8 h-8 text-secondary mb-4" />
            <span className="text-sm font-bold text-foreground mb-1 font-headline">Ubicación</span>
            <span className="text-muted-foreground font-body">{profile.location}</span>
          </Card>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-12 py-10 text-2xl font-black font-headline group shadow-xl shadow-primary/20" asChild>
            <a href={`mailto:${profile.email}`}>
              Enviar un correo <Send className="ml-4 w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
          
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent font-bold transition-colors">
            <Linkedin className="w-5 h-5" /> Conectar en LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
