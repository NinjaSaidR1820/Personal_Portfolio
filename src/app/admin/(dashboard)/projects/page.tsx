"use client"

import { useState, useEffect } from "react"
import { Plus, Pencil, Trash2 } from "lucide-react"

interface Project { id: string; title: string; number: string | null; description: string; challenge: string; impact: string; technologies: string[]; imageUrl: string; isFeatured: boolean; award: string | null }

export default function ProjectsPage() {
  const [items, setItems] = useState<Project[]>([])
  const [editing, setEditing] = useState<Project | null>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => { fetch("/api/admin/projects").then(r => r.json()).then(setItems) }, [])

  async function save(data: Partial<Project>) {
    const method = editing ? "PUT" : "POST"
    const res = await fetch("/api/admin/projects", {
      method, headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing ? { ...data, id: editing.id } : data),
    })
    if (res.ok) { setShowForm(false); setEditing(null); fetch("/api/admin/projects").then(r => r.json()).then(setItems) }
  }

  async function remove(id: string) {
    if (!confirm("¿Eliminar?")) return
    await fetch("/api/admin/projects", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
    fetch("/api/admin/projects").then(r => r.json()).then(setItems)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">Proyectos</h2>
        <button onClick={() => { setEditing(null); setShowForm(true) }} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90">
          <Plus className="w-4 h-4" /> Nuevo
        </button>
      </div>

      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="p-4 border border-white/5 bg-white/[0.02] rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              {item.imageUrl && <img src={item.imageUrl} alt="" className="w-12 h-12 rounded-lg object-cover" />}
              <div>
                <p className="text-foreground font-bold">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.technologies?.join(", ")}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => { setEditing(item); setShowForm(true) }} className="p-2 hover:bg-white/5 rounded-lg text-accent">
                <Pencil className="w-4 h-4" />
              </button>
              <button onClick={() => remove(item.id)} className="p-2 hover:bg-white/5 rounded-lg text-red-400">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && <ProjectForm initial={editing} onSave={save} onClose={() => setShowForm(false)} />}
    </div>
  )
}

function ProjectForm({ initial, onSave, onClose }: { initial: Project | null; onSave: (d: Partial<Project>) => void; onClose: () => void }) {
  const [form, setForm] = useState({ title: initial?.title || "", number: initial?.number || "", description: initial?.description || "", challenge: initial?.challenge || "", impact: initial?.impact || "", technologies: initial?.technologies?.join(", ") || "", imageUrl: initial?.imageUrl || "", isFeatured: initial?.isFeatured || false, award: initial?.award || "" })

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[hsl(240,10%,8%)] border border-white/5 rounded-2xl p-8 w-full max-w-lg max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <h3 className="text-lg font-bold text-foreground mb-6">{initial ? "Editar" : "Nuevo"} Proyecto</h3>
        <div className="space-y-4">
          {["title", "number", "description", "challenge", "impact", "imageUrl", "award"].map(f => (
            <div key={f}>
              <label className="block text-sm text-muted-foreground mb-1 capitalize">{f === "imageUrl" ? "URL de Imagen" : f}</label>
              <input value={form[f as keyof typeof form]} onChange={e => setForm({ ...form, [f]: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-primary/50" />
            </div>
          ))}
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Tecnologías (separadas por coma)</label>
            <input value={form.technologies} onChange={e => setForm({ ...form, technologies: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-primary/50" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.isFeatured} onChange={e => setForm({ ...form, isFeatured: e.target.checked })}
              className="accent-primary" id="featured" />
            <label htmlFor="featured" className="text-sm text-muted-foreground">Proyecto destacado</label>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={() => onSave({ ...form, technologies: form.technologies.split(",").map(t => t.trim()).filter(Boolean) })}
            className="px-6 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90">
            Guardar
          </button>
          <button onClick={onClose} className="px-6 py-2 bg-white/5 text-muted-foreground rounded-xl text-sm hover:text-foreground">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
