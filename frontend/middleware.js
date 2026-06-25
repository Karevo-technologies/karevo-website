import { NextResponse } from 'next/dist/compiled/edge-runtime';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Protect ALL sub-paths under /admin, but let them visit the login page freely
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const hasAdminToken = request.cookies.has('sb-access-token');

    if (!hasAdminToken) {
      // Forcefully bounce them right to the login screen
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Catch both /admin and any slash nested deep inside /admin/waitlist
  matcher: ['/admin', '/admin/:path*'],
};