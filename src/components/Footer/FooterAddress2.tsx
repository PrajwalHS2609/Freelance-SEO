import { FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { PiEnvelopeOpenLight } from "react-icons/pi";
export default function FooterAddress2() {
  return (
    <div className="footerAddress-container">
      <h3>Office 2</h3>
      <ul>
        <li>
          <TfiLocationPin className="addressIcon" />
          <p>
            Premier Rabbi Building, 6th Cross, near Royal Oak Furnitures,
            Chandra Reddy Layout, Koramangala, Bengaluru 560034
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
