import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const role = request.cookies.get('role')?.value;
  const { pathname } = request.nextUrl;

  // Make payment verify a public route so payment provider callbacks aren't blocked
  const publicRoutes = ['/login', '/register', '/payment/verify'];
  const isPublicRoute = pathname === '/' || publicRoutes.some(route => pathname.startsWith(route));

  // If not logged in → send to login
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If logged in and trying to access login/register → redirect based on role
  if (token && (pathname === '/login' || pathname === '/register')) {
    switch (role) {
      case 'super_admin':
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      case 'state_admin':
        return NextResponse.redirect(new URL('/state/dashboard', request.url));
      case 'lga_admin':
      default:
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};