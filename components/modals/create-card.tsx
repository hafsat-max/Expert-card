import React, { useState } from "react";
import { Button, Group, Modal, Stepper } from "@mantine/core";

import PersonalInfo from "./personal-info";
import OrganizationInfo from "./organization-info";
import CardStyle from "./card-style";

interface IModalProps {
  opened: boolean;
  close: () => void;
}

export function CreateCard({ opened, close }: IModalProps) {
  const [active, setActive] = useState(0);
  const [totalFormData, seTotalFormData] = useState({
    imgValue: "myImage.png",
    firstName: "",
    lastName: "",
  });

  const nextStep = () => {
    const validated = handleValidate();
    if (!validated) {
      return;
    }
    setActive((current) => (current < 3 ? current + 1 : current));
  };

  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  const handleValidate = (): boolean => {
    let allowValidate = false;
    if (active == 0) {
      // do validation for first input which is totalFormData
      if (
        !totalFormData.firstName ||
        !totalFormData.lastName ||
        !totalFormData.imgValue
      ) {
        allowValidate = false;
      } else {
        allowValidate = true;
      }
    } else if (active == 1) {
    }

    return allowValidate;
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Create Cards"
      centered
      className="custom-modal "
      styles={{
        root: {
    
        },
        content: {
          borderRadius: "12px",
          msOverflowStyle: "-ms-autohiding-scrollbar",
          overflow: "auto",
          display: "grid",
          height: "100%",
          gridTemplateRows: "auto 1fr",
        },
        body: {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          overflow: "auto",
          display: 'grid',
          height: '100%',
          gridTemplateRows: 'auto 1fr auto'
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
      </div>
      <Stepper
        allowNextStepsSelect={false}
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        color="#C81107"
        styles={{
          root:{
            overflow: 'auto',
            display: 'grid',
            gridTemplateRows: 'auto 1fr'
          },
          separator: {
            backgroundColor: "#EFF0F6",
            height: "5px",
            borderRadius: "35px",
          },

          separatorActive: {
            backgroundColor: "#C81107",
          },
          content: {
            overflow: 'auto'
          },
        }}
      >
        <Stepper.Step completedIcon={<span>1</span>}>
          <PersonalInfo
            currentFormData={totalFormData}
            handleCurrentFormData={seTotalFormData}
          />
        </Stepper.Step>

        <Stepper.Step completedIcon={<span>2</span>}>
          <OrganizationInfo />
        </Stepper.Step>

        <Stepper.Step completedIcon={<span>3</span>}>
          <CardStyle />
        </Stepper.Step>
      </Stepper>

      <Group position="center" mt="xl" className="flex justify-between">
        <Button
          variant="default"
          onClick={prevStep}
          disabled={active < 1 ? true : false}
          styles={{
            root: {
              background: "white !important",
              border: "1px solid #B4B4B0 !important",
              height: "50px",
              padding: "15px 30px",
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
              padding: "15px 30px",
              color: "white",
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

// #C81107
