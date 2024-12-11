"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import newLyf from "./clientsImgs/NewLyf-OverSeas.png";
import prizma from "./clientsImgs/Prizma-Academy.png";
import unichrone from "./clientsImgs/Unichrone.png";
import goodway from "./clientsImgs/Goodway-Attestation.png";
import gvg from "./clientsImgs/DrGVG-Aesthetic-Clinics.png";
import active4 from "./clientsImgs/Activ4Pets.png";
import kingsClub from "./clientsImgs/Kings-Club.png";
import boutique from "./clientsImgs/Mayukha-Boutique.png";
import rbc from "./clientsImgs/RBC-Paramedical-College.png";
import arra from "./clientsImgs/Arrasuites.png";
import mm from "./clientsImgs/MM.png";
import scent from "./clientsImgs/Scent.png";
import buildurspace from "./clientsImgs/BuildUrSpace.png";
import "./HomeHeader.css";

export default function HomeHeaderClient() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
    <div className="homeHeader-client">
      <div className="homeHeader-clientContent">
        <h3>
          <span>Success Stories</span> in Our Portfolio
        </h3>
      </div>
      <div className="homeHeader-clientContent">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="1s ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <div className="item">
              <Image src={newLyf} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <Image src={prizma} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <Image src={unichrone} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <Image src={goodway} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <Image src={gvg} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <Image src={active4} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <Image src={kingsClub} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <Image src={boutique} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <Image src={rbc} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <Image src={arra} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <Image src={mm} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <Image src={scent} alt="scent" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <Image src={buildurspace} alt="buildurspace" loading="lazy" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
