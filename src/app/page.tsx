"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function detectCountry() {
      const currentPath = window.location.pathname;

      // Already inside a country folder → STOP redirect
      const firstSegment = currentPath.split("/")[1];
      const allowedPrefixes = ["in", "ae"];

      if (allowedPrefixes.includes(firstSegment)) {
        return;
      }

      try {
        // Fetch from API (no Vercel interference)
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const country = data.country || "IN";

        const COUNTRY_MAP: Record<string, string> = {
          IN: "in",
          AE: "ae",
        };

        const redirectTo = COUNTRY_MAP[country] || "in";

        // Redirect only if not already correct
        if (firstSegment !== redirectTo) {
          window.location.replace(`/${redirectTo}${currentPath}`);
        }
      } catch {
        // fallback → India
        window.location.replace("/in" + currentPath);
      }
    }

    detectCountry();
  }, []);

  return (
    <div className="loader-wrapper">
      <div className="spinner"></div>
      {/* <p>Detecting your region...</p> */}
    </div>
  );
}
