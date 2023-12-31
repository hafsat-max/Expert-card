import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PietileCarousel } from "pietile-carousel";

import x from "@/public/home/swipe1.svg";
import y from "@/public/home/swipe2.svg";

const LandingCarousel = () => {
  return (
    <div className=" max-w-[640px]">
      <div className="flex items-center ">
        <PietileCarousel autoplayInterval={3000}>
          <Image src={x} alt="image" />
          <Image src={y} alt="image" />
        </PietileCarousel>
      </div>
    </div>
  );
};

export default LandingCarousel;
