import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import "./AboutUsHeader.css";
export default function AboutUsHeader() {
  return (
    <div className="aboutUsHeader-container">
      <div className="aboutUsHeader-ball"></div>
      <div className="aboutUsHeader-wrapper">
        <h2>About Us</h2>
        <BreadCrumb currentPage="About Us" />
      </div>
    </div>
  );
}
