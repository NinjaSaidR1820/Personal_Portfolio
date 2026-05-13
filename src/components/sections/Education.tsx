
import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { certifications, education } from '@/data';

export function Education() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Educación</h2>
            <h3 className="text-4xl font-black font-headline mb-6 text-foreground">Aprendizaje Continuo</h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Mi formación académica en la UNI se complementa con certificaciones internacionales rigurosas para mantenerme a la vanguardia.
            </p>
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-2xl border border-border">
              <GraduationCap className="w-10 h-10 text-accent" />
              <div>
                <span className="block font-bold">{education.degree}</span>
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">{education.institution}</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-1 gap-4">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="p-6 border-border bg-card rounded-2xl flex items-start gap-6 hover:border-accent/50 transition-colors">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-bold font-headline">{cert.title}</h4>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-sm text-primary font-bold block mb-2">{cert.issuer}</span>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{cert.details}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
