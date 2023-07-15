import { TextInput } from "@mantine/core";
import React from "react";
import Image from "next/image";
import { IStates } from "./filter-icons";
import axios from "axios";

interface IQuery {
  tableQuery: string;
  landscapeQuery: string;
  portraitQuery: string;
}

interface IFilterState {
  filter: string;
  selected?: number;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  handleFilter: () => void;
  query: IQuery;
  setQuery: (val: IQuery) => void;
}

const FilterInput = ({
  filter,
  setFilter,
  selected,
  handleFilter,
  query,
  setQuery,
}: IFilterState) => {
  return (
    <div className="flex w-[clamp(400px,37%,300px)] h-[60px] border border-[#EBEBEB] rounded-xl ">
      <TextInput
        className="flex-1 self-center"
        value={
          selected === 0
            ? query.tableQuery
            : selected === 1
            ? query.landscapeQuery
            : query.portraitQuery
        }
        onChange={(e) => {
          console.log(e.target.value, 'value')
          if (selected === 0) {
            setQuery({
              ...query,
              tableQuery: e.target.value,
            })
            if(!e.target.value){
              handleFilter()
            }
          } else if (selected === 1) {
            setQuery({
              ...query,
              landscapeQuery: e.target.value,
            });
          } else {
            setQuery({
              ...query,
              portraitQuery: e.target.value,
            });
          }
        }}
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
            flex: "1 !important",
          },
          root: {
            fontSize: "12px !important",
          },
        }}
      />

      <div
        className="flex justify-center items-center gap-3 bg-engineering hover:bg-blood-red text-white px-[26px] rounded-tr-xl rounded-br-xl cursor-pointer"
        onClick={() => handleFilter()}
      >
        <Image src={"/shared/filter.svg"} width={16} height={16} alt="filter" />
        <span>Filter</span>
      </div>
    </div>
  );
};

export default FilterInput;
