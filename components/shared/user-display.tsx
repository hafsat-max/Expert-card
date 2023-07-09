import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

const UserDisplay = () => {
  return (
    <section className="flex justify-between items-center gap-8  border-l-2 border-[#E8ECEF] pl-7 py-[15px]">
      <Image
        src={"/shared/notification.svg"}
        alt="notification"
        width={30}
        height={30}
      />

      <div className={clsx("flex gap-2 items-center")}>
        <Image src={"/shared/person.svg"} width={32} height={32} alt="person" />
        <p className=" text-spanish-gray font-medium">
          Welcome, <span className=" text-davy-grey">Gloria</span>
        </p>
      </div>

      <Link href={'/login'}>
        <Image src={"/shared/logout.svg"} width={29} height={29} alt="person" />
      </Link>
    </section>
  );
};

export default UserDisplay;
