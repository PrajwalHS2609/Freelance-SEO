import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const allowedPrefixes = ["in", "ae", "de"];
  const firstSegment = pathname.split("/")[1];

  if (allowedPrefixes.includes(firstSegment)) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = `/in${pathname}`;
  return NextResponse.redirect(url);

}

export const config = {
  matcher: ["/((?!_next|.*\\..*|favicon.ico).*)"],
  
};