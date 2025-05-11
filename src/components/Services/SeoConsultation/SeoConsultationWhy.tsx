import React from "react";
import "@/components/Style/style.css"
import SeoImg from "@/imgs/Off-Page SEO Img.jpg"
import Image from "next/image";

const SeoConsultationWhy = () => {
  return (
    <div className="serviceWhy-container" id="serviceWhy-container1">
      <div className="serviceWhy-content">
        <h2>Why Choose SEO Consultation in Bangalore?</h2>
        <p>
          Businesses of all sizes can benefit from SEO Consultation in
          Bangalore. Whether you are a startup, a local business, or a
          well-established brand, SEO consultation provides valuable insights
          into how your website performs and what changes are needed to rank
          higher in search engine results. With personalized strategies, expert
          recommendations, and data-driven analysis, businesses can improve
          their digital footprint effectively.
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

export default SeoConsultationWhy;
