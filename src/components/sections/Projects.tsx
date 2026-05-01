
import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 1,
    title: 'Nexus Analytics',
    description: 'Real-time data streaming and visualization engine built for enterprise scale.',
    tags: ['Next.js', 'Go', 'Redis'],
    image: PlaceHolderImages[0],
  },
  {
    id: 2,
    title: 'Cipher Shield',
    description: 'Advanced end-to-end encryption layer for cloud-native applications.',
    tags: ['Rust', 'AWS', 'Security'],
    image: PlaceHolderImages[1],
  },
  {
    id: 3,
    title: 'Quantum Commerce',
    description: 'Hyper-personalized shopping experience powered by machine learning.',
    tags: ['TypeScript', 'Tailwind', 'Python'],
    image: PlaceHolderImages[2],
  },
];

export function Projects() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-secondary font-headline font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black font-headline text-foreground">Featured Creations</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-500 rounded-3xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  width={600}
                  height={450}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint={project.image.imageHint}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-tighter px-2 py-0.5 bg-muted rounded-md text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <Button variant="link" className="p-0 h-auto text-accent font-bold group-hover:translate-x-1 transition-transform">
                  Explore Details <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}

          {/* Future Project Placeholder */}
          <Card className="flex flex-col items-center justify-center p-12 border-dashed border-2 bg-muted/20 group hover:bg-muted/30 transition-colors rounded-3xl">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:animate-pulse">
              <span className="text-2xl font-headline font-bold text-muted-foreground">+</span>
            </div>
            <p className="text-muted-foreground font-headline font-medium">Coming Soon</p>
            <p className="text-xs text-muted-foreground/60 mt-2 text-center italic font-body">Next big thing is in the forge...</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
