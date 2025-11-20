import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  // If path already starts with /in/, do nothing
  if (url.pathname.startsWith("/in")) {
    return NextResponse.next();
  }

  // Skip files like images, css, js, etc.
  if (url.pathname.includes(".") || url.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  // Redirect EVERY non-country URL to /in/<path>
  url.pathname = `/in${url.pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
};
