import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CreateCard } from "../modals/create-card";

import emptywallet from "../../public/home/empty-wallet.png";

const NoCards = ({ fetchData }: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Image src={emptywallet} alt="wallet" width={212} height={300} />
      <h3 className=" text-davy-grey text-20 text-center font-semibold">
        Create Card
      </h3>
      <p className=" text-base text-spanish-gray text-center max-w-[324px]">
        You will need to create a card before you can view the list of cards you
        have created.
      </p>

      <Button
        onClick={open}
        className=" flex justify-between items-center gap-3 py-[12px] px-[20px] h-[48px]"
        styles={{
          root: {
            background: "#C81107 !important",
            "&:hover": {
              background: "#6D0802 !important ",
            },
          },
          label: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          },
        }}
      >
        <Image src={"/shared/plus.svg"} width={12} height={12} alt="plus" />
        New Card
      </Button>

      <CreateCard fetchData={fetchData} opened={opened} close={close} />
    </div>
  );
};

export default NoCards;
