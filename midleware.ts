
import { auth } from "./auth"
 
export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth?.user
  

  const ProtectedRoutes = ["/dashboard"]
  

  const isProtectedRoute = ProtectedRoutes.some(route => 
    nextUrl.pathname.startsWith(route)
  )
  

  if (!isLoggedIn && isProtectedRoute) {
    return Response.redirect(new URL("/login", nextUrl))
  }
  

  if (isLoggedIn && nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/dashboard", nextUrl))
  }
  
  return null 
})


export const config = {
  matcher: [
 
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}