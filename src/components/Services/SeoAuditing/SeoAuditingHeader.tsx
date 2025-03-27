import Link from "next/link";
import React from "react";
import "@/components/Style/style.css";
import { MdDoubleArrow } from "react-icons/md";
const   SeoAuditingHeader = () => {
  return (
    <div className="serviceHead-container">
      <div className="ball-design"></div>
      <h2>SEO Auditing </h2>
      <div className="breadCrumb">
        <Link href={"/"}>HOME</Link> <MdDoubleArrow className="breadIco" />
        <b> SEO AUDITING</b>
      </div>
    </div>
  );
};

export default SeoAuditingHeader;
