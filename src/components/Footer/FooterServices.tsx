"use client";
import Link from "next/link";
import "./Footer.css";
import { usePathname } from "next/navigation";

export default function FooterService() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];

  const countryPrefix = ["in", "ae", "de"].includes(firstSegment)
    ? `/${firstSegment}`
    : "";
  return (
    <div className="footerService-container">
      <h3>Services</h3>
      <ul>
        <li>
          <Link
            href={`${countryPrefix}/on-page-seo-services-in-bangalore`}
            className={
              pathname === `${countryPrefix}/on-page-seo-services-in-bangalore`
                ? "active"
                : ""
            }
          >
            On-Page SEO Services
          </Link>
        </li>
        <li>
          <Link
            href={`${countryPrefix}/off-page-seo-services-in-bangalore`}
            className={
              pathname === `${countryPrefix}/off-page-seo-services-in-bangalore`
                ? "active"
                : ""
            }
          >
            Off-Page Services
          </Link>
        </li>
        <li>
          <Link
            href={`${countryPrefix}/seo-auditing-services-in-bangalore`}
            className={
              pathname === `${countryPrefix}/seo-auditing-services-in-bangalore`
                ? "active"
                : ""
            }
          >
            SEO Auditing
          </Link>
        </li>
        <li>
          <Link
            href={`${countryPrefix}/seo-consultation-in-bangalore`}
            className={
              pathname === `${countryPrefix}/seo-consultation-in-bangalore`
                ? "active"
                : ""
            }
          >
            SEO Consultation
          </Link>
        </li>
        <li>
          <Link
            href={`${countryPrefix}/gmb-page-optimization-in-bangalore`}
            className={
              pathname === `${countryPrefix}/gmb-page-optimization-in-bangalore`
                ? "active"
                : ""
            }
          >
            Google My Business Service
          </Link>
        </li>
        <li>
          <Link href={`${countryPrefix}/blog`} className={pathname === `${countryPrefix}/blog` ? "active" : ""}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/other-services" style={{ color: "transparent" }}>
            OtherServices
          </Link>
        </li>
      </ul>
    </div>
  );
}
