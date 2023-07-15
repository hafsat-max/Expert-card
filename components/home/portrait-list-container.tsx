import React, {useContext } from "react";
import { AuthContext, ContextType } from "@/pages/_app";
import NoCards from "./no-cards";
import clsx from "clsx";

interface IGetData {
  id: number;
  full_name: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  profile_picture: string;
  role: string;
  tribe: string;
  qr_code: string;
  address: string;
  card_type: string;
  phone_number: string;
  created_date: string;
  is_active: boolean;

}

const PortraitListContainer = ({ portraits }: { portraits: IGetData[] }) => {
  const { setSelectedCard, selectedCard } = useContext(
    AuthContext
  ) as ContextType;
  return portraits.length ? (
    <section className="bg-white max-w-[1440px] flex-1 w-full">
      <div
        className=" grid w-[90%] mx-auto mt-10 justify-center items-center "
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "10px",
          rowGap: "30px",
        }}
      >
        {portraits?.map((item) => {
          if (item.card_type === "Portrait1") {
            return (
              // portrait card type1
              <section className="flex flex-col justify-center items-center gap-1"
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
              >
                <div
                  className={clsx(
                    selectedCard.includes(item?.id)
                      ? "border-[2px] border-[red]"
                      : "border-[2px] border-[#F5F6F7]",
                    "p-[5px] hover:opacity-90 rounded-xl"
                  )}
                >
                <div className="  w-[176px] h-[310px] flex flex-col gap-3 items-center bg-cover bg-center  justify-center border border-solid rounded-lg relative"
                style={{
                  backgroundImage: "url(/create-card/portrait-bg.png)"
                }}
                >
      

                  <div className=" w-[100px] h-[100px] rounded-full bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${item.profile_picture})`
                    }}

                  ></div>
                  <div>
                    <h2 className=" font-medium text-20 text-center text-white ">
                      {item.first_name}
                    </h2>
                    <h3 className="  font-bold text-20 text-center text-white">
                      {" "}
                      {item.last_name}
                    </h3>
                  </div>
                  <p className=" absolute bottom-3 text-[8px] text-white">
                    www.afexnigeria.com
                  </p>
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
            return (
              <section className="flex flex-col justify-center items-center gap-1"
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
              >
                <div
                className={clsx(
                  selectedCard.includes(item?.id)
                    ? "border-[2px] border-[red]"
                    : "border-[2px] border-[#F5F6F7]",
                  "p-[5px] hover:opacity-90 rounded-xl"
                )}
                >
                <div className="  w-[176px] h-[310px] flex flex-col justify-center gap-3 items-center bg-cover bg-center  border border-solid rounded-lg relative"
                style={{
                  backgroundImage: "url(/create-card/portrait-bg.png)"
                }}
               
                >
                  <div className="p-2 ">
                  <img src={item.qr_code} alt="" width={90} height={90} />
                  </div>
                  <div>
                    <h2 className=" font-medium text-20 text-center text-white ">
                      {item.first_name}
                    </h2>
                    <h3 className="  font-bold text-20 text-center text-white">
                      {" "}
                      {item.last_name}
                    </h3>
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
    </section>
  ) : (
    <div className=" !w-screen mx-auto max-w-[1440px] bg-white flex justify-center items-center">
      <NoCards />
    </div>
  );
};

export default PortraitListContainer;
