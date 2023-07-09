import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LandingCarousel from "@/components/home/carousel";

import Nav from "@/components/shared/nav";
import TextSection from "@/components/home/text-section";
// import grey from '@/components/home/grey-icon.svg';

const index = () => {
  return (
    <main className="h-screen flex flex-col ">
      <header className="h-10 bg-engineering relative ">
        <Image
          src={"/header-icon1.png"}
          width={509}
          height={509}
          alt="transparent icon"
          className="absolute left-[15.43rem]"
        />
        <Image
          src={"/header-icon2.png"}
          width={266}
          height={266}
          alt="transparent icon"
          className="absolute right-[18rem]"
        />
        <Image
          src={"/header-icon3.png"}
          width={103}
          height={103}
          alt="transparent icon"
          className="absolute right-[8.875rem]"
        />
      </header>

      {/*  */}
      <section
        className=" bg-cover bg-no-repeat bg-top-center flex-1 flex flex-col "
        style={{ backgroundImage: "url('/home/background.png')" }}
      >
        {/* logo header */}
        <Nav style="w-[94vw] mx-auto max-w[1440px] ">

        </Nav>

        {/* landing page main section*/}

        <section className="flex items-center flex-1 ">
          <div className=" flex justify-between relative w-[94vw] mx-auto max-w-[1440px]">
            {/* texts section */}
            <TextSection />

            {/* carousel section */}
            <LandingCarousel />

          </div>
        </section>
      </section>
    </main>
  );
};

export default index;
