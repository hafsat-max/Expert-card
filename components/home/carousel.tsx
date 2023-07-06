import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { PietileCarousel } from "pietile-carousel";

import x from "@/public/home/xpert.png";
import y from "@/public/home/xpert1.png";

const LandingCarousel = () => {
  return (
    <div className=" max-w-[640px]">
      <div className="flex items-center ">
        {/* <Carousel dynamicHeight showIndicators={false} showArrows={false} autoPlay>
      <Image src={currentIndex === 0 ? x : y}  alt="image" />
      <Image src={currentIndex === 0 ? y : x}  alt="image"/>
    </Carousel> */}

        <PietileCarousel autoplayInterval={3000}>
          <Image src={x} alt="image" />
          <Image src={y} alt="image" />
        </PietileCarousel>
      </div>
    </div>
  );
};

export default LandingCarousel;
