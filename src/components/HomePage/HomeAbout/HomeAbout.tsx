import "./HomeAbout.css";
import HomeAboutHead from "./HomeAboutHead";
export default function HomeAbout() {
  return (
    <div className="homeAbout-container">
      <div className="homeAbout-wrapper" id="homeAbout-wrapper1">
        <div className="homeAbout-content">
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/entertainer-presenting-tablet-from-sponsor-1-1.jpg"
            alt=""
          />
        </div>
        <img
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star-1.png"
          alt=""
        />
      </div>
      <div className="homeAbout-wrapper">
        {/* <div className="homeAbout-item">
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Arc-1.png"
            alt=""
          />
        </div> */}
        <HomeAboutHead />
      </div>
      <div className="homeAbout-wrapper" id="homeAbout-wrapper2">
        <div className="homeAbout-content">
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Frame-1437254183-1.jpg"
            alt=""
          />
        </div>
        <img
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Galaxy-1.png"
          alt=""
        />
      </div>
    </div>
  );
}
