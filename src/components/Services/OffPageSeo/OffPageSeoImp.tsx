import Image from "next/image";
import React from "react";
import SeoImg from "@/imgs/Off-Page SEO Img.jpg"
const OffPageSeoImp = () => {
  return (
    <div className="serviceWhy-container">
      <div className="serviceWhy-content">
        <h2>What Are Off-Page SEO Services?</h2>
        <p>
          Off-Page SEO Services in Bangalore refer to the techniques used
          outside your website to improve its search engine rankings. This
          includes link-building, social media marketing, influencer outreach,
          guest blogging, and more. The purpose of off-page SEO is to create
          trust signals for search engines, helping your website rank higher in
          search results.
        </p>
      </div>
      <div className="serviceWhy-content">
        <Image
          src={SeoImg}
          alt="Seo Img"
        />
      </div>
    </div>
  );
};

export default OffPageSeoImp;
