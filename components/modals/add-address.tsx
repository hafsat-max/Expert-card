import { Button, Flex, Modal, Select, TextInput } from "@mantine/core";
import React from "react";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { ICreateAddress } from "@/types";

// const schema = Yup.object().shape({
//   address_title: Yup.string().min(2, "Name should have at least 2 letters"),
//   company_address: Yup.string()
//     .min(2, "Name should have at least 2 letters")
//     .required(),
//   city: Yup.string().min(2, "Name should have at least 2 letters"),
//   country: Yup.string().min(2, "Name should have at least 2 letters"),
//   longitude: Yup.string().min(2, "Name should have at least 2 letters"),
//   latitude: Yup.string().min(2, "Name should have at least 2 letters"),
// });

const AddAddress = ({ opened, close }) => {
  const form = useForm({
    initialValues: {
      address_title: "",
      company_address: "",
      city: "",
      country: "",
      longitude: "",
      latitude: "",
    },
    // validate: yupResolver(schema),
  });

  const { mutate } = useMutation({
    mutationFn: (payload: ICreateAddress) =>
      builder.use().card.company_address.create(payload),
    mutationKey: builder.card.company_address.create.get(),
    onSuccess: (data) => {
      form.reset();
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      title="Add Address"
      styles={{
        overlay: {
          zIndex: 201,
        },
        content: { msOverflowStyle: "-ms-autohiding-scrollbar" },
        body: { scrollbarWidth: "none", msOverflowStyle: "none" },
      }}
    >
      <form
        onSubmit={form.onSubmit((values) => mutate(values as ICreateAddress))}
      >
        <TextInput
          styles={{
            input: {
              border: "none",
            },
          }}
          type="text"
          placeholder="e.g. Headquarter Abuja"
          label="Address Title"
          classNames={{
            root: "flex flex-col gap-5 mt-10",
            input:
              "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
            label: "text-davy-grey text-sm leading-4",
          }}
          {...form.getInputProps("address_title")}
        />
        <TextInput
          styles={{
            input: {
              border: "none",
            },
          }}
          type="text"
          placeholder="House Number / Street / Landmark"
          label="Company Address"
          classNames={{
            root: "flex flex-col gap-5 mt-10",
            input:
              "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
            label: "text-davy-grey text-sm leading-4",
          }}
          {...form.getInputProps("company_address")}
        />
        <Flex w="100%" justify="space-between" gap="lg">
          <TextInput
            styles={{
              input: {
                border: "none",
              },
              root: { flex: 1 },
            }}
            type="text"
            placeholder="City"
            classNames={{
              root: "flex flex-col gap-5 mt-10",
              input:
                "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
              label: "text-davy-grey text-sm leading-4",
            }}
            {...form.getInputProps("city")}
          />
          <Select
            styles={{
              input: {
                border: "none",
              },
              root: { flex: 1 },
            }}
            placeholder="Pick value"
            data={["Nigeria", "Kenya"]}
            classNames={{
              root: "flex flex-col gap-5 mt-10",
              input:
                "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
              label: "text-davy-grey text-sm leading-4",
            }}
            {...form.getInputProps("country")}
          />
        </Flex>

        <Flex w="100%" justify="space-between" direction="column" mt="lg">
          <Flex justify="space-between" direction="column">
            <p className=" text-dim-gray text-[14px] font-medium leading-5 mt-7 mb-2">
              Office Coordinates
            </p>
            <Flex justify="space-between" align="center" gap="lg">
              <TextInput
                styles={{
                  input: {
                    border: "none",
                  },
                  root: { flex: 1 },
                }}
                type="text"
                placeholder="Latitude (e.g. 9.356767 N)"
                classNames={{
                  root: "flex flex-col gap-5 mt-[2px]",
                  input:
                    "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
                  label: "text-davy-grey text-sm leading-4",
                }}
                {...form.getInputProps("latitude")}
              />
              <TextInput
                styles={{
                  input: {
                    border: "none",
                  },
                  root: { flex: 1 },
                }}
                type="text"
                placeholder="Longitude (e.g. 7.356700 E)"
                classNames={{
                  root: "flex flex-col gap-5 mt-[2px]",
                  input:
                    "bg-input  h-[54px] outline-none pl-4 text-xs text-spanish-gray w-full rounded-lg",
                  label: "text-davy-grey text-sm leading-4",
                }}
                {...form.getInputProps("longitude")}
              />
            </Flex>
          </Flex>
        </Flex>
        <Button
          type="submit"
          className="w-full mb-6 mt-7"
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
          Add Address
        </Button>
      </form>
    </Modal>
  );
};

export default AddAddress;
