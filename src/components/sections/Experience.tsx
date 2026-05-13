import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Briefcase, CheckCircle2, Building2 } from 'lucide-react';
import { getExperiences } from '@/lib/queries';

export async function Experience() {
  const experiences = await getExperiences();
  return (
    <section className="py-24 bg-muted/10 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4">Trayectoria Profesional</h2>
          <h3 className="text-4xl md:text-5xl font-black font-headline text-foreground leading-tight">
            Experiencia en el <span className="text-accent">Mundo Real</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <Card 
              key={idx} 
              className={`p-8 bg-white/[0.02] border-white/5 hover:border-primary/30 transition-all duration-500 matte-card group animate-in fade-in slide-in-from-bottom-8 duration-700`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    {exp.type === 'Corporativo' ? <Building2 className="w-8 h-8 text-primary" /> : <Briefcase className="w-8 h-8 text-accent" />}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-muted-foreground border border-white/5">
                    {exp.type}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-2xl font-black font-headline text-foreground mb-1">{exp.company}</h4>
                  <p className="text-primary font-bold text-lg mb-4">{exp.role}</p>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground font-medium mb-6">
                    <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" /> {exp.period}</div>
                    <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" /> {exp.location}</div>
                  </div>

                  <p className="text-sm text-zinc-400 font-body leading-relaxed mb-6 italic">
                    "{exp.description}"
                  </p>
                </div>

                <div className="space-y-3 mt-auto">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-foreground/70 mb-2">Responsabilidades Clave:</h5>
                  {exp.bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed font-body">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
