import Link from "next/link";
import React from "react";
import "@/components/Style/style.css";
import { MdDoubleArrow } from "react-icons/md";
const SeoHeader = () => {
  return (
    <div className="serviceHead-container">
      <div className="ball-design"></div>
      <h2>SEO Service </h2>
      <div className="breadCrumb">
        <Link href={"/"}>HOME</Link> <MdDoubleArrow className="breadIco" />
        <b>SEO</b>
      </div>
    </div>
  );
};

export default SeoHeader;
