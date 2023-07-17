import React, { useState, useContext } from "react";
import clsx from "clsx";
import { Button } from "@mantine/core";
import Link from "next/link";

import Image from "next/image";

import Heading from "../shared/heading";
import Paragraph from "../shared/paragraph";
import axios from "axios";
import { toast } from "react-toastify";
import Router from "next/router";
import { AuthContext } from "@/pages/_app";

const ResetPasswordForm = () => {
  const auth_ = useContext(AuthContext);
  const [formDetail, setFormDetail] = useState({
    email: auth_?.savedEmail ? auth_?.savedEmail : "",
    new_password: "",
    confirm_new_password: "",
  });

  const newPassword = () => {
    if (formDetail.new_password !== formDetail.confirm_new_password) {
      toast.error("Passwords do not match");
      return;
    }
    axios
      .put(
        "https://web-production-9c5b.up.railway.app/api/account/reset_password/",
        { ...formDetail }
      )
      .then(function ({ data }) {
        toast.success(data?.message);
        Router.push("/login");
      })
      .catch(function (error) {});
  };

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

      <Paragraph
        text="Kindly provide a new password for your account."
        style=" text-spanish-gray pt-5"
      />

      {/* form */}
      <form className={clsx("pt-12")}>
        {/* password */}
        <fieldset className="flex flex-col gap-5 mt-10">
          <label
            htmlFor="password"
            className={clsx(" text-davy-grey text-sm leading-4")}
          >
            Enter Password
          </label>
          <div className=" flex justify-between border overflow-hidden  rounded-lg">
            <input
              value={formDetail.new_password}
              onChange={(e) => {
                setFormDetail({
                  ...formDetail,
                  new_password: e.target.value,
                });
              }}
              type="password"
              placeholder="Re-enter your new password"
              required
              className={clsx(
                "bg-input  py-4 outline-none pl-4 text-xs text-spanish-gray w-full "
              )}
            />
          </div>
        </fieldset>

        {/*Confirm password */}
        <fieldset className="flex flex-col gap-5 mt-10">
          <label
            htmlFor="confirm_password"
            className={clsx(" text-davy-grey text-sm leading-4")}
          >
            Confirm Password
          </label>
          <div className=" flex justify-between border overflow-hidden  rounded-lg">
            <input
              value={formDetail.confirm_new_password}
              onChange={(e) => {
                setFormDetail({
                  ...formDetail,
                  confirm_new_password: e.target.value,
                });
              }}
              type="password"
              placeholder="Re-enter your new password"
              required
              className={clsx(
                "bg-input  py-4 outline-none pl-4 text-xs text-spanish-gray w-full "
              )}
            />
          </div>
        </fieldset>

        <div className="flex justify-end mt-5 mb-[3.75rem]">
          <Link
            href={"/reset"}
            className="text-engineering text-xs font-semibold "
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          onClick={newPassword}
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
          Submit
        </Button>

        <Link
          href={"/login"}
          className="flex justify-center items-center gap-[13.6px]"
        >
          <Image
            src={"/shared/arrow-left.svg"}
            width={6.4}
            height={12.79}
            alt="arrow left"
          />
          <Paragraph
            text="Back to Sign In"
            style="text-davy-grey hover:text-engineering"
          />
        </Link>
      </form>
    </section>
  );
};

export default ResetPasswordForm;
