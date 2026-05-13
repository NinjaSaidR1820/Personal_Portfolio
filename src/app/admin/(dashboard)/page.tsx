import { prisma } from "@/lib/db"
import { Briefcase, FolderKanban, Award, BarChart3, ImageIcon, ServiceIcon } from "lucide-react"

async function getCounts() {
  const [experiences, projects, certifications, skillCategories, images] = await Promise.all([
    prisma.experience.count(),
    prisma.project.count(),
    prisma.certification.count(),
    prisma.skillCategory.count(),
    prisma.image.count(),
  ])
  return { experiences, projects, certifications, skillCategories, images }
}

const cards = [
  { label: "Experiencias", key: "experiences", icon: Briefcase, color: "text-accent" },
  { label: "Proyectos", key: "projects", icon: FolderKanban, color: "text-primary" },
  { label: "Certificaciones", key: "certifications", icon: Award, color: "text-secondary" },
  { label: "Habilidades", key: "skillCategories", icon: BarChart3, color: "text-green-400" },
  { label: "Imágenes", key: "images", icon: ImageIcon, color: "text-purple-400" },
] as const

export default async function AdminDashboard() {
  const counts = await getCounts()

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-8">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <div key={card.key} className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-white/5 ${card.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-3xl font-black text-foreground">{counts[card.key as keyof typeof counts]}</p>
                  <p className="text-sm text-muted-foreground">{card.label}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
