import HomeHeaderClient from "@/components/HomePage/HomeHeader/HomeHeaderClient";
import OffPageSeoBenefits from "@/components/Services/OffPageSeo/OffPageSeoBenefits";
import OffPageSeoHeadMain from "@/components/Services/OffPageSeo/OffPageSeoHead/OffPageSeoHeadMain";
import OffPageSeoHeader from "@/components/Services/OffPageSeo/OffPageSeoHeader";
import OffPageSeoImp from "@/components/Services/OffPageSeo/OffPageSeoImp";
import OffPageSeoKey from "@/components/Services/OffPageSeo/OffPageSeoKey/OffPageSeoKey";
import OffPageSeoWhat from "@/components/Services/OffPageSeo/OffPageSeoWhat";
import OffPageWhy from "@/components/Services/OffPageSeo/OffPageWhy";

export const metadata = {
  title:
    "Freelance Off-Page SEO Services in Bangalore – Best Off-Page SEO Services near Me",
  description:
    "Freelance Off-Page SEO Services in Bangalore, you can enhance your domain authority, drive organic traffic, and establish a credible brand presence.",
  canonical: "https://freelanceseo.co.in/off-page-seo-services-in-bangalore",
};
export default function OffPageSeo() {
  return (
    <div className="main-block">
      <OffPageSeoHeader />
      <OffPageSeoHeadMain />
      <OffPageSeoWhat />
      <HomeHeaderClient />
      <OffPageSeoImp />
      <OffPageSeoKey />
      <OffPageSeoBenefits />
      <OffPageWhy />
    </div>
  );
}
