import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { signOutAdmin } from "./actions"
import { Home, Briefcase, FolderKanban, Award, BarChart3, ImageIcon, LogOut, User } from "lucide-react"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: Home },
  { href: "/admin/profile", label: "Perfil", icon: User },
  { href: "/admin/experiences", label: "Experiencias", icon: Briefcase },
  { href: "/admin/projects", label: "Proyectos", icon: FolderKanban },
  { href: "/admin/certifications", label: "Certificaciones", icon: Award },
  { href: "/admin/skills", label: "Habilidades", icon: BarChart3 },
  { href: "/admin/images", label: "Imágenes", icon: ImageIcon },
]

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session) redirect("/admin/login")

  return (
    <div className="min-h-screen bg-[hsl(240,10%,4%)] flex">
      <aside className="w-64 border-r border-white/5 bg-white/[0.02] p-6 flex flex-col">
        <div className="mb-8">
          <h1 className="text-lg font-bold text-foreground">Admin Panel</h1>
          <p className="text-xs text-muted-foreground mt-1">{session.user?.name}</p>
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>
        <form action={signOutAdmin} className="mt-auto">
          <button type="submit" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all w-full">
            <LogOut className="w-4 h-4" />
            Cerrar Sesión
          </button>
        </form>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}
