import HomeHeaderClient from "@/components/HomePage/HomeHeader/HomeHeaderClient";
import SeoConsultationBenefits from "@/components/Services/SeoConsultation/SeoConsultationBenefits";
import SeoConsultationContent from "@/components/Services/SeoConsultation/SeoConsultationContent";
import SeoConsultationHeadMain from "@/components/Services/SeoConsultation/SeoConsultationHead/SeoConsultationHeadMain";
import SeoConsultationHeader from "@/components/Services/SeoConsultation/SeoConsultationHeader";
import SeoConsultationKey from "@/components/Services/SeoConsultation/SeoConsultationKey/SeoConsultationKey";
import SeoConsultationWhat from "@/components/Services/SeoConsultation/SeoConsultationWhat";
import SeoConsultationWhy from "@/components/Services/SeoConsultation/SeoConsultationWhy";
export const metadata = {
  title:
    "Freelance SEO Consultation in Bangalore – Best SEO Consultation near Me",
  description:
    "Freelance SEO Consultation in Bangalore, comprehensive analysis of a website to assess its strengths, weaknesses, and opportunities for improvement.",
  canonical: "https://freelanceseo.co.in/seo-consultation-in-bangalore ",
};
export default function SeoConsultation() {
  return (
    <div className="main-block">
      <SeoConsultationHeader />
      <SeoConsultationHeadMain />
      <SeoConsultationWhat />
      <HomeHeaderClient />
      <SeoConsultationWhy />
      <SeoConsultationKey />
      <SeoConsultationBenefits />
      <SeoConsultationContent />
    </div>
  );
}
