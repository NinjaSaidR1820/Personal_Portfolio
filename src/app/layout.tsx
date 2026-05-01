import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Denis Said Rivas | Ingeniero en Sistemas, Desarrollador & Especialista IT',
  description: 'Portafolio de Denis Said Rivas, egresado de Ingeniería en Sistemas en Nicaragua. Experiencia en desarrollo de software, análisis de datos con Power BI, soporte técnico y ciberseguridad.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent/30 selection:text-accent-foreground pb-32">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
