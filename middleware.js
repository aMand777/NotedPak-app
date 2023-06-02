import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/notes', '/create'],
};

export function middleware(request) {
  // const { pathname } = request.nextUrl;

  const isLogin = request.cookies.get('token');

  if (!isLogin) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}
