import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  
  // Allow access to these paths without auth check
  if (
    pathname.includes("/api/auth") ||
    pathname.includes("/admin/login") ||
    pathname === "/admin"
  ) {
    return NextResponse.next()
  }
  
  // For other admin paths, require authentication
  if (pathname.startsWith("/admin/")) {
    const cookieHeader = req.headers.get("cookie") || ""
    const hasSessionCookie = 
      cookieHeader.includes("next-auth.session-token") || 
      cookieHeader.includes("authjs.session-token") ||
      cookieHeader.includes("__Secure-authjs.session-token")
    
    if (!hasSessionCookie) {
      const loginUrl = new URL("/admin/login", req.url)
      return NextResponse.redirect(loginUrl)
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}