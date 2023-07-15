import React, { useContext } from "react";
import NoCards from "./no-cards";
import { IXperts } from "../create-card/table";
import { AuthContext, ContextType } from "@/pages/_app";
import { clsx } from "@mantine/core";

const LandscapeListContainer = ({ landscapes }: { landscapes: IXperts[] }) => {
  const { setSelectedCard, selectedCard } = useContext(
    AuthContext
  ) as ContextType;
  return landscapes.length ? (
    <div className="bg-white max-w-[1440px] w-full flex-1">
      <div
        className=" grid w-[90%] mx-auto mt-10 justify-center items-center "
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gap: "10px",
          rowGap: "30px",
        }}
      >
        {landscapes?.map((item, idx) => {
          // landscape card type 1
          if (item.card_type === "Landscape1") {
            return (
              <section
              key={idx}
              onClick={() => {
                if (selectedCard.includes(item?.id)) {
                  const filtered = selectedCard.filter(
                    (el) => el !== item?.id
                  );
                  setSelectedCard(filtered);
                }
                else
                setSelectedCard([
                  ...selectedCard,
                  item?.id,
                ]);
              }}
                className="flex cursor-pointer flex-col justify-center items-center gap-1"
              >
                <div
                  className={clsx(
                    selectedCard.includes(item?.id)
                      ? "border-[2px] border-[red]"
                      : "border-[2px] border-[#F5F6F7]",
                    "p-[5px] hover:opacity-90 rounded-xl"
                  )}
                >
                  <div className=" bg-white w-[272px] flex flex-col h-[169.72px] border rounded-lg overflow-hidden">
                    {/* top image */}
                    <div
                      style={{
                        backgroundImage: "url('/cornfield.png')",
                      }}
                      className=" bg-cover bg-no-repeat flex-1  flex"
                    >
                      <div className=" bg-white w-fit h-fit mt-4 p-1 rounded-tr-[10px] rounded-br-[10px]">
                        <img
                          src="/afex-logo.svg"
                          alt=""
                          className="h-[15px] pl-2 pr-1"
                        />
                      </div>
                    </div>

                    {/* bottom image */}
                    <div
                      className="  bg-cover bg-no-repeat flex justify-between px-4 "
                      style={{
                        backgroundImage: "url('/grey-gradient.png')",
                      }}
                    >
                      <div className=" py-2">
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
                </div>
                <p className="font-bold text-[#7C827D] text-base pt-2">
                  {item.full_name}
                </p>
                <p className=" text-[12px] text-[#B4B4B0] font-bold">
                  {item.created_date}
                </p>
              </section>
            );
          } else {
            // landscape 2 card type
            return (
              <section
              key={idx}
                onClick={() => {
                  if (selectedCard.includes(item?.id)) {
                    const filtered = selectedCard.filter(
                      (el) => el !== item?.id
                    );
                    setSelectedCard(filtered);
                  }
                  else
                  setSelectedCard([
                    ...selectedCard,
                    item?.id,
                  ]);
                }}
                 className=" cursor-pointer flex flex-col justify-center items-center gap-1"
              >
                <div
                  className={clsx(
                    selectedCard.includes(item?.id)
                      ? "border-[2px] border-[red]"
                      : "border-[2px] border-[#F5F6F7]",
                    "p-[5px] hover:opacity-90 rounded-xl"
                  )}
                >
                  <div
                    className={
                      " bg-white w-[272px] flex gap-10 justify-center p-3 items-center  h-[169.72px] border rounded-lg overflow-hidden bg-cover"
                    }
                    style={{
                      backgroundImage: "url('/grey-gradient.png')",
                    }}
                  >
                    <img
                      src={item.qr_code}
                      className=" w-[70px] h-[70px]"
                    ></img>
                    <div className="w-[1px] h-full bg-white"></div>
                    <div className=" relative">
                      <h2 className=" text-white  font-medium text-20 ">
                        {item.first_name}
                      </h2>
                      <h3 className="text-white  font-bold text-20 ">
                        {" "}
                        {item.last_name}
                      </h3>
                      <img
                        src="/afex-logo.svg"
                        alt=""
                        className="w-[147px] h-[12px] absolute top-[90px] left-[19px]"
                      />
                    </div>
                  </div>
                </div>

                <p className="font-bold text-[#7C827D] text-base pt-2">
                  {item.full_name}
                </p>
                <p className=" text-[12px] text-[#B4B4B0] font-bold">
                  {item.created_date}
                </p>
              </section>
            );
          }
        })}
      </div>
    </div>
  ) : (
    <div className=" !w-screen mx-auto max-w-[1440px] bg-white flex justify-center items-center">
      <NoCards />
    </div>
  );
};

export default LandscapeListContainer;
