"use client"

import { useState, useEffect, useRef } from "react"
import { Upload, Trash2, Copy, Check } from "lucide-react"

interface ImageRecord { id: string; filename: string; category: string; url: string; alt: string | null }

export default function ImagesPage() {
  const [items, setItems] = useState<ImageRecord[]>([])
  const [uploading, setUploading] = useState(false)
  const [category, setCategory] = useState("projects")
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => { fetch("/api/admin/images").then(r => r.json()).then(setItems) }, [])

  async function upload(file: File) {
    setUploading(true)
    const formData = new FormData()
    formData.append("file", file)
    formData.append("category", category)
    const res = await fetch("/api/upload", { method: "POST", body: formData })
    if (res.ok) {
      const img = await res.json()
      setItems(prev => [img, ...prev])
    }
    setUploading(false)
  }

  async function remove(id: string) {
    if (!confirm("¿Eliminar?")) return
    await fetch("/api/admin/images", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
    setItems(prev => prev.filter(i => i.id !== id))
  }

  function copyUrl(url: string, id: string) {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const filtered = items.filter(i => i.category === category)

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">Gestor de Imágenes</h2>
      </div>

      <div className="mb-8 p-6 border border-white/5 bg-white/[0.02] rounded-2xl">
        <div className="flex gap-4 items-end">
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Categoría</label>
            <select value={category} onChange={e => setCategory(e.target.value)}
              className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-primary/50">
              <option value="profile">Perfil</option>
              <option value="projects">Proyectos</option>
              <option value="hobbies">Hobbies</option>
              <option value="certifications">Certificaciones</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Archivo</label>
            <input ref={fileRef} type="file" accept="image/*" onChange={e => { if (e.target.files?.[0]) upload(e.target.files[0]); e.target.value = "" }}
              className="hidden" />
            <button onClick={() => fileRef.current?.click()} disabled={uploading}
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 disabled:opacity-50">
              <Upload className="w-4 h-4" /> {uploading ? "Subiendo..." : "Subir Imagen"}
            </button>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-sm">No hay imágenes en esta categoría</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map(img => (
            <div key={img.id} className="group relative border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden">
              <img src={img.url} alt={img.alt || ""} className="w-full aspect-video object-cover" />
              <div className="p-2">
                <p className="text-xs text-muted-foreground truncate">{img.filename}</p>
              </div>
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => copyUrl(img.url, img.id)}
                  className="p-1.5 bg-black/70 rounded-lg hover:bg-black/90 text-white">
                  {copiedId === img.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button onClick={() => remove(img.id)} className="p-1.5 bg-black/70 rounded-lg hover:bg-black/90 text-red-400">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
