import { Certification, Education } from '@/types';

export const certifications: Certification[] = [
  {
    title: 'CS50x: Intro to Computer Science',
    issuer: 'Harvard University',
    details: 'Fundamentos sólidos en algoritmos, estructuras de datos y lógica.',
  },
  {
    title: 'Data Analysis Professional',
    issuer: 'IBM',
    details: 'Dominio en limpieza, visualización y análisis estadístico de datos.',
  },
  {
    title: 'Pentesting & Offensive Security',
    issuer: 'NicaSecurity',
    details: 'Seguridad ofensiva, reconocimiento de redes y auditoría.',
  },
];

export const education: Education = {
  degree: 'Ing. en Sistemas',
  institution: 'Univ. Nacional de Ingeniería',
};
