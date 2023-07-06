import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-10 bg-engineering relative">
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
  );
};

export default Header;
