"use client";
import Link from "next/link";
import "./Footer.css";
import { usePathname } from "next/navigation";

export default function FooterService() {
  const pathname = usePathname(); // Using usePathname to get the current path

  return (
    <div className="footerService-container">
      <h3>Services</h3>
      <ul>
        <li>
          <Link
            href="/on-page-seo-services-in-bangalore"
            className={pathname === "/on-page-seo-services-in-bangalore" ? "active" : ""}
          >
            On-Page SEO Services
          </Link>
        </li>
        <li>
          <Link
            href="/off-page-seo-services-in-bangalore"
            className={pathname === "/off-page-seo-services-in-bangalore" ? "active" : ""}
          >
            Off-Page Services
          </Link>
        </li>
        <li>
          <Link href="/seo-auditing-services-in-bangalore" className={pathname === "/seo-auditing-services-in-bangalore" ? "active" : ""}>
            SEO Auditing
          </Link>
        </li>
        <li>
          <Link href="/seo-consultation-in-bangalore" className={pathname === "/seo-consultation-in-bangalore" ? "active" : ""}>
            SEO Consultation
          </Link>
        </li>
        <li>
          <Link href="/gmb-page-optimization-in-bangalore" className={pathname === "/gmb-page-optimization-in-bangalore" ? "active" : ""}>
            Google My Business Service
          </Link>
        </li>
                <li>
          <Link href="/blog" className={pathname === "/blog" ? "active" : ""}>
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
