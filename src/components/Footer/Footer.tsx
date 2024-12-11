import "./Footer.css";
import FooterAddress1 from "./FooterAddress1";
import FooterAddress2 from "./FooterAddress2";
import FooterBio from "./FooterBio";
import FooterService from "./FooterServices";
import FooterBelow from './FooterBelow';
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        {" "}
        <FooterBio />
        <FooterService />
        <FooterAddress1 />
        <FooterAddress2 />
      </div>
      <div className="footerLine"></div>
      <div className="footer-wrapper2">
        <FooterBelow/>
      </div>
    </div>
  );
}
