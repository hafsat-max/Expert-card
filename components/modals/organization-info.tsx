import React, { useEffect, useState } from "react";
import { Select, TextInput } from "@mantine/core";
import Link from "next/link";
import axios from "axios";

import { PersonalInfoProp } from "./personal-info";
import AddAddress from "./add-address";
import { useDisclosure } from "@mantine/hooks";

const OrganizationInfo = ({
  currentFormData,
  handleCurrentFormData,
  prefillData,
  setPrefillData,
  editId,
}: PersonalInfoProp) => {
  const [address, setAddress] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("my-user") as string);
    axios({
      url: "https://web-production-9c5b.up.railway.app/api/card/company_address/",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then(function ({ data }) {
        setAddress(
          data.results.reduce((acc, cur) => {
            acc.push({ label: cur.company_address, value: cur.id });
            return acc;
          }, [])
        );
      })
      .catch(function (error) {});

    return () => {};
  }, []);

  return (
    <section>
      {/* Work Phone */}
      <TextInput
        styles={{
          input: {
            border: "none",
          },
        }}
        type="textc"
        placeholder="Enter Work Phone"
        label="Work Phone"
        value={currentFormData.phone_number}
        onChange={(e) => {
          handleCurrentFormData({
            ...currentFormData,
            phone_number: e.target.value,
          });
        }}
        classNames={{
          root: "flex flex-col gap-5 mt-10",
          input:
            "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
          label: "text-davy-grey text-sm leading-4",
        }}
      />

      <TextInput
        styles={{
          input: {
            border: "none",
          },
        }}
        type="email"
        placeholder="Enter Email Address"
        label="Official Email Address"
        value={currentFormData.email}
        onChange={(e) => {
          handleCurrentFormData({
            ...currentFormData,
            email: e.target.value,
          });
        }}
        classNames={{
          root: "flex flex-col gap-5 mt-10",
          input:
            "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
          label: "text-davy-grey text-sm leading-4",
        }}
      />

      {/* select address */}
      <Select
        styles={{
          input: {
            border: "none",
          },
        }}
        value={currentFormData.company_address}
        onChange={(value) => {
          handleCurrentFormData({
            ...currentFormData,
            company_address: value as string,
          });
        }}
        label={
          <div className="flex justify-between items-center">
            <span className="text-davy-grey text-sm leading-4">
              Office Address
            </span>
            <span
              onClick={() => {
                open();
              }}
              className=" text-[#DC372F] underline text-[12px] font-medium cursor-pointer hover:text-blood-red"
            >
              Add Address
            </span>
            <AddAddress opened={opened} close={close} />
          </div>
        }
        placeholder="Select Address"
        classNames={{
          root: "flex flex-col gap-5 mt-10",
          input:
            "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
          label: "text-davy-grey text-sm leading-4",
        }}
        data={address}
      />

      {/* Role designation */}
      <TextInput
        styles={{
          input: {
            border: "none",
          },
        }}
        type="text"
        value={currentFormData.role}
        onChange={(e) => {
          handleCurrentFormData({
            ...currentFormData,
            role: e.target.value,
          });
        }}
        placeholder=" Enter Role / Designation"
        label="Role / Designation"
        classNames={{
          root: "flex flex-col gap-5 mt-10",
          input:
            "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
          label: "text-davy-grey text-sm leading-4",
        }}
      />

      {/* tribe/ department */}
      <Select
        styles={{
          input: {
            border: "none",
          },
        }}
        label="Tribe / Department"
        placeholder="Select Tribe / Department"
        value={
          // editId ? prefillData?.tribe :
          currentFormData.tribe
        }
        onChange={(value) =>
          handleCurrentFormData({
            ...currentFormData,
            tribe: value as string,
          })
        }
        classNames={{
          root: "flex flex-col gap-5 mt-10",
          input:
            "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
          label: "text-davy-grey text-sm leading-4",
        }}
        data={[
          "Corporate services",
          "Technology and innovation",
          "Financial market",
          "AFIL",
          "Risk audit and assurance",
          "Business Assurance",
        ]}
      />
    </section>
  );
};

export default OrganizationInfo;
