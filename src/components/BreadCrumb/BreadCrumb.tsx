import Link from "next/link";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import "./BreadCrumb.css";
export default function BreadCrumb({ currentPage }: { currentPage: string }) {
  return (
    <div className="breadCrumb">
      <Link href="/">Home</Link>
      <RiArrowRightDoubleLine className="breadCrumbIcon" />
     <span> {currentPage}</span>
    </div>
  );
}
