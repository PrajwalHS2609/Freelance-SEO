import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeServices from "@/components/HomePage/HomeServices/HomeServices";
import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeAdv from "@/components/HomePage/HomeAdv/HomeAdv";
import HomeFaq from "./../components/HomePage/HomeFaq/HomeFaq";
import HomeChoosing from "@/components/HomePage/HomeChoosing/HomeChoosing";
import HomeSeoPractices from "@/components/HomePage/HomeSeoPractices/HomeSeoPractices";
import HomeSuccess from "@/components/HomePage/HomeSuccess/HomeSuccess";
export const metadata = {
  title: "Best SEO Services in Bangalore for Small Business and eCommerce",
  description: "Best SEO Services in Bangalore for Small Business and eCommerce at Affordable Price. For Consultation, Auditing, On-Page and Off Page, Local SEO .",
  canonical: "https://freelanceseo.co.in/ ",

};
export default function Home() {
  return (
    <>
      <div className="main-block">
        <HomeHeader />
        <HomeServices />
        <HomeSuccess />
        <HomeSeoPractices />
        <HomeTestimonial />
        <HomeFaq />
        <HomeAbout />
        <HomeAdv />
        <HomeChoosing />
      </div>
    </>
  );
}
