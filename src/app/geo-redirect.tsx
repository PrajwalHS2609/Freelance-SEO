"use client";

import { useEffect } from "react";

export default function GeoRedirect() {
  useEffect(() => {
    // prevent redirect on localhost
    if (window.location.hostname === "localhost") return;

    (async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        let country = data?.country_code || "IN";

        const redirectMap: Record<string, string> = {
          IN: "/in",
          US: "/us",
          CA: "/ca",
          UK: "/uk",
          AU: "/au",
          DE: "/de",
          FR: "/fr",
          AE: "/ae",
          SA: "/sa",
          IT: "/it",
          NL: "/nl",
          MY: "/my",
          QA: "/qa",
          PL: "/pl",
        };

        // current path
        const path = window.location.pathname;

        // first segment
        const seg = path.split("/")[1]?.toLowerCase();

        // check if already has country prefix
        const prefixes = Object.values(redirectMap).map((p) =>
          p.replace("/", "").toLowerCase()
        );

        if (prefixes.includes(seg)) return;

        // redirect
        const prefix = redirectMap[country] || "/in";
        window.location.replace(prefix + path);
      } catch (err) {
        console.error("Geo redirect failed:", err);
      }
    })();
  }, []);

  return null;
}
