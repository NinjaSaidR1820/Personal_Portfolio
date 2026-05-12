import { BarChart3, Database, Code } from 'lucide-react';
import { Project, Service } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projectAngelImage = PlaceHolderImages.find(img => img.id === 'project-angel')?.imageUrl || '';

export const featuredProject: Project = {
  id: 'clinica-el-angel',
  title: 'Sistema Integral Clínica El Ángel',
  number: '01',
  description: 'Sistema Integral de Gestión Clínica',
  challenge: 'Modernizar la gestión de pacientes, recetas e inventarios médicos que generaban cuellos de botella críticos.',
  impact: 'Reducción del 60% en tiempos de atención y trazabilidad total mediante procesos automatizados.',
  technologies: ['Power BI', 'SQL Server', 'ETL', 'DataCube', 'C#'],
  imageUrl: projectAngelImage,
  isFeatured: true,
  award: 'Feria Nacional 2023',
};

export const services: Service[] = [
  {
    icon: <BarChart3 className="w-10 h-10 text-primary mb-6" />,
    title: 'Análisis de Datos',
    description: 'Transformación de datos crudos en dashboards accionables con Power BI para la toma de decisiones.',
    color: 'hover:border-primary/50',
  },
  {
    icon: <Database className="w-10 h-10 text-accent mb-6" />,
    title: 'Soporte IT Corporativo',
    description: 'Administración de infraestructura crítica, Active Directory y seguridad de endpoints en sector bancario.',
    color: 'hover:border-accent/50',
  },
  {
    icon: <Code className="w-10 h-10 text-secondary mb-6" />,
    title: 'Desarrollo a Medida',
    description: 'Construcción de software escalable y eficiente enfocado en optimizar procesos de negocio.',
    color: 'hover:border-secondary/50',
  },
];
