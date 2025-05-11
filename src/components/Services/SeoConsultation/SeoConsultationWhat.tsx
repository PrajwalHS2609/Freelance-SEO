import React from "react";
import SeoImg from "@/imgs/Off-Page SEO Img.jpg"
import Image from "next/image";

const SeoConsultationWhat = () => {
  return (
    <div className="serviceWhy-container">
      <div className="serviceWhy-content">
     <Image
          src={SeoImg}
          alt="Seo Img"
        />
      </div>
      <div className="serviceWhy-content">
        <h2>What is SEO Consultation in Bangalore?</h2>
        <p>
          SEO Consultation in Bangalore is a professional service designed to
          analyze, strategize, and implement effective SEO practices for
          businesses. It involves a comprehensive assessment of a website’s
          performance, keyword strategy, technical structure, content quality,
          and backlink profile. Through a thorough consultation, businesses can
          identify gaps and receive tailored recommendations to improve search
          engine rankings.
        </p>
      </div>
    </div>
  );
};

export default SeoConsultationWhat;
