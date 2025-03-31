import HomeAdv from "@/components/HomePage/HomeAdv/HomeAdv";
import HomeChoosing from "@/components/HomePage/HomeChoosing/HomeChoosing";
import HomeHeaderClient from "@/components/HomePage/HomeHeader/HomeHeaderClient";
import HomeSuccess from "@/components/HomePage/HomeSuccess/HomeSuccess";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import OnPageSeoBenefits from "@/components/Services/OnPageSeo/OnPageSeoBenefits";
import OnPageSeoContent from "@/components/Services/OnPageSeo/OnPageSeoContent";
import OnPageSeoHeadMain from "@/components/Services/OnPageSeo/OnPageSeoHead/OnPageSeoHeadMain";
import OnPageSeoHeader from "@/components/Services/OnPageSeo/OnPageSeoHeader";
import OnPageSeoKey from "@/components/Services/OnPageSeo/OnPageSeoKey/OnPageSeoKey";
import OnPageSeoWhy from "@/components/Services/OnPageSeo/OnPageSeoWhy";
export const metadata = {
  title:
    "Freelance On-Page SEO Services in Bangalore – Best On-Page SEO Services near Me",
  description:
    "Freelance On-Page SEO Services in Bangalore, plays a crucial role in optimizing your website’s content, structure, and technical elements to make it more search-engine friendly.",
  canonical: "https://freelanceseo.co.in/on-page-seo-services-in-bangalore",
};
export default function OnPageSeo() {
  return (
    <div className="main-block">
      <OnPageSeoHeader />
      <OnPageSeoHeadMain />
      <HomeHeaderClient />
      <OnPageSeoWhy />
      <OnPageSeoKey/>
            <HomeSuccess />
            <HomeTestimonial />
            <HomeAdv />
            <HomeChoosing />
      <OnPageSeoBenefits/>
      <OnPageSeoContent/>
    </div>
  );
}
