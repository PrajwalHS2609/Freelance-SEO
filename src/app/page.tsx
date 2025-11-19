"use client";

import { useEffect, useState } from "react";

/* 👉 Default homepage components */
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeServices from "@/components/HomePage/HomeServices/HomeServices";
import HomeSuccess from "@/components/HomePage/HomeSuccess/HomeSuccess";
import HomeSeoPractices from "@/components/HomePage/HomeSeoPractices/HomeSeoPractices";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeFaq from "@/components/HomePage/HomeFaq/HomeFaq";
import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeAdv from "@/components/HomePage/HomeAdv/HomeAdv";
import HomeChoosing from "@/components/HomePage/HomeChoosing/HomeChoosing";

export default function Home() {
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    async function detectCountry() {
      const currentPath = window.location.pathname;

      // Check if already inside a country folder → STOP redirect
      const firstSegment = currentPath.split("/")[1];
      const allowedPrefixes = ["in", "ae","de",];

      if (allowedPrefixes.includes(firstSegment)) {
        setIsRedirecting(false);
        return;
      }

      try {
        // Fetch IP location (NO Vercel interference)
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const country = data.country || "OTHER";

        const COUNTRY_MAP: Record<string, string> = {
          IN: "in",
          AE: "ae",
          DE:"de",
        };

        const matchedCountry = COUNTRY_MAP[country];

        // If matched → redirect to /in or /ae
        if (matchedCountry) {
          window.location.replace(`/${matchedCountry}${currentPath}`);
          return;
        }

        // If non-supported country → STOP redirect → show default homepage
        setIsRedirecting(false);

      } catch {
        // On API failure → show default homepage
        setIsRedirecting(false);
      }
    }

    detectCountry();
  }, []);

  /* ----------------------------------------
      LOADING SCREEN (while detecting)
  ----------------------------------------- */
  if (isRedirecting) {
    return (
      <div className="loader-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }

  /* ----------------------------------------
      DEFAULT HOMEPAGE (for USA, UK, etc.)
  ----------------------------------------- */
  return (
    <div className="main-block">
      <HomeHeader />
      <HomeServices />
      <HomeSuccess />
      <HomeSeoPractices />
      <HomeTestimonial />
      <HomeFaq />
      <HomeAbout />
      <HomeAdv />
      <HomeChoosing />
    </div>
  );
}
