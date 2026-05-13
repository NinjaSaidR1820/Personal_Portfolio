import LoginForm from "./LoginForm"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[hsl(240,10%,4%)] flex items-center justify-center">
      <div className="w-full max-w-sm p-8 border border-white/5 bg-white/[0.02] rounded-2xl">
        <h1 className="text-2xl font-bold text-foreground mb-2 text-center">Admin Panel</h1>
        <p className="text-muted-foreground text-sm mb-8 text-center">Ingresa tus credenciales</p>
        <LoginForm />
      </div>
    </div>
  )
}
