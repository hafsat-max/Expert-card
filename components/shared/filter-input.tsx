import { TextInput } from "@mantine/core";
import React from "react";
import Image from "next/image";

const FilterInput = () => {
  return (
    <div className="flex w-[clamp(400px,37%,543px)] h-[60px] border border-[#EBEBEB] rounded-xl ">
      <TextInput
      className="flex-1 self-center"
        placeholder="Search by Xpert Name / Phone Number / E-mail"
        icon={
          <Image
            src={"/shared/search.svg"}
            width={14.25}
            height={14.25}
            alt="search"
          />
        }
        styles={{
          input: {
            outline: "none !important",
            border: "none !important",
            flex:"1 !important"
          },
          root:{
            fontSize: '12px !important'
          }
        }}
      />

      <div className="flex justify-center items-center gap-3 bg-engineering hover:bg-blood-red text-white px-[26px] rounded-tr-xl rounded-br-xl cursor-pointer">
        <Image src={'/shared/filter.svg'} width={16} height={16} alt="filter"/>
        <span>Filter</span>
      </div>
    </div>
  );
};

export default FilterInput;
