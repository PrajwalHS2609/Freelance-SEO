import Image from "next/image";
import "./HomeHeader.css";
import headerImage from "@/imgs/header-img1.png"
export default function HomeContentImg() {
  return (
    <>
      <div className="homeHeader-design">
        <div className="circle1">
          <div className="circle2">
            <div className="circle3"></div>
          </div>
        </div>
        <Image
          src={headerImage}
          alt="Header Image"
        />
      </div>
    </>
  );
}
