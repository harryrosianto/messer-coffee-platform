import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware will run on every request
export function middleware(request: NextRequest) {
    const isLoggedIn = request.cookies.get('auth-token'); // Assuming you store an auth token in cookies

    const url = request.nextUrl.clone();
    const protectedRoutes = ['/farmers-dashboard', '/buyers-dashboard'];

    if (protectedRoutes.includes(url.pathname)) {
        if (!isLoggedIn) {
            url.pathname = '/login'; // Redirect to login if not authenticated
            return NextResponse.redirect(url);
        }
    }
    return NextResponse.next();
}

// Define the routes where the middleware should apply
export const config = {
    matcher: ['/farmers-dashboard', '/buyers-dashboard'],
};
