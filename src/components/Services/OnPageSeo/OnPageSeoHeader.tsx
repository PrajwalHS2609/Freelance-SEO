import React from "react";
import "@/components/Style/style.css";
import { MdDoubleArrow } from "react-icons/md";
import Link from "next/link";

const OnPageSeoHeader = () => {
  return (
    <div className="serviceHead-container">
      <div className="ball-design"></div>
      <h2>On-Page SEO </h2>
      <div className="breadCrumb">
        <Link href={"/"}>HOME</Link> <MdDoubleArrow className="breadIco" />
        <b> ON-PAGE SEO</b>
      </div>
    </div>
  );
};

export default OnPageSeoHeader;
