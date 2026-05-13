"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const [error, setError] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")

    const form = new FormData(e.currentTarget)
    const res = await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirect: false,
    })

    if (res?.error) {
      setError("Credenciales inválidas")
    } else {
      router.push("/admin")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
      )}
      <div>
        <label htmlFor="email" className="block text-sm text-muted-foreground mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-primary/50"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm text-muted-foreground mb-1">Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-foreground text-sm focus:outline-none focus:border-primary/50"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all"
      >
        Ingresar
      </button>
    </form>
  )
}
