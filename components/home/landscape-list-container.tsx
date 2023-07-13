import React from "react";
import NoCards from "./no-cards";
import { IXperts } from "../create-card/table";

const LandscapeListContainer = ({ landscapes }: { landscapes: IXperts[] }) => {
  return landscapes.length ? (
    <div className="bg-white max-w-[1440px] w-full">
      <div
        className=" grid  w-[90%] mx-auto mt-10 justify-center items-center"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gap: "10px",
        }}
      >
        {landscapes?.map((item) => (
          <div className=" bg-white w-[272px] flex flex-col h-[169.72px] border rounded-lg overflow-hidden">
            {/* top image */}
            <div
              style={{
                backgroundImage: "url('/cornfield.png')",
              }}
              className=" bg-cover bg-no-repeat flex-1  flex"
            >
                <div className=" bg-white w-fit h-fit mt-4">
                    <img src="/afex-logo.svg" alt="" height={40}/>
                </div>
            </div>

            {/* bottom image */}
            <div
              className="  bg-cover bg-no-repeat flex justify-between px-4 "
              style={{
                backgroundImage: "url('/grey-gradient.png')",
              }}
            >
              <div>
                <h2 className=" text-white  font-medium text-20 ">
                  {item.first_name}
                </h2>
                <h3 className="text-white  font-bold text-20 ">
                  {" "}
                  {item.last_name}
                </h3>
              </div>

              <img
                src={item.qr_code}
                alt=""
                className=" w-[70px] h-[70px] mt-[-40px] border-[20  px] border-[#54585B]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className=" !w-screen mx-auto max-w-[1440px] bg-white flex justify-center items-center">
      <NoCards />
    </div>
  );
};

export default LandscapeListContainer;
