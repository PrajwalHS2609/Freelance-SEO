import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Extend NextRequest type to fix geo TypeScript error
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
  const { pathname } = url;

  // 🔥 Skip assets and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/static")
  ) {
    return NextResponse.next();
  }

  // 🔥 Allowed country prefixes
  const allowedCountries = ["in", "de", "ae", "us", "uk", "ca"];

  const firstSegment = pathname.split("/")[1];

  // 🔥 If path already starts with a valid country → allow
  if (allowedCountries.includes(firstSegment)) {
    return NextResponse.next();
  }

  // 🔥 Detect user's country
  let country = req.geo?.country?.toLowerCase() || "in";

  // Convert GB → UK
  if (country === "gb") country = "uk";

  // If unsupported country → default to IN
  if (!allowedCountries.includes(country)) {
    country = "in";
  }

  // 🔥 If visiting root domain → redirect to /country
  if (pathname === "/") {
    url.pathname = `/${country}`;
    return NextResponse.redirect(url);
  }

  // 🔥 For any other page → prefix country
  url.pathname = `/${country}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/:path*",
};
