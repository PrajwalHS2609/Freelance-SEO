// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   // Read the country header
//   const country = req.headers.get("x-vercel-ip-country") || "IN";

//   // 🔍 Log it so you can see it in Vercel → Deployments → Logs
//   console.log("COUNTRY =", country);

//   const url = req.nextUrl;

//   // Example redirect logic (adjust as needed)
//   if (country !== "IN" && url.pathname.startsWith("/in")) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/in/:path*"],
// };
