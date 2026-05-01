
import { Hero } from '@/components/sections/Hero';
import { AboutMe } from '@/components/sections/AboutMe';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      
      <footer className="py-12 border-t border-border/50 bg-background text-center">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground text-sm font-body">
            &copy; {new Date().getFullYear()} Denis Said Rivas | Ingeniería en Sistemas. Construido con Next.js & IA.
          </p>
        </div>
      </footer>
    </main>
  );
}
