
import React from 'react';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export function AboutMe() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-secondary font-headline font-bold uppercase tracking-widest text-sm mb-4">Sobre Mí</h2>
            <h3 className="text-4xl md:text-5xl font-black font-headline mb-8 text-foreground leading-tight">
              De la curiosidad técnica a la creación de <span className="text-primary">impacto real.</span>
            </h3>
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Mi viaje en la tecnología comenzó con una premisa simple: entender cómo funcionan los sistemas para hacerlos mejores. Como egresado de la Universidad Nacional de Ingeniería (UNI), he llevado esa curiosidad desde la academia hasta el mundo profesional.
              </p>
              <p>
                He estado en la trinchera del soporte técnico corporativo garantizando la continuidad operativa en el sector financiero, y al mismo tiempo, he liderado desde cero el desarrollo de software para el sector salud.
              </p>
              <p className="font-semibold text-foreground italic border-l-4 border-accent pl-4">
                "Mi enfoque es integral: entiendo la infraestructura que sostiene una aplicación, el código que le da vida y los datos que miden su éxito."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8 bg-card border-border shadow-2xl rounded-3xl relative z-10">
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                <div className="text-right">
                  <span className="block text-4xl font-black text-primary font-headline">60%</span>
                  <span className="text-xs font-bold uppercase text-muted-foreground">Optimización</span>
                </div>
              </div>
              <p className="text-lg font-body leading-relaxed mb-6 italic">
                En el sector salud, logramos optimizar tiempos de atención drásticamente, transformando la experiencia del personal médico y pacientes.
              </p>
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-black text-accent">UNI</div>
                <div>
                  <span className="block font-bold font-headline">Ingeniería en Sistemas</span>
                  <span className="text-sm text-muted-foreground">Egresado UNI, Nicaragua</span>
                </div>
              </div>
            </Card>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent/10 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
