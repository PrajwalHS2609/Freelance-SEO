import "./ContactUsMain.css";
import ContactUsMainHead from "./ContactUsMainHead";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import ContactUsForm from "./ContactUsForm";

export default function ContactUsMain() {
  return (
    <div className="contactUsMain-container">
      <div className="contactUsMain-content">
        <ContactUsMainHead />
        <div className="contactUsMain-wrapper">
          <div className="contactUsMain-item">
            <FaPhoneAlt className="contactUsMain-icon" />
            <span>
              <b>Phone Number</b> <a href="tel:6360226773">+91 6360 22 6773</a>
            </span>
          </div>
          <div className="contactUsMain-item">
            <FaEnvelope className="contactUsMain-icon" />
            <span>
              <b>Mail</b> <a href="tel:">info@freelanceseo.co.in</a>
            </span>
          </div>
          <div className="contactUsMain-item">
            {" "}
            <FaLocationDot className="contactUsMain-icon" />
            <span>
              <b>Location</b>
              <p>
                513, 4th C Main Rd, near Bandhan Bank, HRBR Layout 2nd Block,
                HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="contactUsMain-content">
        <ContactUsForm/>
      </div>
    </div>
  );
}
