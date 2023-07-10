import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { Group, Text, rem } from "@mantine/core";
import { IconUpload, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Link from "next/link";

interface PersonalInfoProp {
  currentFormData: InnerPersonal;
  handleCurrentFormData: (val: InnerPersonal) => void;
}
interface InnerPersonal {
  imgValue: string;
  firstName: string;
  lastName: string;
}

const PersonalInfo = ({
  currentFormData,
  handleCurrentFormData,
}: PersonalInfoProp) => {
  const [imgPreview, setImgPreview] = useState("");
  const [imgSize, setImgSize] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (imgPreview) {
      const fileName = imgPreview.split("/").pop() || "";
      // setImgTitle(fileName);
      }
  }, [imgPreview]);

  return (
    <div>
      <h3 className="text-14 font-medium text-davy-grey pb-2">
        Upload Picture
      </h3>

      <Dropzone
        onDrop={(files: any) => {
          const reader = new FileReader();
          setFileName(files[0].name);
          setImgSize((files[0].size));
          const data =files[0].size;
          console.log(data/1024)
          reader.readAsDataURL(files[0]);

          reader.onload = () => {
            setImgPreview(reader.result as string);
          };
        }}
        // onReject={(files) => console.log("rejected files", files)}
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
          {imgPreview ? (
            <div className=" flex flex-col gap-2 justify-center items-center">
              <div className="rounded-[11px] p-[1px] border border-[#7C827D]">
                <Image src={imgPreview} alt="" width={150} height={150} />
              </div>
              <div className="flex justify-between items-center gap-4">
              <span className=" text-davy-grey text-14 ">{fileName}</span>
              <span className=" text-phillipine-silver text-[10px]">{imgSize}MB Image</span>
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}
        </Group>
      </Dropzone>

      <TextInput
        value={currentFormData.firstName}
        onChange={(e) => {
          handleCurrentFormData({
            ...currentFormData,
            firstName: e.target.value,
          });
        }}
        placeholder="Enter first name"
        label="First Name"
        classNames={{
          root: "flex flex-col gap-5 mt-10",
          input:
            "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
          label: "text-davy-grey text-sm leading-4",
        }}
      />

      <TextInput
        value={currentFormData.lastName}
        onChange={(e) => {
          handleCurrentFormData({
            ...currentFormData,
            lastName: e.target.value,
          });
        }}
        placeholder="Enter last name"
        label="Last Name"
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
