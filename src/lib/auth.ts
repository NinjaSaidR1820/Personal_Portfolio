import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import { prisma } from "@/lib/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null

        const email = credentials.email as string
        const password = credentials.password as string

        const admin = await prisma.admin.findUnique({ where: { email } })
        if (!admin) return null

        const isValid = await compare(password, admin.passwordHash)
        if (!isValid) return null

        return { id: admin.id, email: admin.email, name: admin.name }
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    authorized: async ({ auth: session }) => {
      return !!session?.user
    },
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
})
