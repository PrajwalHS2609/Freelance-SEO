import HomeSuccessMain from "./HomeSuccessMain";
import "./HomeSuccess.css"
import HomeSuccessHead from "./HomeSuccessHead";

export default function HomeSuccess() {
  return (
    <div className="homeSuccess-container">
        <HomeSuccessHead/>
      <HomeSuccessMain />
    </div>
  );
}
