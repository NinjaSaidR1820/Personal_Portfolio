"use client"

import { useState, useEffect } from "react"
import { Plus, Pencil, Trash2 } from "lucide-react"

interface Bullet { id: string; content: string }
interface Experience { id: string; role: string; company: string; period: string; location: string; type: string; description: string; bullets: Bullet[] }

export default function ExperiencesPage() {
  const [items, setItems] = useState<Experience[]>([])
  const [editing, setEditing] = useState<Experience | null>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => { fetch("/api/admin/experiences").then(r => r.json()).then(setItems) }, [])

  async function save(data: Partial<Experience>) {
    const method = editing ? "PUT" : "POST"
    const res = await fetch("/api/admin/experiences", {
      method, headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing ? { ...data, id: editing.id } : data),
    })
    if (res.ok) { setShowForm(false); setEditing(null); fetch("/api/admin/experiences").then(r => r.json()).then(setItems) }
  }

  async function remove(id: string) {
    if (!confirm("¿Eliminar?")) return
    await fetch("/api/admin/experiences", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
    fetch("/api/admin/experiences").then(r => r.json()).then(setItems)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">Experiencias</h2>
        <button onClick={() => { setEditing(null); setShowForm(true) }} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90">
          <Plus className="w-4 h-4" /> Nueva
        </button>
      </div>

      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="p-4 border border-white/5 bg-white/[0.02] rounded-xl flex items-center justify-between">
            <div>
              <p className="text-foreground font-bold">{item.role}</p>
              <p className="text-sm text-muted-foreground">{item.company} · {item.period}</p>
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

      {showForm && <ExperienceForm initial={editing} onSave={save} onClose={() => setShowForm(false)} />}
    </div>
  )
}

function ExperienceForm({ initial, onSave, onClose }: { initial: Experience | null; onSave: (d: Partial<Experience>) => void; onClose: () => void }) {
  const [form, setForm] = useState({ role: initial?.role || "", company: initial?.company || "", period: initial?.period || "", location: initial?.location || "", type: initial?.type || "Corporativo", description: initial?.description || "", bullets: initial?.bullets.map(b => b.content).join("\n") || "" })

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[hsl(240,10%,8%)] border border-white/5 rounded-2xl p-8 w-full max-w-lg max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <h3 className="text-lg font-bold text-foreground mb-6">{initial ? "Editar" : "Nueva"} Experiencia</h3>
        <div className="space-y-4">
          {["role", "company", "period", "location"].map(f => (
            <div key={f}>
              <label className="block text-sm text-muted-foreground mb-1 capitalize">{f}</label>
              <input value={form[f as keyof typeof form]} onChange={e => setForm({ ...form, [f]: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-primary/50" />
            </div>
          ))}
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Tipo</label>
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-primary/50">
              <option value="Corporativo">Corporativo</option>
              <option value="Proyectos Personales">Proyectos Personales</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Descripción</label>
            <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm min-h-[60px] focus:outline-none focus:border-primary/50" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Bullets (uno por línea)</label>
            <textarea value={form.bullets} onChange={e => setForm({ ...form, bullets: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm min-h-[120px] focus:outline-none focus:border-primary/50" />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={() => onSave({ ...form, bullets: form.bullets.split("\n").filter(Boolean) })}
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
