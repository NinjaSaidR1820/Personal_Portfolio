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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-xl border border-border/50 p-2 rounded-full shadow-2xl flex items-center gap-1 w-[90%] max-w-fit">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300",
              isActive 
                ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}