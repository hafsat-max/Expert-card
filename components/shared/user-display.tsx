import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useDisclosure } from "@mantine/hooks";

import Logout from "../modals/logout";
import { UserDetails } from "@/pages/_app";
import ActivityLog from "../modals/activity-log";

const UserDisplay = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [log, setLog] = useState(false);

  const [payload, setPayload] = useState<UserDetails>({
    profile_picture: "",
    first_name: "",
  });

  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setPayload(JSON.parse(localStorage.getItem("my-user") as string));
    }
  }, []);

  return (
    <section className="flex justify-between items-center gap-8  border-l-2 border-[#E8ECEF] pl-7 py-[15px]">
      <ActivityLog log={log} setLog={setLog} />

      <div className={clsx("flex gap-2 items-center ")}>
        <img
          src={payload?.profile_picture}
          width={32}
          height={32}
          alt="person"
          className="rounded-full w-[32px] h-[32px]"
        />
        <p className=" text-spanish-gray font-medium">
          Welcome,{" "}
          <span className=" text-davy-grey">{payload?.first_name}</span>
        </p>
      </div>

      <Image
        src={"/shared/logout.svg"}
        width={29}
        height={29}
        alt="person"
        onClick={open}
        className=" cursor-pointer"
      />
      <Logout opened={opened} close={close} />
    </section>
  );
};

export default UserDisplay;
