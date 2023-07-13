import { Modal, Button } from "@mantine/core";
import Image from "next/image";
import { IModalProps } from "./create-card";

export function CardSuccess({opened, fetchData, close, handleClose}:any) {

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        className="flex justify-center items-center flex-col gap-3"
        styles={{
          root: {
            borderRadius: '1.25rem'
          }
        }}
      >
        {/* Modal content */}

        <div className="flex flex-col justify-center items-center gap-3">
          <Image
            src="/create-card/girl-success.svg"
            alt={"img"}
            width={170}
            height={170}
          />
          <h3 className=" font-semibold  text-davy-grey text-center text-base">
            Card created successfully
          </h3>
          <p className=" text-davy-grey text-xs text-center ">Xpert Card has been created successfully.</p>

          <Button
          type="submit"
           onClick={()=> {handleClose(false)
            fetchData()
          }}
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
        </div>
      </Modal>

    </>
  );
}
