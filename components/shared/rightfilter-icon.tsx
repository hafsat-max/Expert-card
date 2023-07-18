import React, { useContext } from "react";
import { useDisclosure } from "@mantine/hooks";
import { toast } from "react-toastify";
import clsx from "clsx";

import Download from "../icons/download";
import Delete from "../icons/delete";
import { AuthContext, ContextType } from "@/pages/_app";
import Task, { Istyle } from "../icons/task";
import { CreateCard } from "../modals/create-card";
import Edit from "../icons/edit";

export interface IStates {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}
export interface IFunctions {
  fetchData: () => void;
  fetchPortrait: () => void;
  fetchLandscape: () => void;
}

const RightFilterIcons = ({
  fetchData,
  fetchLandscape,
  fetchPortrait,
}: IFunctions) => {
  const { selectedCard } = useContext(AuthContext) as ContextType;
  const [opened, { open, close }] = useDisclosure(false);

  const list = [
    ({ color }: Istyle) => (
      <Edit
        color={color}
        fetchData={fetchData}
        fetchPortrait={fetchPortrait}
        fetchLandscape={fetchLandscape}
        onClick={() => {
          if (selectedCard.length > 1) {
            toast.error("You cannot edit more than one card", {
              autoClose: 2000,
            });
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
        fetchData={fetchData}
        fetchPortrait={fetchPortrait}
        fetchLandscape={fetchLandscape}
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

      <CreateCard
        opened={opened}
        fetchData={fetchData}
        close={close}
        editId={selectedCard[0]}
      />
    </section>
  );
};

export default RightFilterIcons;
