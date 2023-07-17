import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

const TextSection = () => {
  return (
    <div className="flex flex-col">
      <h2 className=" font-switzer text-davy-grey font-semibold leading-one tracking-one text-[clamp(3.5rem,6vw,5rem)]">
        Smart
      </h2>
      <h2 className="font-switzer text-engineering font-semibold leading-one tracking-one text-[clamp(3.5rem,6vw,5rem)] ">
        Business Card
      </h2>
      <p className=" text-davy-grey font-switzer pt-[1.375rem] text-20 max-w-[526px]">
        Create stylish, customizable and QR code supported digital business
        cards for Xperts
      </p>

      <Link href={"/login"}>
        <Button
          className=" self-start mt-16 "
          styles={{
            root: {
              background:
                "linear-gradient(168.79deg,#E1261C 28.64%,#8A0B04 136.7%) !important",
              height: "50px",
              "&:hover": {
                background: "#6D0802 !important ",
              },
            },
          }}
        >
          Create now
        </Button>
      </Link>
    </div>
  );
};

export default TextSection;
