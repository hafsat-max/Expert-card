import React, { useState } from "react";
import clsx from "clsx";
import { Button, PasswordInput } from "@mantine/core";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");

  return (
    <section
      className={clsx(
        "flex-1 self-start max-w-[466px]",
        "shadow-shadow  rounded-lg bg-white",
        "p-10 max-w-[466px]"
      )}
    >
      <h3
        className={clsx(
          " text-davy-grey font-semibold",
          "text-[clamp(1.3rem,2vw,1.5rem)]"
        )}
      >
        Sign in with SSO
      </h3>

      {/* form */}
      <form className={clsx("pt-12")}>
        {/* Email */}
        <fieldset className="flex flex-col gap-5 ">
          <label
            htmlFor="email"
            className={clsx(" text-davy-grey text-sm leading-4")}
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={clsx(
              "bg-input rounded-lg h-[54px] border border-input outline-none pl-4 text-xs text-spanish-gray "
            )}
          />
        </fieldset>

        {/* password */}
        <PasswordInput
          placeholder="••••••••"
          label="Password"
          classNames={{
            root: "flex flex-col gap-5 mt-10",
            innerInput: clsx(
              "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full "
            ),
            input:
              "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg", 
            label: "text-davy-grey text-sm leading-4",
          }}
        />

        {/* forgot password */}
        <div className="flex justify-end mt-5 mb-[3.75rem]">
          <Link
            href={"/reset"}
            className="text-engineering text-xs font-semibold hover:text-blood-red "
          >
            Forgot Password?
          </Link>
        </div>

        <Link href={"/dashboard"}>
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
      </form>
    </section>
  );
};

export default LoginForm;
