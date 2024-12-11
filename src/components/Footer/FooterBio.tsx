import "./Footer.css";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import logo from "./logo/TSS.png"
export default function FooterBio() {
  return (
    <div className="footer-bio">
      <h3>About Us</h3>
      <div className="footer-bioImg">
        <a href="https://tryseoservices.com/">
          <Image src={logo} alt="logo" />
        </a>
      </div>
      <p>
        FreelanceSEO.co.in has consistently delivered top-notch SEO solutions.
        Our track record speaks for itself – we've helped businesses thrive
        online. Join us for another decade of digital triumphs!
      </p>
      <div className="footer-bioSocial">
        <div className="footer-bioSocialItem">
          <a href="\">
            <FaFacebook className="footerSocialIcons" />
          </a>
        </div>
        <div className="footer-bioSocialItem">
          <a href="\">
            <FaYoutube className="footerSocialIcons" />
          </a>
        </div>
        <div className="footer-bioSocialItem">
          <a href="\">
            <FaInstagram className="footerSocialIcons" />
          </a>
        </div>
        <div className="footer-bioSocialItem">
          <a href="\">
            <FaLinkedin className="footerSocialIcons" />
          </a>
        </div>
        <div className="footer-bioSocialItem">
          <a href="\">
            <FaXTwitter className="footerSocialIcons" />
          </a>
        </div>
      </div>
    </div>
  );
}
