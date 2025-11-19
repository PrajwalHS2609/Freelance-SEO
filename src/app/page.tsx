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

      // Already inside a country folder → STOP redirect
      const firstSegment = currentPath.split("/")[1];
      const allowedPrefixes = ["in", "ae"];

      if (allowedPrefixes.includes(firstSegment)) {
        setIsRedirecting(false);
        return;
      }

      try {
        // ⭐ NEW API → works 100% on Vercel
        const res = await fetch("https://ipinfo.io/json?token=2d2364c7c4b4e9");
        const data = await res.json();

        const country = (data.country || "OTHER").toUpperCase();

        const COUNTRY_MAP: Record<string, string> = {
          IN: "in",
          AE: "ae",
        };

        const matchedCountry = COUNTRY_MAP[country];

        // If supported → redirect
        if (matchedCountry) {
          window.location.replace(`/${matchedCountry}${currentPath}`);
          return;
        }

        // Not supported → show default homepage
        setIsRedirecting(false);

      } catch (e) {
        console.error("Country detection failed", e);
        // API failed → show default homepage
        setIsRedirecting(false);
      }
    }

    detectCountry();
  }, []);

  if (isRedirecting) {
    return (
      <div className="loader-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }

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
