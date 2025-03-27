import HomeHeaderClient from "@/components/HomePage/HomeHeader/HomeHeaderClient";
import SeoContent from "@/components/Services/Seo/SeoContent";
import SeoHeadMain from "@/components/Services/Seo/SeoHead/SeoHeadMain";
import SeoHeader from "@/components/Services/Seo/SeoHeader";
import React from "react";
export const metadata = {
  title: "Freelance SEO Services in Bangalore – Best SEO Services near Me",
  description:
    "Freelance SEO Services in Bangalore. Businesses can significantly improve their visibility and stay ahead of the competition. Call Now!",
  canonical: "https://freelanceseo.co.in/seo-services-in-bangalore",
};
const SeoService = () => {
  return (
    <div className="main-block">
      <SeoHeader />
      <SeoHeadMain />
      <HomeHeaderClient />
      <SeoContent />
    </div>
  );
};

export default SeoService;
