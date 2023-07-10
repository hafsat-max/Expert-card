import React, { useState } from "react";
import clsx from "clsx";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";
import axios from "axios";
import router, { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isNotEmpty, useForm } from "@mantine/form";
import "react-toastify/dist/ReactToastify.css";

interface UserProps {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  confirm_password: string;
  // profilePicture: null;
}

const signUp = (value: UserProps) => {
  axios
    .post("https://web-production-5804.up.railway.app/api/account/create_account/", {
      ...value
    })
    .then(function (response) {
      console.log(response)
      if (response.data?.token) {
        router.push("/login");
      }
      toast.success(response.data.message.toString());
    })
    .catch(function (error) {
      if(error.response.data?.password){
        toast.error(error.response.data?.password[0]);
      }
      if(error.response.data?.email){
        toast.error(error.response.data?.email.toString());
      }
    });
   
};

const SignupForm = () => {
  const form = useForm({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      // profilePicture: null,
    },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      first_name: isNotEmpty(),
      last_name: isNotEmpty(),
      // profilePicture: null,
      password: isNotEmpty(),
      confirm_password: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  return (
    <section
      className={clsx(
        "flex-1 self-start max-w-[466px]",
        "shadow-shadow  rounded-lg bg-white",
        "p-10 py-6 h-[600px] overflow-y-scroll"
      
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
        onSubmit={form.onSubmit((value) =>{
          signUp(value)
          form.reset();
        }
          )}
        
      >
        {/*first name  */}
        <TextInput
          type="text"
          placeholder="Enter First Name"
          label="First Name"
          {...form.getInputProps("first_name")}
          classNames={{
            root: "flex flex-col gap-5",
            input:
              "bg-input h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
            label: "text-davy-grey text-sm leading-4",
          }}
          styles={{
            input: {
              ":focus": {
                border: "1px solid #C81107",
              },
            },
          }}
        />

        {/* last name */}
        <TextInput
          type="text"
          placeholder="Enter Last Name"
          label="Last Name"
          {...form.getInputProps("last_name")}
          classNames={{
            root: "flex flex-col gap-5 mt-10 ",
            input:
              "bg-input h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
            label: "text-davy-grey text-sm leading-4",
          }}
          styles={{
            input: {
              ":focus": {
                border: "1px solid #C81107",
              },
            },
          }}
        />

        {/* email address */}
        <TextInput
          type="email"
          placeholder="Enter Email Address"
          label="Email Address"
          {...form.getInputProps("email")}
          classNames={{
            root: "flex flex-col gap-5 mt-10 ",
            input:
              "bg-input h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
            label: "text-davy-grey text-sm leading-4",
          }}
          styles={{
            input: {
              ":focus": {
                border: "1px solid #C81107",
              },
            },
          }}
        />


        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
          classNames={{
            root: "flex flex-col gap-5 mt-10 ",
            input:
              "bg-input h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
            label: "text-davy-grey text-sm leading-4",
          }}
          styles={{
            input: {
              ":focus": {
                border: "1px solid #C81107",
              },
            },
          }}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps("confirm_password")}
          classNames={{
            root: "flex flex-col gap-5 mt-10 ",
            input:
              "bg-input h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
            label: "text-davy-grey text-sm leading-4",
          }}
          styles={{
            input: {
              ":focus": {
                border: "1px solid #C81107",
              },
            },
          }}
        />

        {/* forgot password */}
        <div className="flex justify-end mt-5 mb-[2rem]">
          <Link
            href={"/reset"}
            className="text-engineering text-xs font-semibold hover:text-blood-red"
          >
            Forgot Password?
          </Link>
        </div>

        <p className="mb-1 text-davy-grey text-xs">
          Already have an account?{" "}
          <Link href={"/login"}>
            <span className="underline cursor-pointer text-engineering hover:text-blood-red">Sign in</span>
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
          Sign up
        </Button>
      </form>
    </section>
  );
};

export default SignupForm;
