import React from "react";

interface ContentProps {
  children?: React.ReactNode;
}


const FilterNav = ({ children }: ContentProps) => {
  return (
    <section className=" mx-auto max-w-[1440px] bg-white  py-[3.12vh] flex justify-between items-center w-full ">
      <div className="flex justify-between items-center w-[90%] mx-auto">

      {children}
      </div>
    </section>
  );
};

export default FilterNav;
