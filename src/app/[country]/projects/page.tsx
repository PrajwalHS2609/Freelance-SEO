import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
import "@/components/Style/style.css";
export default function Projects() {
  return (
    <div className="main-block">
      <div className="serviceHead-container">
        <div className="ball-design"></div>
        <h2>Projects </h2>
        <div className="breadCrumb">
          <Link href={"/"}>HOME</Link> <MdDoubleArrow className="breadIco" />
          <b> Projects</b>
        </div>
      </div>
    </div>
  );
}
