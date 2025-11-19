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

      // Extract first path segment ( /in/contact → "in" )
      const firstSegment = currentPath.split("/")[1];

      // Supported country folders
      const allowedPrefixes = ["in", "ae", "de"];

      // If already inside supported folder → show page
      if (allowedPrefixes.includes(firstSegment)) {
        setIsRedirecting(false);
        return;
      }

      try {
        // Get visitor country
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const country = data.country || "OTHER";

        // Map country to folder
        const COUNTRY_MAP: Record<string, string> = {
          IN: "in",
          AE: "ae",
          DE: "de",
        };

        const matchedCountry = COUNTRY_MAP[country];

        // ✔ If matched → redirect and keep full path
        if (matchedCountry) {
          window.location.replace(`/${matchedCountry}${currentPath}`);
          return;
        }

        // ❗ If NOT supported → redirect ONLY to homepage
        if (currentPath !== "/") {
          window.location.replace("/");
          return;
        }

        // Allow homepage to load
        setIsRedirecting(false);
      } catch {
        // On error → let user see homepage
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
