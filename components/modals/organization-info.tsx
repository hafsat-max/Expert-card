import React from "react";
import { Select, TextInput } from "@mantine/core";
import Image from "next/image";
import { Icon } from "iconsax-react";

import number from "../../public/create-card/number.svg";
import Link from "next/link";

const OrganizationInfo = () => {
  return (
    <section>
      {/* Work Phone */}
      <TextInput
        placeholder="Enter Work Phone"
        label="Work Phone"
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
        placeholder="Enter Email Address"
        label="Official Email Address"
        classNames={{
          root: "flex flex-col gap-5 mt-10",
          input:
            "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
          label: "text-davy-grey text-sm leading-4",
        }}
      />

      {/* select address */}
      <Select
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
        data={[
          {
            label:
              "3rd Floor, Yobe Investment House, Plot 1332, Ralph Shode...",
            value:
              "3rd Floor, Yobe Investment House, Plot 1332, Ralph Shodeinde Street, Behind Federal Ministry of Finance, Central Business District, Abuja, Nigeria.",
          },
          {
            label: "Christiana Oyinade House, Beside First Bank, Iwo...",
            value:
              "Christiana Oyinade House, Beside First Bank, Iwo road, Ibadan, Oyo state, Nigeria.",
          },
          {
            label: "Adekunle Lawal Road, Off 2nd Avenue,. Ikoyi...",
            value:
              "Adekunle Lawal Road, Off 2nd Avenue,. Ikoyi - Lagos, Lagos State, Nigeria.",
          },
        ]}
      />

      {/* Role designation */}
      <TextInput
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
        classNames={{
          root: "flex flex-col gap-5 mt-10",
          input:
            "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
          label: "text-davy-grey text-sm leading-4",
        }}
        data={[
          {
            label:
              "3rd Floor, Yobe Investment House, Plot 1332, Ralph Sho...",
            value:
              "3rd Floor, Yobe Investment House, Plot 1332, Ralph Shodeinde Street, Behind Federal Ministry of Finance, Central Business District, Abuja, Nigeria.",
          },
          {
            label: "Christiana Oyinade House, Beside First Bank, Iwo...",
            value:
              "Christiana Oyinade House, Beside First Bank, Iwo road, Ibadan, Oyo state, Nigeria.",
          },
          {
            label: "Adekunle Lawal Road, Off 2nd Avenue,. Ikoyi...",
            value:
              "Adekunle Lawal Road, Off 2nd Avenue,. Ikoyi - Lagos, Lagos State, Nigeria.",
          },
        ]}
      />
    </section>
  );
};

export default OrganizationInfo;
