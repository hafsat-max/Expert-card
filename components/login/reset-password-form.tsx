import React, { useState } from "react";
import clsx from "clsx";
import { Button } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

import Heading from "../shared/heading";
import Paragraph from "../shared/paragraph";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");

  return (
    <section
      className={clsx(
        "flex-1 self-start max-w-[466px]",
        "shadow-shadow  rounded-lg bg-white",
        "p-10 max-w-[466px]"
      )}
    >
      <h4 className="font-semibold text-20 text-engineering text-center pb-5">
        AFEX SSO
      </h4>
      <Heading text="Reset password" />

      <Paragraph text="Kindly provide a new password for your account." style=" text-spanish-gray pt-5"/>

      {/* form */}
      <form className={clsx("pt-12")}>
        {/* Email */}
        <fieldset className="flex flex-col gap-5 ">
          <label
            htmlFor="email"
            className={clsx(" text-davy-grey text-sm leading-4")}
          >
           Enter Password
          </label>
          <div className=" flex justify-between border overflow-hidden rounded-lg">
            <input
              type="password"
              placeholder="Enter your new password"
              required
              className={clsx(
                "bg-input  py-4 outline-none pl-4 text-xs text-spanish-gray w-full "
              )}
            />
          </div>
        </fieldset>

        {/* password */}
        <fieldset className="flex flex-col gap-5 mt-10">
          <label
            htmlFor="email"
            className={clsx(" text-davy-grey text-sm leading-4")}
          >
           Confirm Password
          </label>
          <div className=" flex justify-between border overflow-hidden  rounded-lg">
            <input
              type="password"
              placeholder="Re-enter your new password"
              required
              className={clsx(
                "bg-input  py-4 outline-none pl-4 text-xs text-spanish-gray w-full "
              )}
            />
          </div>
        </fieldset>

        {/* forgot password */}
        <div className="flex justify-end mt-5 mb-[3.75rem]">
          <Link
            href={"/reset"}
            className="text-engineering text-xs font-semibold "
          >
            Forgot Password?
          </Link>
        </div>

        <Link href={"/login"}>
          <Button
            className="w-full mb-6"
            styles={{
              root: {
                background:
                  "linear-gradient(168.79deg,#E1261C 28.64%,#8A0B04 136.7%) !important",
                height: "50px",
                "&:hover": {
                  background: "#6D0802 !important ",
                },
              },
            }}
          >
            Sign in
          </Button>
        </Link>

        <Link href={'/login'} className="flex justify-center items-center gap-[13.6px]">
            <Image src={'/shared/arrow-left.svg'} width={6.4} height={12.79} alt="arrow left"/>
            <Paragraph text="Back to Sign In" style="text-davy-grey hover:text-engineering"/>
          </Link>
      </form>
    </section>
  );
};

export default ResetPasswordForm;
