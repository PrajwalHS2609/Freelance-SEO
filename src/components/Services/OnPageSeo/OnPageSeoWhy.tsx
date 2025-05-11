import React from "react";
import SeoImg from "@/imgs/Off-Page SEO Img.jpg"
import Image from "next/image";

const OnPageSeoWhy = () => {
  return (
    <div className="serviceWhy-container">
      <div className="serviceWhy-content">
     <Image
          src={SeoImg}
          alt="Seo Img"
        />
      </div>
      <div className="serviceWhy-content">
        <h2>Why Choose On-Page SEO Services in Bangalore?</h2>
        <p>
          In today’s competitive digital landscape, having a well-optimized
          website is essential for online success. Whether you own a small
          business, an e-commerce store, or a corporate website, On-Page SEO
          Services in Bangalore can help you enhance your site’s visibility. By
          focusing on various on-page elements like keyword optimization,
          content structuring, internal linking, and technical improvements,
          professional SEO services ensure that your website adheres to search
          engine guidelines and delivers a seamless experience to visitors.
        </p>
      </div>
    </div>
  );
};

export default OnPageSeoWhy;
