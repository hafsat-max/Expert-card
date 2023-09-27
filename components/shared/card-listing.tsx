import { usePortal } from "@ibnlanre/portal";
import React, { ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
}
const CardListing = ({ children }: TextProps) => {
  const [cardLength] = usePortal<number>(["card", "length"], 0);

  return (
    <div
      className="max-w bg-white rounded-tl-[1.25rem] rounded-tr-[1.25rem]  py-[3.12vh] flex justify-between items-center"
      style={{ minHeight: "" }}
    >
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <h3 className="text-davy-grey text-base font-bold flex items-center gap-1">
          <span>Cards Listing</span>
          <span>-</span>
          <span>({cardLength})</span>
        </h3>
        {children}
      </div>
    </div>
  );
};

export default CardListing;
