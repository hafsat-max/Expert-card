import { Button } from "@mantine/core";
import React from "react";
import Image from "next/image";
import { CreateCard } from "@/components/modals/create-card";
import { useDisclosure } from "@mantine/hooks";

const ViewCard = ({ fetchData }: any) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section className="flex justify-between items-center gap-8">
      <Button
        styles={{
          root: {
            color: "#C81107 !important",
            border: "1px solid #C81107 !important",
            height: "50px",
            "&:hover": {
              color: "#6D0802 !important ",
              background: "white !important",
              border: "1px solid #6D0802 !important",
            },
          },
        }}
      >
        View Address
      </Button>

      <Button
        onClick={open}
        className=" flex justify-between items-center gap-3"
        styles={{
          root: {
            height: "50px",
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
    </section>
  );
};

export default ViewCard;
