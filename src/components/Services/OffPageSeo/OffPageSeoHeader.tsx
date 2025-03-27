import Link from 'next/link'
import React from 'react'
import { MdDoubleArrow } from "react-icons/md";
import "@/components/Style/style.css";

const OffPageSeoHeader = () => {
  return (
    <div className="serviceHead-container">
      <div className="ball-design"></div>
      <h2>Off-Page SEO </h2>
      <div className="breadCrumb">
        <Link href={"/"}>HOME</Link> <MdDoubleArrow className="breadIco" />
        <b> OFF-PAGE SEO</b>
      </div>
    </div>
  )
}

export default OffPageSeoHeader
