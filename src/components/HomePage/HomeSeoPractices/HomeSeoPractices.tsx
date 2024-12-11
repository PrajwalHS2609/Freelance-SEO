import "./HomeSeoPractices.css";
import HomeSeoPracticesHead from "./HomeSeoPracticesHead";
import HomeSeoPracticesMain from "./HomeSeoPracticesMain";
export default function HomeSeoPractices() {
  return (
    <div className="homeSeoPractices-container">
      <div className="homeSeoPractices-content">
        <div className="homeSeoPractices-img">
          {" "}
          <img
            src="https://img.freepik.com/free-vector/seo-flat-typography-design_23-2147490802.jpg?t=st=1733905628~exp=1733909228~hmac=4c5b59a3e78f37792c52b1d7e1c1476276214c45e0283951485dd7e1ca528449&w=740"
            alt=""
          />
        </div>
      </div>
      <div className="homeSeoPractices-content">
        <HomeSeoPracticesHead/>
        <HomeSeoPracticesMain/>
      </div>
    </div>
  );
}
