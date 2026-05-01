
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-6">Get in Touch</h2>
        <h3 className="text-4xl md:text-6xl font-black font-headline mb-12">Let's build something <br/><span className="text-accent">legendary</span> together.</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-left max-w-2xl mx-auto">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-bold text-foreground mb-1 font-headline">Email</span>
            <a href="mailto:hello@devforge.io" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">hello@devforge.io</a>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <span className="text-sm font-bold text-foreground mb-1 font-headline">Call</span>
            <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">+1 (234) 567-890</a>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-bold text-foreground mb-1 font-headline">Location</span>
            <span className="text-muted-foreground font-body text-sm text-center md:text-left">San Francisco, CA</span>
          </div>
        </div>

        <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-10 py-8 text-xl font-headline group">
          Contact Me <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
