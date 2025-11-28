"use client";

import { useEffect } from "react";

export default function GeoRedirect() {
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        let country = data?.country_code || "IN";

        // 💡 For localhost testing → manually switch the country
        if (window.location.hostname === "localhost") {
          country = "DE";  
          // change to "US", "AE", "CA", "UK", "IN" to test different regions
        }

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

        const path = window.location.pathname;

        // get first URL segment
        const seg = path.split("/")[1]?.toLowerCase();

        const prefixes = Object.values(redirectMap).map((p) =>
          p.replace("/", "").toLowerCase()
        );

        // if already has prefix — don't redirect
        if (prefixes.includes(seg)) return;

        const prefix = redirectMap[country] || "/in";

        // Save for use in links (AutoLocalLink)
        localStorage.setItem("countryPrefix", prefix);

        // redirect
        window.location.replace(prefix + path);
      } catch (err) {
        console.error("Geo redirect failed:", err);
      }
    })();
  }, []);

  return null;
}
