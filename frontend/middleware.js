// No imports needed! We use standard Web APIs supported natively by Vercel Edge.

export function middleware(request) {
  // 1. Parse the incoming URL
  const url = new URL(request.url);
  const { pathname } = url;

  // 2. Target protected paths, ignoring the login screen
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Check if the cookie exists natively using the request headers
    const cookieHeader = request.headers.get('cookie') || '';
    const hasAdminToken = cookieHeader.includes('sb-access-token');

    if (!hasAdminToken) {
      console.log(`🔒 [Middleware Protected] Redirecting unauthorized request for ${pathname} to Login.`);
      
      // Construct an absolute redirection URL to /admin/login
      url.pathname = '/admin/login';
      return Response.redirect(url.toString(), 307);
    }
  }

  // Allow the request to pass through cleanly to your static React assets
  return; 
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};