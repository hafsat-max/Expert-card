import React from "react";
import clsx from "clsx";

import Nav from "@/components/shared/nav";
import LoginBanner from "@/components/login/login-banner";
import ResetPasswordForm from "@/components/login/reset-password-form";

const ResetPassword = () => {
  return (
    <section
      className={clsx(
        "bg-cover bg-no-repeat bg-top-center flex flex-col h-screen"
      )}
      style={{ backgroundImage: "url('/home/background.png')" }}
    >
      <Nav style="w-[80vw] mx-auto"></Nav>

      <div className="w-[80vw] mx-auto flex-1 flex items-center">
        <section
          className={clsx("flex ", "gap-[clamp(2rem,5vw,4.625rem)] w-full")}
        >
          <LoginBanner />
          <ResetPasswordForm />
        </section>
      </div>
    </section>
  );
};

export default ResetPassword;
