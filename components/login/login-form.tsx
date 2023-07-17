import React, { useState } from "react";
import clsx from "clsx";
import { Button, LoadingOverlay, Loader, PasswordInput } from "@mantine/core";
import Link from "next/link";
import axios from "axios";
import router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isNotEmpty, useForm } from "@mantine/form";
import "react-toastify/dist/ReactToastify.css";

interface UserProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const Login = (value: UserProps) => {
    axios
      .post("https://web-production-9c5b.up.railway.app/api/account/login/", {
        email: value.email,
        password: value.password,
      })
      .then(function (response) {
        const token = JSON.parse(localStorage.getItem("my-user") as string);

        if (response.data?.token) {
          localStorage.setItem("my-user", JSON.stringify(response.data));
          toast.success("You have successfully logged in", {
            autoClose: 2000,
          });
          router.push("/homepage");

          setUserDetails({ email: "", password: "" });
        }
      })
      .catch(function (error) {
        toast.error("Invalid login credentials or not a verified user", {
          autoClose: 2000,
        });
      });
  };

  const [userDetails, setUserDetails] = useState<UserProps>({
    email: "",
    password: "",
  });

  const form = useForm({
    initialValues: { email: "", password: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: isNotEmpty(),
    },
  });

  return (
    <section
      className={clsx(
        "flex-1 self-start max-w-[466px]",
        "shadow-shadow  rounded-lg bg-white",
        "p-10"
      )}
    >
      <ToastContainer toastClassName="customToast" />
      <h3
        className={clsx(
          "text-davy-grey font-semibold",
          "text-[clamp(1.3rem,2vw,1.5rem)]"
        )}
      >
        Sign in with SSO
      </h3>

      {/* form */}
      <form
        className={clsx("pt-12")}
        onSubmit={form.onSubmit((value) => {
          Login(value);
        })}
      >
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
            {...form.getInputProps("email")}
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
          required
          {...form.getInputProps("password")}
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
        <div className="flex justify-end mt-5 mb-[2rem]">
          <Link
            href="/reset"
            className="text-engineering text-xs font-semibold hover:text-blood-red"
          >
            Forgot Password?
          </Link>
        </div>

        <p className="mb-1 text-davy-grey text-xs">
          Don&apos;t have an account?{" "}
          <Link href="/signup">
            <span className="underline cursor  text-engineering hover:text-blood-red">
              Sign up
            </span>
          </Link>
        </p>
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
