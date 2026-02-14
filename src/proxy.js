import { NextResponse } from 'next/server'

export function proxy(request) { 

  const isLoggedIn = request.cookies.get('auth')?.value === 'true';

  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/booking")) {
  
    const loginUrl = new URL('/login', request.url)
    
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next() 
}

export const config = {
  matcher: '/booking/:path*',
}