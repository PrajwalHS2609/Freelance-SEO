import HomeServicesHead from "./HomeServicesHead";
import HomeServiceMain from "./HomeServicesMain";
import "./HomeServices.css"

export default function HomeServices() {
  return <div className="homeServices-container">
    <HomeServicesHead/>
    <HomeServiceMain/>
  </div>;
}
