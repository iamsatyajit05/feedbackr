import { NextResponse } from 'next/server';

export function middleware() {
  const res = NextResponse.next();

  res.headers.append('Access-Control-Allow-Origin', '*');
  res.headers.append('Access-Control-Allow-Methods', 'POST');
  res.headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return res;
}

export const config = {
  matcher: '/api/feedback',
};
