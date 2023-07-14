import React, { useState } from "react";

import Task, { Istyle } from "../icons/task";
import { Edit } from "iconsax-react";
import Download from "../icons/download";
import Delete from "../icons/delete";
import clsx from "clsx";

export interface IStates {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const RightFilterIcons = ({ selected, setSelected }: IStates) => {
  const list = [
    ({ onClick, color }: Istyle) => <Edit color={color} onClick={onClick} />,
    ({ onClick, color }: Istyle) => (
      <Download color={color} onClick={onClick} />
    ),
    ({ onClick, color }: Istyle) => <Delete color={color} onClick={onClick} />,
  ];

  return (
    <section className=" flex items-center gap-3 cursor-pointer">
      {list.map((Item, index) => (
        <div className={clsx("flex justify-center items-center rounded-full border-2  w-[35px] h-[35px]", selected===index?'border-[#C81107]': 'border-[#F2F2F2]' )}>
          <Item
            color={selected === index ? "#C81107" : "#9FA19C"}
            onClick={() => setSelected(index)}
          />
        </div>
      ))}
    </section>
  );
};

export default RightFilterIcons;

// #C9C8C6
// #C9C8C6
// #C9C8C6
