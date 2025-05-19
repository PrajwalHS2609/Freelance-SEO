import React from "react";
interface HeaderProps {
  heading: string;
}
export default function SlugHeader({ heading }: HeaderProps) {
  return (
    <div className="serviceHead-container" id="slugHeader">
      <div className="ball-design"></div>
      <h2>{heading}</h2>
      {/* <div className="breadCrumb">
        <Link href={"/"}>HOME</Link> <MdDoubleArrow className="breadIco" />
        <b>{bread}</b>
      </div> */}
    </div>
  );
}
