"use server"

import { signOut } from "@/lib/auth"

export async function signOutAdmin() {
  await signOut({ redirectTo: "/admin/login" })
}
