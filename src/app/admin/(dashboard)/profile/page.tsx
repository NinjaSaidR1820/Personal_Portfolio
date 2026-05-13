"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "", title: "", tagline: "", bio: "", email: "", phone: "",
    location: "", linkedin: "", github: "", education: "", university: "",
  })
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")
  const router = useRouter()

  useEffect(() => {
    fetch("/api/admin/profile").then(r => r.json()).then(d => { if (d) setForm(d) })
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setMessage("")
    const res = await fetch("/api/admin/profile", {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
    })
    if (res.ok) { setMessage("Guardado exitosamente"); router.refresh() }
    else setMessage("Error al guardar")
    setSaving(false)
  }

  const fields = [
    { label: "Nombre", key: "name" },
    { label: "Título", key: "title" },
    { label: "Tagline", key: "tagline" },
    { label: "Bio", key: "bio", textarea: true },
    { label: "Email", key: "email", type: "email" },
    { label: "Teléfono", key: "phone" },
    { label: "Ubicación", key: "location" },
    { label: "LinkedIn URL", key: "linkedin" },
    { label: "GitHub URL", key: "github" },
    { label: "Educación", key: "education" },
    { label: "Universidad", key: "university" },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-8">Editar Perfil</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
        {fields.map(f => (
          <div key={f.key}>
            <label className="block text-sm text-muted-foreground mb-1">{f.label}</label>
            {f.textarea ? (
              <textarea value={form[f.key as keyof typeof form]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm min-h-[100px] focus:outline-none focus:border-primary/50" />
            ) : (
              <input type={f.type || "text"} value={form[f.key as keyof typeof form]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-primary/50" />
            )}
          </div>
        ))}
        {message && <p className={`text-sm ${message.includes("Error") ? "text-red-400" : "text-green-400"}`}>{message}</p>}
        <button type="submit" disabled={saving}
          className="px-8 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50">
          {saving ? "Guardando..." : "Guardar Cambios"}
        </button>
      </form>
    </div>
  )
}
