import React, { useState, useContext } from "react";

import Task, { Istyle } from "../icons/task";
import { Edit } from "iconsax-react";
import Download from "../icons/download";
import Delete from "../icons/delete";
import clsx from "clsx";
import { AuthContext, ContextType } from "@/pages/_app";
import { toast } from "react-toastify";
import axios from "axios";
import { CreateCard } from "../modals/create-card";
import { useDisclosure } from "@mantine/hooks";

export interface IStates {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const RightFilterIcons = () => {
  const { selectedCard } = useContext(AuthContext) as ContextType;
  const [opened, { open, close }] = useDisclosure(false);

  const list = [
    ({ color }: Istyle) => (
      <Edit
        color={color}
        onClick={() => {
          if (selectedCard.length > 1) {
            toast.error("You cannot edit more than one card", {autoClose: 2000});
            return;
          }
          open();
          // editCard(selectedCard[0]);
        }}
      />
    ),
    ({ color }: Istyle) => <Download color={color} />,
    ({ color }: Istyle) => (
      <Delete
        selectedCard={selectedCard.length ? selectedCard[0] : 0}
        color={color}
      />
    ),
  ];

  return (
    <section className=" flex items-center gap-3 cursor-pointer">
      {list.map((Item, index) => (
        <div
          key={index}
          className={clsx(
            "flex justify-center items-center rounded-full border-2  w-[35px] h-[35px] border-[#F2F2F2]"
          )}
        >
          <Item color={selectedCard.length ? "#C81107" : "#9FA19C"} />
        </div>
      ))}

      <CreateCard opened={opened} close={close} editId={selectedCard[0]} />
    </section>
  );
};

export default RightFilterIcons;
