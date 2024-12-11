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
            className={pathname === "/" ? "active" : ""}
          >
            On-Page SEO Services
          </Link>
        </li>
        <li>
          <Link
            href="/off-page-seo-services-in-bangalore"
            className={pathname === "/" ? "active" : ""}
          >
            Off-Page Services
          </Link>
        </li>
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            SEO Auditing
          </Link>
        </li>
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            SEO Consultation
          </Link>
        </li>
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Google My Business Service
          </Link>
        </li>
      </ul>
    </div>
  );
}
