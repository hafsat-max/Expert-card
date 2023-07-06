import React, { ReactHTMLElement } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = ({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: string;
}) => {
  return (
    <nav className={`pt-12 self-start  max-w-[1440px] ${style}`}
        
    >
      <Link href={'/login'}>
        <Image src={"/afex-logo.svg"} alt="logo" width={100} height={20} />
      </Link>
      {children}
    </nav>
  );
};

export default Nav;
