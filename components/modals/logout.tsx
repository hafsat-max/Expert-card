import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";
import Image from "next/image";
import { IModalProps } from "./create-card";
import router from "next/router";

const handleLogout = ()=>  router.push("/login");


function Logout({ opened, close }: IModalProps) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        className=" flex flex-col justify-center items-center gap-2"
        styles={{
          content: {
            borderRadius: "20px",
          },
        }}
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <Image
            src={"/logout.svg"}
            width={170}
            height={170}
            alt="logout image"
          />
          <p className="font-bold text-base text-center text-davy-grey">
            Logout?
          </p>
          <p className=" text-xs  text-davy-grey text-center">
            You are about to logout of the platform, click the logout button to
            proceed
          </p>

          <div className=" flex justify-between items-center gap-10 mt-[25px]">
            <Button
              onClick={close}
              type="submit"
              className="mb-6 self-center px-10"
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
              Close
            </Button>

            <Button
            onClick={handleLogout}
              type="submit"
              className="mb-6 self-center px-10"
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
              Logout
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Logout;
