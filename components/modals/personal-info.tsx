import React from "react";
import Image from "next/image";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import clsx from "clsx";
import Link from "next/link";

const PersonalInfo = () => {
  return (
    <div>
      <h3 className="text-14 font-medium text-davy-grey pb-2">
        Upload Picture
      </h3>

      <Dropzone
        onDrop={(files) => console.log("accepted files", files)}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        styles={{
          root: {
            border: "1px dashed #C81107",
            "&:hover": {
              border: "1px dashed #6D0802",
            },
          },
        }}
      >
        <Group
          className="flex flex-col"
          position="center"
          spacing="xl"
          style={{ minHeight: rem(220), pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload size="3.2rem" stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size="3.2rem" stroke={1.5} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <div className="flex flex-col gap-1 justify-center items-center">
              <Image
                src={"/create-card/upload.png"}
                alt={"upload"}
                width={47.73}
                height={47.73}
              />
              <p className=" text-phillipine-silver text-[8.37px] ">
                image, smaller than 10MB
              </p>
            </div>
          </Dropzone.Idle>

          <div className="flex flex-col gap-2 justify-center items-center">
            <Text size="xl" inline className=" text-[10.05px] text-dim ">
              Drag and drop your file here or
            </Text>
          </div>

          <Link href={"/"}>
            <Button
              className="w-full text-engineering rounded-lg mt-2"
              styles={{
                root: {
                  background: "#F8E7E7 !important",
                  height: "50px",
                  "&:hover": {
                    background: " !important ",
                  },
                },
              }}
            >
              Choose File
            </Button>
          </Link>
        </Group>
      </Dropzone>

      <TextInput
        placeholder="Enter Name"
        label="First Name"
        classNames={{
          root: "flex flex-col gap-5 mt-10",
          input:
            "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
          label: "text-davy-grey text-sm leading-4",
        }}
      />

      <TextInput
        placeholder="Last Name"
        label="Enter Name"
        classNames={{
          root: "flex flex-col gap-5 mt-10",
          input:
            "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
          label: "text-davy-grey text-sm leading-4",
        }}
      />
    </div>
  );
};

export default PersonalInfo;
