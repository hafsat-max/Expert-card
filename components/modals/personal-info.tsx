import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { Group, Text, rem } from "@mantine/core";
import { IconUpload, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Link from "next/link";

export interface PersonalInfoProp {
  currentFormData: InnerPersonal;
  handleCurrentFormData: (val: InnerPersonal) => void;
  prefillData?: InnerPersonal;
  editId?: number | undefined;
  setPrefillData?: (val: InnerPersonal) => void;
}
export interface InnerPersonal {
  profile_picture: File | null | undefined;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  role: string;
  tribe: string;
  company_address: string;
  middle_name: string;
  card_type: string;
}
const PersonalInfo = ({
  currentFormData,
  handleCurrentFormData,
  prefillData,
  setPrefillData,
  editId,
}: PersonalInfoProp) => {
  const [imgPreview, setImgPreview] = useState("");
  const [imgSize, setImgSize] = useState(0);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (imgPreview) {
      const fileName = imgPreview.split("/").pop() || "";
    }
  }, [imgPreview]);

  return (
    <div>
      <h3 className="text-14 font-medium text-davy-grey pb-2">
        Upload Picture
      </h3>

      <Dropzone
        onDrop={(files) => {
          const reader = new FileReader();
          editId
            ? setPrefillData({
                ...prefillData,
                profile_picture: files[0],
              })
            : handleCurrentFormData({
                ...currentFormData,
                profile_picture: files[0],
              });
          setFileName(files[0].name);
        setImgSize((Number(files[0].size) / 1024 / 1024).toFixed(2) as unknown as number);
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
              <div className="rounded-[11px]  border border-[#7C827D] overflow-hidden">
                <Image src={imgPreview} alt="" width={150} height={150}  />
              </div>
              <div className="flex justify-between items-center gap-4">
                <span className=" text-davy-grey text-14 ">{fileName}</span>
                <span className=" text-phillipine-silver text-[10px]">
                  {imgSize}MB Image
                </span>
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
        value={editId ? prefillData?.first_name : currentFormData.first_name}
        onChange={(e) => {
          editId
            ? setPrefillData({
                ...prefillData,
                first_name: e.target.value,
              })
            : handleCurrentFormData({
                ...currentFormData,
                first_name: e.target.value,
              });
        }}
        disabled={false}
        readOnly={false}
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
        value={editId ? prefillData?.last_name : currentFormData.last_name}
        onChange={(e) => {
          editId
            ? setPrefillData({
                ...prefillData,
                last_name: e.target.value,
              })
            : handleCurrentFormData({
                ...currentFormData,
                last_name: e.target.value,
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

      <TextInput
        value={editId ? prefillData?.middle_name : currentFormData.middle_name}
        onChange={(e) => {
          editId
            ? setPrefillData({
                ...prefillData,
                middle_name: e.target.value,
              })
            : handleCurrentFormData({
                ...currentFormData,
                middle_name: e.target.value,
              });
        }}
        placeholder="Enter middle name"
        label="Middle Name"
        classNames={{
          root: "flex flex-col gap-5 mt-10 pb-2",
          input:
            "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
          label: "text-davy-grey text-sm leading-4",
        }}
      />
    </div>
  );
};

export default PersonalInfo;
