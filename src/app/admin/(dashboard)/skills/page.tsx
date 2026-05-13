"use client"

import { useState, useEffect } from "react"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { ModalPortal } from "@/components/admin/ModalPortal"

interface Skill { id: string; name: string }
interface Category { id: string; title: string; icon: string; className: string | null; order: number; skills: Skill[] }

const iconOptions = ["Code2", "Database", "Shield", "Terminal", "Globe", "BarChart3", "Code"]

export default function SkillsPage() {
  const [items, setItems] = useState<Category[]>([])
  const [editing, setEditing] = useState<Category | null>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => { fetch("/api/admin/skills").then(r => r.json()).then(setItems) }, [])

  async function save(data: Partial<Category>) {
    const method = editing ? "PUT" : "POST"
    const res = await fetch("/api/admin/skills", {
      method, headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing ? { ...data, id: editing.id } : data),
    })
    if (res.ok) { setShowForm(false); setEditing(null); fetch("/api/admin/skills").then(r => r.json()).then(setItems) }
  }

  async function remove(id: string) {
    if (!confirm("¿Eliminar?")) return
    await fetch("/api/admin/skills", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
    fetch("/api/admin/skills").then(r => r.json()).then(setItems)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">Habilidades</h2>
        <button onClick={() => { setEditing(null); setShowForm(true) }} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90">
          <Plus className="w-4 h-4" /> Nueva Categoría
        </button>
      </div>

      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="p-4 border border-white/5 bg-white/[0.02] rounded-xl flex items-center justify-between">
            <div>
              <p className="text-foreground font-bold">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.skills.map(s => s.name).join(", ")}</p>
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

      {showForm && <SkillsForm initial={editing} onSave={save} onClose={() => setShowForm(false)} />}
    </div>
  )
}

function SkillsForm({ initial, onSave, onClose }: { initial: Category | null; onSave: (d: Partial<Category>) => void; onClose: () => void }) {
  const [form, setForm] = useState({ title: initial?.title || "", icon: initial?.icon || "Code2", className: initial?.className || "", order: initial?.order ?? 0, skills: initial?.skills.map(s => s.name).join("\n") || "" })

  return (
    <ModalPortal>
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]" onClick={onClose}>
      <div className="bg-[hsl(240,10%,8%)] border border-white/5 rounded-2xl p-8 w-full max-w-lg" onClick={e => e.stopPropagation()}>
        <h3 className="text-lg font-bold text-foreground mb-6">{initial ? "Editar" : "Nueva"} Categoría</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Título</label>
            <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-primary/50" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Icono</label>
            <select value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-primary/50">
              {iconOptions.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Orden</label>
            <input type="number" value={form.order} onChange={e => setForm({ ...form, order: parseInt(e.target.value) || 0 })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-primary/50" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Habilidades (una por línea)</label>
            <textarea value={form.skills} onChange={e => setForm({ ...form, skills: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm min-h-[120px] focus:outline-none focus:border-primary/50" />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={() => onSave({ ...form, className: form.className || undefined, skills: form.skills.split("\n").filter(Boolean) })}
            className="px-6 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90">Guardar</button>
          <button onClick={onClose} className="px-6 py-2 bg-white/5 text-muted-foreground rounded-xl text-sm hover:text-foreground">Cancelar</button>
        </div>
      </div>
    </div>
    </ModalPortal>
  )
}
