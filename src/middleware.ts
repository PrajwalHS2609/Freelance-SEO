import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Fix TypeScript type for geo
declare module "next/server" {
  interface NextRequest {
    geo?: {
      country?: string;
      region?: string;
      city?: string;
    };
  }
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Skip all Next.js internal and static assets
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/favicon") ||
    url.pathname.startsWith("/robots") ||
    url.pathname.startsWith("/sitemap") ||
    url.pathname.startsWith("/static") ||
    url.pathname.startsWith("/images") ||
    url.pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Detect user's country
  const country = req.geo?.country?.toLowerCase() || "in";

  const first = url.pathname.split("/")[1];

  // Allow if already in /in /de /ae
  if (["in", "de", "ae"].includes(first)) {
    return NextResponse.next();
  }

  // Root redirect
  if (url.pathname === "/") {
    url.pathname = `/${country}`;
    return NextResponse.redirect(url);
  }

  // Auto-prefix content pages
  url.pathname = `/${country}${url.pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/:path*",
};
