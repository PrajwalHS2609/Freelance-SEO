import Image from "next/image";
import "./HomeSeoPractices.css";
import HomeSeoPracticesHead from "./HomeSeoPracticesHead";
import HomeSeoPracticesMain from "./HomeSeoPracticesMain";
import seoPracticeImg from "@/imgs/seoPractice.png";
export default function HomeSeoPractices() {
  return (
    <div className="homeSeoPractices-container">
      <div className="homeSeoPractices-content">
        <div className="homeSeoPractices-img">
          {" "}
          <Image src={seoPracticeImg} alt="Seo Practice" />
        </div>
      </div>
      <div className="homeSeoPractices-content">
        <HomeSeoPracticesHead />
        <HomeSeoPracticesMain />
      </div>
    </div>
  );
}
