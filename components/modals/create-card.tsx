import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Modal, Stepper } from "@mantine/core";
import PersonalInfo from "./personal-info";
import OrganizationInfo from "./organization-info";

interface IModalProps {
  opened: boolean;
  close: () => void;
}

export function CreateCard({ opened, close }: IModalProps) {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

    

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Create Cards"
      centered
      className="custom-modal"
      styles={{
        root: {},
        content: {
          borderRadius: "12px",
        },
        body: {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          // padding: "30px",
        },
        title: {
          color: "#54565B",
          fontWeight: 500,
        },
      }}
    >
      {/* Modal content */}

      <div className="">
        <h3 className=" mb-6 leading-4 text-gray text-14">
          Personal Information
        </h3>
        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          color="#C81107"
          styles={{
            separator: {
              backgroundColor: "#EFF0F6",
              height:'5px',
              borderRadius: '35px'
            },

            separatorActive: {
              backgroundColor: "#C81107",
            },
          }}
        >
          <Stepper.Step completedIcon={<span>1</span>}>
            <PersonalInfo />
          </Stepper.Step>

          <Stepper.Step completedIcon={<span>2
          </span>}>
            <OrganizationInfo />
          </Stepper.Step>

          <Stepper.Step completedIcon={<span>3</span>}>submit</Stepper.Step>
        </Stepper>
      </div>

      <Group position="center" mt="xl" className="flex justify-between">
        <Button
          variant="default"
          onClick={prevStep}
          disabled={active < 1 ? true : false}
          styles={{
            root: {
              background: "white !important",
              border: '1px solid #B4B4B0 !important',
              height: "50px",
              padding: '15px 30px',
              "&:hover": {
                background: " !important ",
              },
            },
          }}
        >
          Back
        </Button>

        <Button
          onClick={nextStep}
          styles={{
            root: {
              background: "#C81107 !important",
              height: "50px",
              padding: '15px 30px',
              color: 'white',
              "&:hover": {
                background: "#6D0802 !important ",
              },
            },
          }}
        >
          Next
        </Button>
      </Group>
    </Modal>
  );
}
