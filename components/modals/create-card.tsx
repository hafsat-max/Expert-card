import React, { use, useEffect, useState } from "react";
import { Button, Group, Modal, Stepper } from "@mantine/core";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDisclosure } from "@mantine/hooks";

import PersonalInfo, { InnerPersonal } from "./personal-info";
import OrganizationInfo from "./organization-info";
import { CardSuccess } from "./card-success";
import CardStyle from "./card-style";

export interface IModalProps {
  opened: boolean;
  close: () => void;
  closeSecondModal?: () => void;
  fetchData?: () => void;
  editId?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function CreateCard({ opened, fetchData, close, editId }: IModalProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [successOpened, { open: opensuccess, close: closesuccess }] =
    useDisclosure(false);

  const [prefillData, setPrefillData] = useState<InnerPersonal>({
    profile_picture: null,
    first_name: "",
    last_name: "",
    phone_number: "",
    middle_name: "",
    email: "",
    company_address: "",
    role: "",
    tribe: "",
    card_type: "",
  });

  const [active, setActive] = useState(0);
  const [totalFormData, setTotalFormData] = useState<InnerPersonal>({
    profile_picture: null,
    first_name: "",
    last_name: "",
    phone_number: "",
    middle_name: "",
    email: "",
    company_address: "",
    role: "",
    tribe: "",
    card_type: "",
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
      if (!totalFormData.first_name || !totalFormData.last_name) {
        toast.error("Fill out all required details.");
        allowValidate = false;
      } else {
        allowValidate = true;
      }

      // do validation for first input which is totalFormData
    } else if (active == 1) {
      if (
        !totalFormData.email ||
        !totalFormData.phone_number ||
        !totalFormData.role
      ) {
        console.log("first");
        allowValidate = false;
        toast.error("Fill out all required details.");
      } else {
        allowValidate = true;
      }
    }

    return allowValidate;
  };

  //Fetch user details and populate input
  const getUserDetails = async (id: number) => {
    try {
      const token = JSON.parse(localStorage.getItem("my-user") as string);
      const response = await axios({
        url: `https://web-production-9c5b.up.railway.app/api/card/expert_cards/${id}/`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });
      const {
        first_name,
        last_name,
        phone_number,
        middle_name,
        email,
        company_address,
        role,
        tribe,
        card_type,
        profile_picture,
      } = response.data;
      setPrefillData(response?.data);
      setTotalFormData({
        first_name,
        last_name,
        phone_number,
        middle_name,
        email,
        company_address,
        role,
        tribe,
        card_type,
        profile_picture,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (editId) getUserDetails(editId);
  }, [editId]);

  const sendDetails = () => {
    const token = JSON.parse(localStorage.getItem("my-user") as string);
    const formData = new FormData();
    Object.entries(totalFormData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    axios({
      url: "https://web-production-9c5b.up.railway.app/api/card/expert_cards/create/",
      data: formData,
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
      method: "post",
    })
      .then(function ({ data }) {
        close();
        setShowSuccessModal(true);
      })
      .catch(function (error) {
        toast.error(error.response.data?.message);
        console.log(error);
      });
  };

  const updatDetails = (id: number) => {
    const token = JSON.parse(localStorage.getItem("my-user") as string);
    const formData = new FormData();
    console.log(prefillData);
    Object.entries(totalFormData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    axios({
      url: `https://web-production-9c5b.up.railway.app/api/card/expert_cards/${id}/`,
      data: prefillData,
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
      method: "put",
    })
      .then(function ({ data }) {
        close();
        setShowSuccessModal(true);
      })
      .catch(function (error) {
        toast.error(error.response.data?.message);
        console.log(error);
      });
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Create Cards"
        centered
        className="custom-modal "
        styles={{
          root: {},
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
            display: "grid",
            height: "100%",
            gridTemplateRows: "auto 1fr auto",
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
            root: {
              overflow: "auto",
              display: "grid",
              gridTemplateRows: "auto 1fr",
            },
            stepIcon: {
              width: "29.39px",
              height: "29.39px",
              minWidth: "29.39px",
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
              overflow: "auto",
            },
          }}
        >
          <Stepper.Step completedIcon={<span>1</span>}>
            <PersonalInfo
              currentFormData={totalFormData}
              handleCurrentFormData={setTotalFormData}
              prefillData={prefillData}
              setPrefillData={setPrefillData}
              editId={editId}
            />
          </Stepper.Step>

          <Stepper.Step completedIcon={<span>2</span>}>
            <OrganizationInfo
              currentFormData={totalFormData}
              handleCurrentFormData={setTotalFormData}
              prefillData={prefillData}
              setPrefillData={setPrefillData}
              editId={editId}
            />
          </Stepper.Step>

          <Stepper.Step completedIcon={<span>3</span>}>
            <CardStyle
              currentFormData={totalFormData}
              handleCurrentFormData={setTotalFormData}
              prefillData={prefillData}
              setPrefillData={setPrefillData}
              editId={editId}
            />
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
            onClick={() => {
              console.log(active, "adkadfdfj");
              active == 2
                ? editId
                  ? updatDetails(editId)
                  : sendDetails
                : nextStep();
            }}
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
            {active === 2 ? (editId ? "Save" : "Create") : "Next"}
          </Button>
        </Group>
      </Modal>

      <CardSuccess
        fetchData={fetchData}
        opened={showSuccessModal}
        close={closesuccess}
        handleClose={setShowSuccessModal}
      />
    </>
  );
}
