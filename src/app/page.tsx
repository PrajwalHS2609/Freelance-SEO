"use client";

import { useEffect, useState } from "react";

/* Homepage components */
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
      const firstSegment = currentPath.split("/")[1];

      const allowedPrefixes = ["in", "ae", "de"]; // supported countries

      // 👇 If already inside country folder → allow page
      if (allowedPrefixes.includes(firstSegment)) {
        setIsRedirecting(false);
        return;
      }

      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const COUNTRY_MAP: Record<string, string> = {
          IN: "in",
          AE: "ae",
          DE: "de",
        };

        const matchedCountry = COUNTRY_MAP[data.country];

        // ✔ If supported → redirect to same page inside country folder
        if (matchedCountry) {
          window.location.replace(`/${matchedCountry}${currentPath}`);
          return;
        }

        // ❗ IF unsupported country
        // Should always redirect to "/" only ONCE
        if (currentPath !== "/") {
          window.location.replace("/");
          return;
        }

        setIsRedirecting(false);
      } catch {
        setIsRedirecting(false);
      }
    }

    detectCountry();
  }, []);

  /* Loading screen */
  if (isRedirecting) {
    return (
      <div className="loader-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }

  /* Default homepage */
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
