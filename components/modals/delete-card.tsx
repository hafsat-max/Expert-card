import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";
import Image from "next/image";

import { IModalProps } from "./create-card";
import axios from "axios";

interface DeleteCardsProps extends IModalProps {
  expert_id: number;
}

function DeleteCard({ opened, close, expert_id }: DeleteCardsProps) {
  const handleDelete = () => {
    const token = JSON.parse(localStorage.getItem("my-user") as string);
    // axios.delete()
    axios
      .delete(
        `https://web-production-9c5b.up.railway.app/api/card/expert_cards/${expert_id}/`,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      )
      .then(function (response) {
        const data = response.data;
      })
      .catch(function (error) {
        console.log(error);
        close();
      });
  };

  return (
    <>
      <Modal
        opened={opened}
        centered
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
            Delete Xpert Card?
          </p>
          <p className=" text-xs  text-davy-grey text-center max-w-[390px]">
            You are about to delete the selected Card. Click the delete button
            below if you would like to continue?
          </p>

          <div className=" flex justify-between items-center gap-10 mt-[25px]">
            <Button
              onClick={close}
              type="submit"
              className="mb-6 self-center px-10 rounded-lg text-[#54565B]"
              styles={{
                root: {
                  background: "white",
                  border: "1px solid #8B908B",
                  height: "50px",
                  "&:hover": {
                    background: "white",
                  },
                },
              }}
            >
              Cancel
            </Button>

            <Button
              onClick={handleDelete}
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
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default DeleteCard;
