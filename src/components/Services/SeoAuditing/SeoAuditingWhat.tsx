import Image from "next/image";
import React from "react";
import SeoImg from "@/imgs/Off-Page SEO Img.jpg";

const SeoAuditingWhat = () => {
  return (
    <div className="serviceWhy-container">
      <div className="serviceWhy-content">
        <Image src={SeoImg} alt="Seo Img" />
      </div>
      <div className="serviceWhy-content">
        <h2>What Are SEO Auditing Services in Bangalore?</h2>
        <p>
          SEO Auditing Services in Bangalore involve a thorough examination of a
          website’s technical structure, content, and backlinks to determine
          factors affecting its search engine performance. This process includes
          analyzing site speed, mobile-friendliness, security, on-page
          optimization, and backlink profile. A well-executed SEO audit provides
          valuable insights that help businesses implement necessary
          improvements.
        </p>
      </div>
    </div>
  );
};

export default SeoAuditingWhat;
