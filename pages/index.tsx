import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LandingCarousel from "@/components/home/carousel";

import Nav from "@/components/shared/nav";
import TextSection from "@/components/home/text-section";
// import grey from '@/components/home/grey-icon.svg';

const index = () => {
  return (
    <main className="h-screen flex flex-col  ">
      <header
        className="h-10 bg-engineering bg-cover bg-center"
        style={{
          background: "url('/home/scroll.png')",
        }}
      ></header>

      {/*  */}
      <section
        className=" bg-cover bg-no-repeat bg-top-center flex-1 flex flex-col relative "
        style={{ backgroundImage: "url('/home/background.png')" }}
      >
        {/* logo header */}
        <Nav style="w-[94vw] mx-auto max-w[1440px] "></Nav>

        {/* landing page main section*/}

        <section className="flex items-center flex-1 ">
          <div className=" flex justify-between relative w-[94vw] mx-auto max-w-[1440px]">
            {/* texts section */}
            <TextSection />

            {/* carousel section */}
            <LandingCarousel />
          </div>
        </section>

        <img src="home/big-circle.svg" className="absolute left-[500px] bottom-[283px]"/>
        <img src="home/big-icon.svg" className="absolute right-[555px] bottom-[104px]" />
        <img src="home/small-circle.svg" className="absolute right-[505px] top-[240px]"/>
        <img src="home/grey-icon.svg" className="absolute right-[426px] top-[102px]"/>
        <img src="home/orange-circle.svg" className="absolute top-[46px] right-[83px]"/>
        
      </section>

    </main>
  );
};

export default index;
