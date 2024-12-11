import { FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { PiEnvelopeOpenLight } from "react-icons/pi";

export default function FooterAddress1() {
  return (
    <div className="footerAddress-container">
      <h3>Office 1</h3>
      <ul>
        <li>
          <TfiLocationPin className="addressIcon" />
          <p>
            {" "}
            513, 4th C Main Rd, near Bandhan Bank, HRBR Layout 2nd Block, HRBR
            Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
          </p>
        </li>
        <li>
          <FiPhone className="addressIcon" />
          <p>
            <a href="tel:6360226773"> +91 6360 22 6773</a>
          </p>{" "}
        </li>
        <li>
          <FiPhone className="addressIcon" />
          <p>
            <a href="tel:8105082554">+91 8105 08 2554</a>
          </p>
        </li>
        <li>
          <PiEnvelopeOpenLight className="addressIcon" />
          <p>
            <a href="">info@freelanceseo.co.in</a>
          </p>
        </li>
      </ul>
    </div>
  );
}
