import Image from "next/image";
import "./HomeAbout.css";
import HomeAboutHead from "./HomeAboutHead";
import logo1 from "@/imgs/homeAbout/black-hole.png";
import logo2 from "@/imgs/homeAbout/earthLogo.png";
import aboutImg1 from "@/imgs/homeAbout/aboutImg1.jpg";
import aboutImg2 from "@/imgs/homeAbout/aboutImg2.jpg";

export default function HomeAbout() {
  return (
    <div className="homeAbout-container">
      <div className="homeAbout-wrapper" id="homeAbout-wrapper1">
        <div className="homeAbout-content">
          <Image src={aboutImg1} alt="" />
        </div>
        <Image src={logo1} alt="" />
      </div>
      <div className="homeAbout-wrapper">
        {/* <div className="homeAbout-item">
          <Image
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Arc-1.png"
            alt=""
          />
        </div> */}
        <HomeAboutHead />
      </div>
      <div className="homeAbout-wrapper" id="homeAbout-wrapper2">
        <div className="homeAbout-content">
          <Image src={aboutImg2} alt="" />
        </div>
        <Image src={logo2} alt="" />
      </div>
    </div>
  );
}
