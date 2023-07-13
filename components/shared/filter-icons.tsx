import React, { useState } from "react";
import Image from "next/image";
import Task, { Istyle } from "../icons/task";
import Landscape from "../icons/landscape";
import Portrait from "../icons/portrait";
import { IModalProps } from "../modals/create-card";
import { InnerPersonal } from "../modals/personal-info";

export interface IStates {
  selected: number,
  setSelected:  React.Dispatch<React.SetStateAction<number>>
}

const FilterIcons = ({selected, setSelected}:IStates) => {
  const list = [
    ({ onClick, color }: Istyle) => <Task color={color} onClick={onClick} />,
    ({ onClick, color }: Istyle) => <Landscape color={color} onClick={onClick} />,
    ({ onClick, color }: Istyle) => <Portrait color={color} onClick={onClick} />,
  ];

  return (
    <section className=" flex items-center gap-4 border border-[#F5F6F7] p-3 rounded-[100px] cursor-pointer">
      {list.map((Item, index) => (
        <Item
          color={selected === index ? "#C81107" : "#9FA19C"}
          onClick={() => setSelected(index)}
        />
      ))}
    </section>
  );
};

export default FilterIcons;
// ""
