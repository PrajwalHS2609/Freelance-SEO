"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Arrasuites from "./TestimonialImg/Arrasuites.png";
import newLyf from "./TestimonialImg/NewLyf-OverSeas.png";
import unichrone from "./TestimonialImg/Unichrone.png";
import gvg from "./TestimonialImg/DrGVG-Aesthetic-Clinics.png";
import rating from "./TestimonialImg/rating.png";
import { FaQuoteRight } from "react-icons/fa";

export default function HomeTestimonialMain() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const [showDots, setShowDots] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth > 768); // Adjust the width threshold as needed
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonialData = [
    {
      id: 1,
      src: Arrasuites,
      alt: "Arrasuites",
      para: "I would say, TrySeoServices is one of the top Digital Marketing companies in Bangalore offering, quality services at competitive pricing. It's been 3 years with them. And we are satisfied with their work and coordination. Highly Recommended!!",
      name: "Sanath Roy",
      designation: "Owner of Arrasuites",
    },
    {
      id: 2,
      src: newLyf,
      alt: "newLyf",
      para: "TrySeoServices is one of the greatest solutions for generating a high return on investment for my business at a low cost across all Digital Media Platforms. For more than a year, the TrySeoServices team managed our PPC advertising and content marketing. We are really pleased with the return on investment and the results. They are quick to incorporate suggestions and strive to offer more than what they promise. Looking forward to collaborating with them again!",
      name: "Dr.Vinit Kumar",
      designation: "Managing Director",
    },
    {
      id: 3,
      src: unichrone,
      alt: "unichrone",
      para: "Choosing TrySeoServices was my best decision. Their team discovered and shortlisted keywords for my business, and most of the keywords began ranking on the top page of Google within 3–4 months. TrySeoServices is to be commended for generating additional revenue for me via Google. Your SEO services are outstanding!!",
      name: "Santhosh",
      designation: "Global Training-Head",
    },
    {
      id: 4,
      src: gvg,
      alt: "gvg",
      para: "Working with TrySEOServices has been a game-changer for our business. Their expertise and dedication to optimizing our online presence have significantly improved our search engine rankings and, in turn, our traffic and conversions. Their team is not only highly knowledgeable but also incredibly responsive and attentive to our unique needs. If you're looking for a partner to elevate your digital presence, I highly recommend Freelance SEO Services. They deliver results that truly make a difference.",
      name: "Dr. Gunasekar Vuppalapati",
      designation: "Owner",
    },
  ];

  return (
    <div className="homeTestimonialMain-container">
      <Carousel
        responsive={responsive}
        swipeable
        draggable
        showDots={showDots}
        autoPlay={true}
        ssr
        infinite
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="1s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {testimonialData.map((x) => (
          <div className="homeTestimonialMain-content" key={x.id}>
            <div className="homeTestimonialMain-item">
              <Image src={rating} alt="" />
            </div>
            <div className="homeTestimonialMain-item">
              <p>{x.para}</p>
            </div>
            <div className="homeTestimonialMain-item">
              <div className="homeTestimonialMain-itemWrapper">
                <div className="homeTestimonialMain-itemImg">
                  <Image
                    src={x.src}
                    alt={x.alt}
                    // width={150}
                    // height={150}
                    // style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="homeTestimonialMain-itemName">
                  <h3>{x.name}</h3>
                  <b>{x.designation}</b>
                </div>
              </div>
              <div className="homeTestimonialMain-itemQuote">
                <FaQuoteRight className="quote"/>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
