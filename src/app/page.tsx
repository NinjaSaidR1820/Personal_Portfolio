
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-12 border-t border-border/50 bg-background text-center">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground text-sm font-body">
            &copy; {new Date().getFullYear()} DevForge Portfolio. Built with Next.js & AI.
          </p>
        </div>
      </footer>
    </main>
  );
}
