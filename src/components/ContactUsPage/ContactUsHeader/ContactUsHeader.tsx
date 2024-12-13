import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import "./ContactUsHeader.css";

export default function ContactHeader() {

  return (
    <div className="contactHeader-container">
      <div className="contactHeader-ball"></div>
      <div className="contactHeader-wrapper">
        <h2>Contact Us</h2>
        <BreadCrumb currentPage="Contact Us"/>
      </div>
    </div>
  );
}
