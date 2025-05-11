import React from "react";
import SeoImg from "@/imgs/Off-Page SEO Img.jpg";
import Image from "next/image";

const SeoAuditingWhy = () => {
  return (
    <div className="serviceWhy-container" id="serviceWhy-container1">
      <div className="serviceWhy-content">
        <h2>Why Are SEO Auditing Services in Bangalore Important?</h2>
        <p>
          Investing in SEO Auditing Services in Bangalore is essential for
          businesses aiming for higher search engine rankings. Without an SEO
          audit, it is difficult to identify what is preventing a website from
          achieving its full potential. A detailed audit highlights issues such
          as duplicate content, broken links, poor keyword optimization, and
          slow page loading times.
        </p>
      </div>
      <div className="serviceWhy-content">
        <Image src={SeoImg} alt="Seo Img" />
      </div>
    </div>
  );
};

export default SeoAuditingWhy;
