import React from "react";
import Image from "next/image";

const LandingHeader = () => {
  return (
    <section className="pt-12 flex justify-between items-center pr-20">
      <Image src={"/afex-logo.svg"} alt="logo" width={100} height={20} />
      <Image src={"/orange-circle.svg"} width={30} height={30} alt="icon" />
    </section>
  );
};

export default LandingHeader;
