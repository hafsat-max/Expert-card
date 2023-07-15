import React, { useContext } from "react";
import { IXperts, TableData } from "../create-card/table";
import NoCards from "./no-cards";
import { AuthContext, ContextType } from "@/pages/_app";

// first last card_ email
const CardListContainer = ({ xperts }: { xperts: IXperts[] }) => {
  return xperts.length ? (
    <TableData xperts={xperts} />
  ) : (
    <div className=" w-[90%] mx-auto max-w-[1440px] bg-white flex justify-center items-center">
      <NoCards />
    </div>
  );
};

export default CardListContainer;
