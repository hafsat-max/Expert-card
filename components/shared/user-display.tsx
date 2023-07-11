import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { AuthContext, ContextType, UserDetails } from "@/pages/_app";

const UserDisplay = () => {
  const [payload, setPayload] = useState<UserDetails> ({
    profile_picture: "",
    first_name : '',
  })

  useEffect(() => {
    if(localStorage.getItem("my-user")){
  setPayload(JSON.parse(localStorage.getItem("my-user") as string))
}
}, [])

const handleLogout = () => {
  localStorage.clear();
  window.location.href = "/login";
};

  return (
    <section className="flex justify-between items-center gap-8  border-l-2 border-[#E8ECEF] pl-7 py-[15px]">
      <Image
        src={"/shared/notification.svg"}
        alt="notification"
        width={30}
        height={30}
      />

      <div className={clsx("flex gap-2 items-center ")}>
        <img src={payload?.profile_picture} width={32} height={32} alt="person" className="rounded-full w-[32px] h-[32px]" />
        <p className=" text-spanish-gray font-medium">
          Welcome, <span className=" text-davy-grey">{payload?.first_name}</span>
        </p>
      </div>


        <Image src={"/shared/logout.svg"} width={29} height={29} alt="person"  onClick={handleLogout} className=" cursor-pointer"/>

    </section>
  );
};

export default UserDisplay;
