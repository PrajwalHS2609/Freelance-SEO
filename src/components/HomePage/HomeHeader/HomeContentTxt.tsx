import "./HomeHeader.css";
import { GoArrowUpRight } from "react-icons/go";

export default function HomeContentTxt() {
  return (
    <>
      <div className="ball-design"></div>
      <div className="homeHeader-contentCover">
        <h6>Drive Traffic, Drive Success</h6>
        <h2>SEO Solution for your Business Success</h2>
        <p>
          Elevate Your Digital Presence! FreelanceSEO.co.in delivers top-tier
          SEO solutions that empower your business online. Boost rankings,
          attract traffic, and drive conversions with our expert SEO services.
          Let’s take your website to the top!
        </p>
        <div className="homeHeader-contentBtn">
          <button>
            Start Ranking Now <GoArrowUpRight className="homeHeader-arrow" />
          </button>
          <button>
            Contact Us Now <GoArrowUpRight className="homeHeader-arrow" />
          </button>
        </div>
      </div>
    </>
  );
}
