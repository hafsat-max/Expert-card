import React, { useEffect, useState } from "react";

import Nav from "@/components/shared/nav";
import UserDisplay from "@/components/shared/user-display";
import CardListing from "@/components/shared/card-listing";
import ViewCard from "@/components/shared/view-card";
import FilterNav from "@/components/shared/filter-nav";
import FilterIcons from "@/components/shared/filter-icons";
import FilterInput from "@/components/shared/filter-input";
import { Edit2, LogoutCurve } from "iconsax-react";
import Disable from "@/components/icons/disable";
import NoCards from "@/components/home/no-cards";
import { TableData } from "@/components/create-card/table";
import axios from "axios";

const Homepage = () => {
  const [xperts, setXperts] = useState([]);

  const fetchData = () => {
    const token = JSON.parse(localStorage.getItem("my-user") as string);
    axios({
      url: "https://web-production-5804.up.railway.app/api/card/expert_cards/",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then(function ({ data }) {
        setXperts(data.results);
      })
      .catch(function (error) {});
  };

  useEffect(() => {
    fetchData()
    return () => {};
  }, []);

  return (
    <section className=" bg-[#F5F5F6] flex flex-col gap-4 h-screen">
      <header className="bg-white">
        <Nav style="!pt-0 h-[63px]  my-auto flex justify-between items-center  w-[94vw] mx-auto max-w-[1440px]">
          <UserDisplay />
        </Nav>
      </header>

      <main className="flex-1 flex flex-col max-w-[1440px] mx-auto w-full gap-1 ">
        {/* card listing */}
        <CardListing>
          <ViewCard fetchData={fetchData}/>
        </CardListing>

        {/* filter nav */}
        <FilterNav>
          <FilterIcons />
          <FilterInput />

          <div className="flex items-center gap-3">
            <div className=" flex justify-center items-center rounded-full border-2 border-[#F2F2F2] w-[40px] h-[40px]">
              <Edit2 size="20" color="#C9C8C6" className="font-bold" />
            </div>

            <div className=" flex justify-center items-center rounded-full   border-2 border-[#F2F2F2] w-[40px] h-[40px]">
              <LogoutCurve
                size="22"
                color="#C9C8C6"
                className=" rotate-[-90deg]"
              />
            </div>

            <div className=" flex justify-center items-center rounded-full border-2 border-[#F2F2F2] w-[40px] h-[40px]">
              <Disable />
            </div>
          </div>
        </FilterNav>

        {/* cards display section */}
        {xperts.length ? (
          <TableData xperts={xperts} />
        ) : (
          <div className="max-w bg-white flex-1 flex justify-center items-center">
            <NoCards />
          </div>
        )}
      </main>
    </section>
  );
};

export default Homepage;
