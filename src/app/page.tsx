
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <Experience />
      <footer className="py-16 border-t border-border/50 bg-background text-center">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground text-sm font-body">
            &copy; {new Date().getFullYear()} Denis Said Rivas | Ingeniero en Sistemas, Developer & IT Support Analista.
          </p>
        </div>
      </footer>
    </main>
  );
}
