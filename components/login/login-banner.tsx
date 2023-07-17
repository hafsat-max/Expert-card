import React from "react";
import clsx from "clsx";
import Image from "next/image";

import banner from "@/public/login/banner.png";

const LoginBanner = () => {
  return (
    <section
      className={clsx(
        "flex flex-col flex-1 ",
        "gap-16 justify-center",
        "max-[832px]:hidden"
      )}
    >
      <Image
        src={banner}
        alt="banner"
        width={300}
        height={300}
        className="self-center"
      />
      <h3
        className={clsx(
          "text-davy-grey font-semibold ",
          "text-[1.3rem,2vw,1.5rem] text-center pt-6"
        )}
      >
        Streamline your Login Experience with SSO{" "}
      </h3>

      <p
        className={clsx(
          "max-w-[491px] text-spanish-gray ",
          "text-[clamp(0.813rem,1vw,0.875rem)] text-center self-center"
        )}
      >
        Welcome to our Single Sign-On login page! With just one set of login
        credentials, you can now access all your favorite applications and
        services without the need to enter multiple usernames and passwords
      </p>
    </section>
  );
};

export default LoginBanner;
