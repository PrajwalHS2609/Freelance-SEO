import HomeHeaderClient from "@/components/HomePage/HomeHeader/HomeHeaderClient";
import GmbContent from "@/components/Services/Gmb/GmbContent";
import GmbHeadMain from "@/components/Services/Gmb/GmbHead/GmbHeadMain";
import GmbHeader from "@/components/Services/Gmb/GmbHeader";
import "@/components/Style/style.css";
export const metadata = {
  title:
    "GMB Page Optimization in Bangalore – Best Google My Business Optimization near Me",
  description:
    "Freelance Google My Business Page Optimization in Bangalore, is an essential service that helps businesses enhance their visibility on Google and attract local customers.",
  canonical: "https://freelanceseo.co.in/gmb-page-optimization-in-bangalore",
};
export default function Gmb() {
  return (
    <div className="main-block">
      <GmbHeader />
      <GmbHeadMain />
      <HomeHeaderClient />
      <GmbContent />
    </div>
  );
}
