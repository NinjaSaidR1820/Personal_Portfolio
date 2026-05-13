import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import { hash } from "bcryptjs";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL not set");

const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  await prisma.profile.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      name: "Denis Said Rivas Sánchez",
      title: "Ingeniero de Sistemas, Developer & IT Support Analista",
      tagline: "Transformo datos y código en soluciones tecnológicas que impulsan resultados.",
      bio: "Egresado de la UNI. Combino mi pasión por el desarrollo de software, la ciberseguridad y el análisis de datos para construir infraestructuras sólidas y aplicaciones eficientes.",
      email: "saidrivas2022@hotmail.com",
      phone: "+505 8113 8759",
      location: "Managua, Nicaragua",
      linkedin: "https://linkedin.com/in/tu-perfil",
      github: "https://github.com/NinjaSaidR1820",
      education: "Ing. en Sistemas",
      university: "Univ. Nacional de Ingeniería",
    },
  });

  const exp1 = await prisma.experience.create({
    data: {
      role: "IT Support & Operaciones",
      company: "Banco de Finanzas (BDF)",
      period: "Enero 2025 - Diciembre 2025",
      location: "Managua, Nicaragua",
      type: "Corporativo",
      description: "Aseguré la estabilidad tecnológica de la institución financiera.",
      bullets: {
        create: [
          { content: "Administración de Active Directory y gestión de identidades corporativas." },
          { content: "Soporte remoto especializado (RDP, TeamViewer, EndpointCentral)." },
          { content: "Configuración y aseguramiento de estaciones de trabajo (Imaging & Hardening)." },
          { content: "Monitoreo de alertas de seguridad y apoyo en funciones básicas de SOC." },
          { content: "Gestión de incidencias mediante Jira y Aranda Software bajo estándares SLA." },
        ],
      },
    },
  });

  const exp2 = await prisma.experience.create({
    data: {
      role: "Desarrollador de Software & Analista",
      company: "Proyecto Clínica Farmacéutica El Ángel",
      period: "Marzo 2023 - Julio 2023",
      location: "Managua, Nicaragua",
      type: "Proyectos Personales",
      description: "Lideré el ciclo de vida del software clínico.",
      bullets: {
        create: [
          { content: "Desarrollo de sistema de escritorio para gestión médica y farmacéutica." },
          { content: "Implementación de procesos ETL y modelos de datos con SQL Server." },
          { content: "Creación de Dashboards interactivos en Power BI para toma de decisiones." },
          { content: "Optimización del 60% en tiempos de atención mediante automatización." },
          { content: "Ganador del 2.º Lugar en la Feria Nacional de Ciencia y Tecnología." },
        ],
      },
    },
  });

  await prisma.certification.createMany({
    data: [
      { title: "CS50x: Intro to Computer Science", issuer: "Harvard University", details: "Fundamentos sólidos en algoritmos, estructuras de datos y lógica." },
      { title: "Data Analysis Professional", issuer: "IBM", details: "Dominio en limpieza, visualización y análisis estadístico de datos." },
      { title: "Pentesting & Offensive Security", issuer: "NicaSecurity", details: "Seguridad ofensiva, reconocimiento de redes y auditoría." },
    ],
  });

  await prisma.education.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      degree: "Ing. en Sistemas",
      institution: "Univ. Nacional de Ingeniería",
    },
  });

  const cats = [
    { title: "Desarrollo Web", icon: "Code2", className: "hover:bg-primary/10" },
    { title: "Bases de Datos", icon: "Database", className: "hover:bg-secondary/10" },
    { title: "Ciberseguridad", icon: "Shield", className: "hover:bg-accent/10" },
    { title: "DevOps & Tools", icon: "Terminal", className: "hover:bg-green-500/10" },
  ];

  const catSkills = [
    ["React/Next.js", "TypeScript", "Node.js", "Tailwind CSS", "HTML/CSS"],
    ["SQL Server", "MySQL", "PostgreSQL", "Power BI"],
    ["Pentesting", "Network Security", "SOC Basics", "Auditorías"],
    ["Git", "Linux", "Docker", "Vercel", "Firebase"],
  ];

  for (let i = 0; i < cats.length; i++) {
    const cat = await prisma.skillCategory.create({
      data: { title: cats[i].title, icon: cats[i].icon, className: cats[i].className, order: i },
    });
    await prisma.skill.createMany({
      data: catSkills[i].map(name => ({ name, categoryId: cat.id })),
    });
  }

  await prisma.project.create({
    data: {
      title: "Clínica Farmacéutica El Ángel",
      number: "01",
      description: "Sistema clínico integral con dashboards de analytics.",
      challenge: "Optimizar el flujo de atención en una clínica pharmacy.",
      impact: "Reducción del 60% en tiempos de atención.",
      technologies: ["React", "Node.js", "SQL Server", "Power BI", "TypeScript"],
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      isFeatured: true,
      award: "2do Lugar - Feria Nacional de Ciencia y Tecnología",
    },
  });

  const services = [
    { title: "Desarrollo a Medida", description: "Construcción de software escalable y eficiente enfocado en optimizar procesos de negocio.", color: "hover:border-secondary/50", icon: "Code" },
    { title: "Soporte IT Corporativo", description: "Administración de infraestructura crítica, Active Directory y seguridad de endpoints en sector bancario.", color: "hover:border-accent/50", icon: "Database" },
    { title: "Análisis de Datos", description: "Transformación de datos crudos en dashboards accionables con Power BI para la toma de decisiones.", color: "hover:border-primary/50", icon: "BarChart3" },
  ];

  for (let i = 0; i < services.length; i++) {
    await prisma.service.create({
      data: { title: services[i].title, description: services[i].description, color: services[i].color, icon: services[i].icon, order: i },
    });
  }

  const passwordHash = await hash("admin123", 12)
  await prisma.admin.upsert({
    where: { email: "saidrivas2022@hotmail.com" },
    update: { passwordHash },
    create: {
      email: "saidrivas2022@hotmail.com",
      passwordHash,
      name: "Denis Said Rivas Sánchez",
    },
  })

  console.log("Database seeded successfully!");
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => { pool.end(); });
