import HomeHeaderClient from "@/components/HomePage/HomeHeader/HomeHeaderClient";
import SeoAuditingBenefits from "@/components/Services/SeoAuditing/SeoAuditingBenefits";
import SeoAuditingContent from "@/components/Services/SeoAuditing/SeoAuditingContent";
import SeoAuditingHeadMain from "@/components/Services/SeoAuditing/SeoAuditingHead/SeoAuditingHeadMain";
import SeoAuditingHeader from "@/components/Services/SeoAuditing/SeoAuditingHeader";
import SeoAuditingKey from "@/components/Services/SeoAuditing/SeoAuditingKey/SeoAuditingKey";
import SeoAuditingWhat from "@/components/Services/SeoAuditing/SeoAuditingWhat";
import SeoAuditingWhy from "@/components/Services/SeoAuditing/SeoAuditingWhy";
export const metadata = {
  title:
    "Freelance SEO Auditing Services in Bangalore – Best SEO Auditing Services near Me",
  description:
    "Freelance SEO Auditing Services in Bangalore, comprehensive analysis of a website to assess its strengths, weaknesses, and opportunities for improvement.",
  canonical: "https://freelanceseo.co.in/seo-auditing-services-in-bangalore ",
};
export default function SeoAuditingService() {
  return (
    <div className="main-block">
      <SeoAuditingHeader />
      <SeoAuditingHeadMain />
      <SeoAuditingWhat />
      <HomeHeaderClient />
      <SeoAuditingWhy />
      <SeoAuditingKey />
      <SeoAuditingBenefits/>
      <SeoAuditingContent />
    </div>
  );
}
