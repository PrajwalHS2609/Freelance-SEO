import { NextResponse } from "next/server";

const COUNTRY_MAP = {
  IN: "in",   // India
  AE: "ae",   // UAE
};

export function middleware(req) {
  const { nextUrl, geo } = req;

  // Only redirect homepage "/", not other pages
  if (nextUrl.pathname === "/") {
    const countryCode = geo?.country || "IN";        // fallback India
    const country = COUNTRY_MAP[countryCode] || "in"; // fallback

    return NextResponse.redirect(`${nextUrl.origin}/${country}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],  // apply only on homepage
};
