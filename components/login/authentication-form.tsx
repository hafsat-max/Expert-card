import React, { useState } from "react";
import clsx from "clsx";
import { Button, Group, PinInput } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

import Heading from "../shared/heading";
import Paragraph from "../shared/paragraph";

const AuthenticationForm = () => {
  const [email, setEmail] = useState("");

  return (
    <section
      className={clsx(
        "flex-1 self-start max-w-[466px]",
        "shadow-shadow  rounded-lg bg-white",
        "p-10 max-w-[466px]",
        "flex flex-col h-full "
      )}
    >
      <h4 className="font-semibold text-20 text-engineering text-center pb-10">
        AFEX SSO
      </h4>

      <section className="flex-1 flex justify-center items-center">
        <div className=" w-full ">
          <Heading text="Forgot password?" />

          <Paragraph
            style="max-w-[320px] mx-auto pt-5 text-spanish-gray"
            text="Enter your email address below, and we’ll email you a 6-digit pin to reset your password.`"
          />

          {/* form */}
          <form
            className={clsx(
              "flex flex-col gap-6",
              "mt-[clamp(2rem,3vw,2.5rem)]"
            )}
          >
            <Group position="center">
              <PinInput
                classNames={{
                  input:
                    "placeholder:!text-black placeholder:!0 placeholder:!font-medium placeholder:!text-[2 rem]",
                }}
                type="number"
                length={6}
              />
            </Group>

            <Link href={"/reset-password"} className="mb-[clamp(40px, 5vw, 70px)]">
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
                Reset password
              </Button>
            </Link>
          </form>

          <div className="flex justify-end text-xs leading-4 mb-10">
            <span className=" text-dim-gray">Can’t find 6-digit pin? </span>
            <Link href={'/authentication'}>
            <span className=" text-engineering">Resend Pin</span>
            </Link>
          </div>

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
            <Paragraph text="Back to Sign In" style="text-davy-grey" />
          </Link>
        </div>
      </section>
    </section>
  );
};

export default AuthenticationForm;
