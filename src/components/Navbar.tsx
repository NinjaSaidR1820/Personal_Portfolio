'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Briefcase, Sparkles, Mail, Heart } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: LayoutDashboard },
  { href: '/works', label: 'Works', icon: Briefcase },
  { href: '/skills', label: 'Skills', icon: Sparkles },
  { href: '/hobbies', label: 'Hobbies', icon: Heart },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={cn(
      "fixed left-1/2 -translate-x-1/2 z-50 bg-background/90 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-1 w-auto max-w-[95vw] transition-all duration-300",
      "bottom-6 sm:bottom-auto sm:top-6" // Abajo en móvil, Arriba en escritorio
    )}>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-bold transition-all duration-300 whitespace-nowrap",
              isActive 
                ? "bg-primary text-white shadow-lg shadow-primary/20" 
                : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
            )}
          >
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className={cn(
              "hidden sm:inline",
              isActive && "inline" // Mostrar siempre el texto si está activo para mejor UX
            )}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
