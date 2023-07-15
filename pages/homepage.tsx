import React, { useEffect, useState } from "react";

import Nav from "@/components/shared/nav";
import UserDisplay from "@/components/shared/user-display";
import CardListing from "@/components/shared/card-listing";
import ViewCard from "@/components/shared/view-card";
import FilterNav from "@/components/shared/filter-nav";
import FilterIcons from "@/components/shared/filter-icons";
import FilterInput from "@/components/shared/filter-input";
import axios from "axios";
import CardListContainer from "@/components/home/card-list-container";
import Landscape from "@/components/icons/landscape";
import LandscapeListContainer from "@/components/home/landscape-list-container";
import PortraitListContainer from "@/components/home/portrait-list-container";
import RightFilterIcons from "@/components/shared/rightfilter-icon";
import { table } from "console";
import withAuth from "@/components/protected-route";

const Homepage = () => {
  const [xperts, setXperts] = useState([]);
  const [portraits, setPortraits] = useState([]);
  const [landscapes, setLandscapes] = useState([]);
  const [selected, setSelected] = useState(0);
  const [icons, setIcons] = useState(0);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState("");
  const [query, setQuery] = useState({
    landscapeQuery: "",
    portraitQuery: "",
    tableQuery: "",
  });
  console.log(query);

  // Getting the data of users in a table from the endpoint
  const fetchData = () => {
    const token = JSON.parse(localStorage.getItem("my-user") as string);
    axios({
      url: "https://web-production-9c5b.up.railway.app/api/card/expert_cards/",
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
    fetchData();
    return () => {};
  }, []);
  // End of table data

  // Portrait cards Endpoint fetching
  const fetchPortrait = () => {
    const token = JSON.parse(localStorage.getItem("my-user") as string);
    axios({
      url: "https://web-production-9c5b.up.railway.app/api/card/expert_cards/?card_type=portrait",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then(function ({ data }) {
        setPortraits(data.results);
      })
      .catch(function (error) {});
  };
  useEffect(() => {
    fetchPortrait();
    return () => {};
  }, []);
  // End of portrait endpoint

  // Landscape cards Endpoint fetching
  const fetchLandscape = () => {
    const token = JSON.parse(localStorage.getItem("my-user") as string);
    axios({
      url: "https://web-production-9c5b.up.railway.app/api/card/expert_cards/?card_type=landscape",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then(function ({ data }) {
        setLandscapes(data.results);
      })
      .catch(function (error) {});
  };
  useEffect(() => {
    fetchLandscape();
    return () => {};
  }, []);
  //End of  Landscape cards Endpoint fetching

  // filter for specific cards
  const handleFilter = (val_: string) => {
    console.log(val_);
    const token = JSON.parse(localStorage.getItem("my-user") as string);
    console.log(query.tableQuery, "queries");
    let apiString = "";
    if (selected === 0) {
      apiString = val_
        ? `https://web-production-9c5b.up.railway.app/api/card/expert_cards/?search=${val_}`
        : "https://web-production-9c5b.up.railway.app/api/card/expert_cards/";
    } else if (selected === 1) {
      apiString = val_
        ? `https://web-production-9c5b.up.railway.app/api/card/expert_cards/?card_type=landscape&search=${val_}`
        : "https://web-production-9c5b.up.railway.app/api/card/expert_cards/?card_type=landscape";
    } else {
      apiString = val_
        ? `https://web-production-9c5b.up.railway.app/api/card/expert_cards/?portrait&search=${val_}`
        : "https://web-production-9c5b.up.railway.app/api/card/expert_cards/?portrait";
    }

    axios({
      url: apiString,
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then(function ({ data }) {
        console.log(data, "data value");
        selected === 0
          ? setXperts(data.results)
          : selected === 1
          ? setLandscapes(data.results)
          : setPortraits(data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // https://web-production-9c5b.up.railway.app/api/card/expert_cards/

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
          <ViewCard fetchData={fetchData} />
        </CardListing>

        {/* filter nav */}
        <FilterNav>
          <FilterIcons selected={selected} setSelected={setSelected} />
          <FilterInput
            filter={filter}
            setFilter={setFilter}
            selected={selected}
            handleFilter={handleFilter}
            query={query}
            setQuery={setQuery}
          />

          <RightFilterIcons />
        </FilterNav>

        {/* cards display section */}
        <section className=" flex flex-1 w-full max-w-[1440px]">
          {selected === 0 ? (
            <CardListContainer xperts={xperts} />
          ) : selected === 1 ? (
            <LandscapeListContainer landscapes={landscapes} />
          ) : selected === 2 ? (
            <PortraitListContainer portraits={portraits} />
          ) : null}
        </section>
      </main>
    </section>
  );
};

export default withAuth(Homepage);
