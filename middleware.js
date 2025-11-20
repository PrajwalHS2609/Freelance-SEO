import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  // If URL already starts with /in → allow
  if (url.pathname.startsWith("/in")) {
    return NextResponse.next();
  }

  // Skip static files
  if (url.pathname.startsWith("/_next") || url.pathname.includes(".")) {
    return NextResponse.next();
  }

  // Redirect all others
  url.pathname = `/in${url.pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
};
