"use client"

import { useState, useEffect } from "react"
import { Plus, Pencil, Trash2 } from "lucide-react"

interface Certification { id: string; title: string; issuer: string; details: string; date: string | null }

export default function CertificationsPage() {
  const [items, setItems] = useState<Certification[]>([])
  const [editing, setEditing] = useState<Certification | null>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => { fetch("/api/admin/certifications").then(r => r.json()).then(setItems) }, [])

  async function save(data: Partial<Certification>) {
    const method = editing ? "PUT" : "POST"
    const res = await fetch("/api/admin/certifications", {
      method, headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing ? { ...data, id: editing.id } : data),
    })
    if (res.ok) { setShowForm(false); setEditing(null); fetch("/api/admin/certifications").then(r => r.json()).then(setItems) }
  }

  async function remove(id: string) {
    if (!confirm("¿Eliminar?")) return
    await fetch("/api/admin/certifications", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
    fetch("/api/admin/certifications").then(r => r.json()).then(setItems)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">Certificaciones</h2>
        <button onClick={() => { setEditing(null); setShowForm(true) }} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90">
          <Plus className="w-4 h-4" /> Nueva
        </button>
      </div>

      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="p-4 border border-white/5 bg-white/[0.02] rounded-xl flex items-center justify-between">
            <div>
              <p className="text-foreground font-bold">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.issuer}{item.date ? ` · ${item.date}` : ""}</p>
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

      {showForm && <CertificationForm initial={editing} onSave={save} onClose={() => setShowForm(false)} />}
    </div>
  )
}

function CertificationForm({ initial, onSave, onClose }: { initial: Certification | null; onSave: (d: Partial<Certification>) => void; onClose: () => void }) {
  const [form, setForm] = useState({ title: initial?.title || "", issuer: initial?.issuer || "", details: initial?.details || "", date: initial?.date || "" })

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[hsl(240,10%,8%)] border border-white/5 rounded-2xl p-8 w-full max-w-lg" onClick={e => e.stopPropagation()}>
        <h3 className="text-lg font-bold text-foreground mb-6">{initial ? "Editar" : "Nueva"} Certificación</h3>
        <div className="space-y-4">
          {["title", "issuer", "details", "date"].map(f => (
            <div key={f}>
              <label className="block text-sm text-muted-foreground mb-1 capitalize">{f}</label>
              <input value={form[f as keyof typeof form]} onChange={e => setForm({ ...form, [f]: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-primary/50" />
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={() => onSave(form)} className="px-6 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90">Guardar</button>
          <button onClick={onClose} className="px-6 py-2 bg-white/5 text-muted-foreground rounded-xl text-sm hover:text-foreground">Cancelar</button>
        </div>
      </div>
    </div>
  )
}
