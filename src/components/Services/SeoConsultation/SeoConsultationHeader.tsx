import Link from "next/link";
import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import "@/components/Style/style.css";

const SeoConsultationHeader = () => {
  return (
    <div className="serviceHead-container">
      <div className="ball-design"></div>
      <h2>SEO Consultation </h2>
      <div className="breadCrumb">
        <Link href={"/"}>HOME</Link> <MdDoubleArrow className="breadIco" />
        <b> SEO Consultation</b>
      </div>
    </div>
  );
};

export default SeoConsultationHeader;
