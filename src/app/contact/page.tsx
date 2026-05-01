import React from 'react';
import { Contact } from '@/components/sections/Contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
      <footer className="py-16 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground text-sm font-body">
            &copy; {new Date().getFullYear()} Denis Said Rivas Sánchez | Ingeniería de Sistemas. Managua, Nicaragua.
          </p>
        </div>
      </footer>
    </main>
  );
}