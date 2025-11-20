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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentPath = window.location.pathname;

    const allowedPrefixes = ["in", "ae", "de"]; // folders you have

    const firstSegment = currentPath.split("/")[1];

    // 👉 If already inside a country folder → show that page
    if (allowedPrefixes.includes(firstSegment)) {
      setLoading(false);
      return;
    }

    // 👉 Otherwise ALWAYS redirect to India's /in/ version of that page
    window.location.replace(`/in${currentPath}`);
  }, []);

  if (loading) {
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
