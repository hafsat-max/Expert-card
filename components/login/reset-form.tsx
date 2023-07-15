import React, { useState } from "react";
import clsx from "clsx";
import { Button } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

import Heading from "../shared/heading";
import Paragraph from "../shared/paragraph";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import router from "next/router";


interface IEmail{
  email: string
  handleReset?:React.MouseEvent<HTMLButtonElement>
}
const ResetForm = () => {
  const [email, setEmail] = useState<IEmail>({email: ''});

  const handleReset = (value: React.MouseEvent<HTMLButtonElement>) => {
    value.preventDefault()
    
    axios.post(
      "https://web-production-9c5b.up.railway.app/api/account/forgot_password/",
      {
        email: email.email,
      }
    ).then(function({data}){
      toast.success(data.message)
      router.push("/authentication");      
    }).catch(function(error){
      toast.error(error)
    })
  };

  return (
    <section
      className={clsx(
        "flex-1 self-start max-w-[466px]",
        "shadow-shadow  rounded-lg bg-white",
        "p-10 max-w-[466px]",
        "flex flex-col h-full"
      )}
    >
      <h4 className="font-semibold text-20 text-engineering text-center pb-10">
        AFEX SSO
      </h4>

      <section className="flex-1 flex justify-center items-center">
        <div className=" w-full ">
          <Heading text="Forgot password?" />

          <Paragraph
            style="max-w-[340px] mx-auto pt-5 text-spanish-gray"
            text="Enter your email address below, and we’ll email you a 6-digit pin to reset your password."
          />

          {/* form */}
          <form
            className={clsx("pt-10 flex flex-col gap-6")}
          >
            {/* Email */}
            <fieldset className="flex flex-col ">
              <input
                type="email"
                id="email"
                value={email.email}
                onChange={(e) =>
                  setEmail({
                    ...email,
                    email: e.target.value
                  })
                } 
                placeholder="Enter email address"
                required
                className={clsx(
                  "bg-input rounded-lg py-4 border border-input outline-none pl-4 text-xs text-spanish-gray"
                )}
              />
            </fieldset>

            <Link
              href={"/authentication"}
              className="mb-[clamp(40px, 5vw, 70px)]"
            >
              <Button
                type="submit"
                onClick={handleReset}
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
                Reset
              </Button>
            </Link>

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
              <Paragraph text="Back to Sign In" style="text-davy-grey hover:text-engineering" />
            </Link>
          </form>
        </div>
      </section>
    </section>
  );
};

export default ResetForm;
