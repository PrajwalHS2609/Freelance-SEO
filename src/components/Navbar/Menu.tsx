"use client"; // Add this at the top to mark the file as a Client Component

import { usePathname } from "next/navigation"; // Importing usePathname for Client Components
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniXMark } from "react-icons/hi2";

import { useRef, useState } from "react";
import logo from "./logo/TSS.png";
import Image from "next/image";
import Logo from "./Logo";

const Menu = () => {
  const pathname = usePathname();
  const [drop, setDrop] = useState(false);
  const dropRef = useRef<HTMLDivElement | null>(null); // Explicitly typed ref
  const handlePopUp = () => {};
  let hideSideBar = () => {
    const exit = document.querySelector(".exit") as HTMLElement;;
    const sideBar = document.querySelector(".resp-Menu") as HTMLElement;;
    // sideBar.style.height = "0%";
    sideBar.style.visibility = "hidden";
    sideBar.style.opacity = "0";
    sideBar.style.transform = "translateX(100%)";
    exit.style.display = "none";
    
  };
  let showSideBar = () => {
    const exit = document.querySelector(".exit") as HTMLElement;;
    const sideBar = document.querySelector(".resp-Menu") as HTMLElement;;
    // sideBar.style.height = "fit-content";
    sideBar.style.visibility = "visible";
    sideBar.style.opacity = "1";
    sideBar.style.transform = "translateX(0px)";
    exit.style.display = "block";
    
  };
  const handleDrop = () => {
    const plus = document.querySelector(".plus") as HTMLElement | null;
  
    // Ensure dropRef.current is not null
    if (dropRef.current) {
      if (!drop) {
        setDrop(true);
        dropRef.current.style.display = "flex"; // Safe to access
        if (plus) {
          plus.style.transform = "rotate(45deg)";
        }
      } else {
        setDrop(false);
        dropRef.current.style.display = "none"; // Safe to access
        if (plus) {
          plus.style.transform = "rotate(0)";
        }
      }
    } else {
      console.error("dropRef is null or not attached to an element");
    }
  };
  const serviceMenu = [
    { id: "1", pathName: "/services/seo-services-in-bangalore", menu: "SEO" },
    {
      id: "2",
      pathName: "/services/on-page-seo-services-in-bangalore",
      menu: "On-Page SEO",
    },
    {
      id: "3",
      pathName: "/services/off-page-seo-services-in-bangalore",
      menu: "Off-Page SEO",
    },
    {
      id: "4",
      pathName: "/services/seo-auditing-services-in-bangalore",
      menu: "SEO Auditing",
    },
    {
      id: "5",
      pathName: "/services/seo-consultation-services-in-bangalore",
      menu: "SEO Consultation",
    },
    {
      id: "6",
      pathName: "/services/local-seo-services-in-bangalore",
      menu: "GMB",
    },
  ];
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
              {serviceMenu.map((x) => (
                <li key={x.id}>
                  <Link
                    href={x.pathName}
                    className={pathname === x.pathName ? "active" : ""}
                  >
                    {x.menu}
                  </Link>
                </li>
              ))}
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
      {/* -----------------------respMenu------------------------------- */}
      <div className="menu-content2">
        <MdMenu className="menuIcon" onClick={showSideBar} />
        <div className="resp-Menu">
          <div className="inner-RespMenu">
            <li>
              <div className="inner-RespMenuHead">
                <Image src={logo} alt="logo" className="exit" />
                <HiMiniXMark className="innerResp-MenuHeadIco" onClick={hideSideBar}/>
              </div>{" "}
              <Link href="/" className={pathname === "/" ? "active" : ""} onClick={hideSideBar}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={pathname === "/about-us" ? "active" : ""} onClick={hideSideBar}
              >
                Projects{" "}
              </Link>
            </li>
            <li>
              <div className="respMenuList">
                <Link
                  href="/services"
                  className={pathname === "/services" ? "active" : ""}onClick={hideSideBar}
                >
                  Services
                </Link>
                <span>
                  <AiOutlinePlus className="plus" onClick={handleDrop} />
                </span>
              </div>
              {/* ---------------------------respDropDown-------------------------------------------- */}
              <div className="respDrop" ref={dropRef}>
                <ul>
                  {serviceMenu.map((x) => (
                    <li key={x.id}>
                      <Link
                        href={x.pathName}
                        className={pathname === x.pathName ? "active" : ""}onClick={hideSideBar}
                      >
                        {x.menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              {" "}
              <Link
                href="/about-us"
                className={pathname === "/about-us" ? "active" : ""}onClick={hideSideBar}
              >
                About Us
              </Link>
            </li>

            <li>
              {" "}
              <Link
                href="/contact-us"
                className={pathname === "/contact-us" ? "active" : ""}onClick={hideSideBar}
              >
                Contact Us
              </Link>
            </li>

            <li className="menuContainerBtn-Container">
              <div className="menuContainerBtn">
                {" "}
                <Link href="/">
                  <button onClick={handlePopUp}>SPEAK TO EXPERT </button>
                </Link>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
