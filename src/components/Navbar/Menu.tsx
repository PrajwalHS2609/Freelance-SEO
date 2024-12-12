"use client"; // Add this at the top to mark the file as a Client Component

import { usePathname } from "next/navigation"; // Importing usePathname for Client Components
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Menu = () => {
  const pathname = usePathname(); // Using usePathname to get the current path

  return (
    <div className="menu-container">
      <div className="menu-content1">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={pathname === "/about-us" ? "active" : ""}
          >
            Projects{" "}
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={pathname === "/services" ? "active" : ""}
          >
            Services
          </Link>
          <div className="menuDrop-container">
            <ul>
              <li>
                <Link
                  href="/services/seo-services-in-bangalore"
                  className={
                    pathname === "/services/seo-services-in-bangalore"
                      ? "active"
                      : ""
                  }
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/on-page-seo-services-in-bangalore"
                  className={
                    pathname === "/on-page-seo-services-in-bangalore"
                      ? "active"
                      : ""
                  }
                >
                  On-Page SEO{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/off-page-seo-services-in-bangalore"
                  className={
                    pathname === "/off-page-seo-services-in-bangalore"
                      ? "active"
                      : ""
                  }
                >
                  Off-Page SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/seo-auditing-services-in-bangalore"
                  className={
                    pathname === "/seo-auditing-services-in-bangalore"
                      ? "active"
                      : ""
                  }
                >
                  SEO Auditing
                </Link>
              </li>
              <li>
                <Link
                  href="/seo-consultation-services-in-bangalore"
                  className={
                    pathname === "/seo-consultation-services-in-bangalore"
                      ? "active"
                      : ""
                  }
                >
                  SEO Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/local-seo-services-in-bangalore"
                  className={
                    pathname === "/local-seo-services-in-bangalore"
                      ? "active"
                      : ""
                  }
                >
                  GMB{" "}
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link
            href="/about-us"
            className={pathname === "/about-us" ? "active" : ""}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className={pathname === "/contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
      </div>
      <div className="menu-content2">
        <MdMenu  className="menuIcon"/>
      </div>
    </div>
  );
};

export default Menu;
