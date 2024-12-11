import HomeContentImg from "./HomeContentImg";
import HomeContentTxt from "./HomeContentTxt";
import "./HomeHeader.css";
import HomeHeaderClient from "./HomeHeaderClient";

export default function HomeHeader() {
  return (
    <div className="homeHeader-container">
      <div className="homeHeader-wrapper">
        {" "}
        <div className="homeHeader-content">
          <HomeContentTxt />
        </div>
        <div className="homeHeader-content">
          <HomeContentImg />
        </div>
      </div>
      <HomeHeaderClient/>
    </div>
  );
}
