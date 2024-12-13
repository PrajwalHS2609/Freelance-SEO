import AboutUsHeader from "@/components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeAdv from "@/components/HomePage/HomeAdv/HomeAdv";
import HomeHeaderClient from "@/components/HomePage/HomeHeader/HomeHeaderClient";
import HomeSuccess from "@/components/HomePage/HomeSuccess/HomeSuccess";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";

export default function AboutUs() {
  return (
    <>
      <AboutUsHeader />
      <HomeAbout />
      <HomeHeaderClient />
      <HomeAdv />
      <HomeSuccess />
      <HomeTestimonial />
    </>
  );
}
