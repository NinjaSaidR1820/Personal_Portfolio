import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Denis Said Rivas Sánchez | Ingeniero de Sistemas, Desarrollador & Especialista IT',
  description: 'Portafolio de Denis Said Rivas Sánchez, egresado de Ingeniería en Sistemas en Nicaragua. Experiencia en desarrollo de software, análisis de datos con Power BI, soporte técnico y ciberseguridad.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary-foreground">
        <Navbar />
        {/* pt-20 para Navbar superior en desktop, pb-32 para Navbar inferior en móvil */}
        <div className="pt-0 sm:pt-20 pb-32 sm:pb-0">
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
