import React, { useState } from "react";
import clsx from "clsx";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";
import axios from "axios";
import router, { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

interface UserProps {
  email: string;
  password: string;
}

const login = (value: UserProps) => {
  axios
    .post("https://web-production-5804.up.railway.app/api/account/login/", {
      email: value.email,
      password: value.password,
    })
    .then(function (response) {
      console.log(jwtDecode(response.data.token));
      router.push("/homepage");
    })
    .catch(function (error) {
      console.log(error);
    });
};

const LoginForm = () => {
  const [userDetails, setUserDetails] = useState<UserProps>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(userDetails);
  };

  return (
    <section
      className={clsx(
        "flex-1 self-start max-w-[466px]",
        "shadow-shadow  rounded-lg bg-white",
        "p-10"
      )}
    >
      <h3
        className={clsx(
          "text-davy-grey font-semibold",
          "text-[clamp(1.3rem,2vw,1.5rem)]"
        )}
      >
        Sign in with SSO
      </h3>

      {/* form */}
      <form className={clsx("pt-12")} onSubmit={handleSubmit}>
        {/* Email */}
        <fieldset className="flex flex-col gap-5">
          <label
            htmlFor="email"
            className={clsx("text-davy-grey text-sm leading-4")}
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            required
            className={clsx(
              "bg-input rounded-lg h-[54px] border border-[#CED4DA] outline-none pl-4 text-xs text-spanish-gray"
            )}
          />
        </fieldset>

        {/* password */}
        <PasswordInput
          placeholder="••••••••"
          label="Password"
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          classNames={{
            root: "flex flex-col gap-5 mt-10",
            innerInput: clsx(
              "bg-input h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full"
            ),
            input:
              "bg-input h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
            label: "text-davy-grey text-sm leading-4",
          }}
        />

        {/* forgot password */}
        <div className="flex justify-end mt-5 mb-[3.75rem]">
          <Link
            href={"/reset"}
            className="text-engineering text-xs font-semibold hover:text-blood-red"
          >
            Forgot Password?
          </Link>
        </div>

        {/* submit */}
        <Button
          type="submit"
          className="w-full mb-6"
          styles={{
            root: {
              background:
                "linear-gradient(168.79deg,#E1261C 28.64%,#8A0B04 136.7%) !important",
              height: "50px",
              "&:hover": {
                background: "#6D0802 !important",
              },
            },
          }}
        >
          Sign in
        </Button>
      </form>
    </section>
  );
};

export default LoginForm;
