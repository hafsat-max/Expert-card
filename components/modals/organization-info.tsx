import React, { useEffect, useState } from "react";
import { Select, TextInput } from "@mantine/core";
import { InnerPersonal, PersonalInfoProp } from "./personal-info";
import Link from "next/link";
import axios from "axios";

// interface PersonalInfoProp {
//   currentFormData: InnerPersonal;
//   handleCurrentFormData: (val: InnerPersonal) => void;

// }

const OrganizationInfo = ({
  currentFormData,
  handleCurrentFormData,
  prefillData,
  setPrefillData,
  editId,
}: PersonalInfoProp) => {
  const [address, setAddress] = useState([]);

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
        type="textc"
        placeholder="Enter Work Phone"
        label="Work Phone"
        value={
          editId ? prefillData?.phone_number : currentFormData.phone_number
        }
        onChange={(e) => {
          editId
            ? setPrefillData({
                ...prefillData,
                phone_number: e.target.value,
              })
            : handleCurrentFormData({
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
        styles={{
          icon: {
            alignSelf: "flex-end",
          },
        }}
      />

      <TextInput
        type="email"
        placeholder="Enter Email Address"
        label="Official Email Address"
        value={editId ? prefillData?.email : currentFormData.email}
        onChange={(e) => {
          editId
            ? setPrefillData({
                ...prefillData,
                email: e.target.value,
              })
            : handleCurrentFormData({
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
        value={
          editId
            ? prefillData?.company_address
            : currentFormData.company_address
        }
        onChange={(value) => {
          editId
            ? setPrefillData({
                ...prefillData,
                company_address: e.target.value,
              })
            : handleCurrentFormData({
                ...currentFormData,
                company_address: value as string,
              });
        }}
        label={
          <div className="flex justify-between items-center">
            <span className="text-davy-grey text-sm leading-4">
              Office Address
            </span>
            <Link href={"/"}>
              <span className=" text-[#DC372F] underline text-[12px] font-medium cursor-pointer hover:text-blood-red">
                Add Address
              </span>
            </Link>
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
        type="text"
        value={editId ? prefillData?.role : currentFormData.role}
        onChange={(e) => {
          editId
            ? setPrefillData({
                ...prefillData,
                role: e.target.value,
              })
            : handleCurrentFormData({
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
        label="Tribe / Department"
        placeholder="Select Tribe / Department"
        value={editId ? prefillData?.tribe : currentFormData.tribe}
        onChange={(value) =>
          editId
            ? setPrefillData({
                ...prefillData,
                tribe: value as string,
              })
            : handleCurrentFormData({
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
