import React from "react";

import { Istyle } from "./task";
import { useDisclosure } from "@mantine/hooks";
import DeleteCard from "../modals/delete-card";

interface DeleteProps extends Istyle {
  selectedCard?: number;
  fetchData : ()=> void;
  fetchPortrait: ()=> void;
  fetchLandscape: ()=>void
}

const Delete = ({ color, onClick, className, selectedCard, fetchData, fetchLandscape, fetchPortrait }: DeleteProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <svg
        onClick={() => {
          open();
          onClick;
        }}
        className={className}
        width="20"
        height="20"
        viewBox="0 0 26 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.2318 13.9473C10.2318 12.0496 8.19026 11.0859 7.50676 12.8562C7.23748 13.5537 7.08984 14.3116 7.08984 15.1039C7.08984 18.5546 9.88995 21.3519 13.3441 21.3519C16.7982 21.3519 19.5983 18.5546 19.5983 15.1039C19.5983 14.33 19.4574 13.5889 19.2 12.9049C18.5462 11.1682 16.5473 12.0917 16.5473 13.9473C16.5473 14.5861 16.0295 15.1039 15.3908 15.1039H11.3884C10.7496 15.1039 10.2318 14.5861 10.2318 13.9473Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.2317 6.57966C10.2317 5.94408 9.61266 5.4931 9.03544 5.75915C5.50088 7.38828 3.04785 10.9599 3.04785 15.1039C3.04785 20.7846 7.65758 25.3898 13.344 25.3898C19.0304 25.3898 23.6401 20.7846 23.6401 15.1039C23.6401 10.999 21.2331 7.45565 17.7522 5.80572C17.1737 5.53156 16.5473 5.98318 16.5473 6.62328C16.5473 7.00587 16.7812 7.34602 17.1236 7.51661C19.9109 8.90501 21.8255 11.7811 21.8255 15.1039C21.8255 19.7834 18.0282 23.5769 13.344 23.5769C8.65979 23.5769 4.86252 19.7834 4.86252 15.1039C4.86252 11.7488 6.81454 8.84911 9.64592 7.47652C9.99332 7.30811 10.2317 6.96573 10.2317 6.57966Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.144 2.61023C12.6877 2.61023 12.3179 2.98009 12.3179 3.43636V12.1541C12.3179 12.6103 12.6877 12.9802 13.144 12.9802H13.5447C14.001 12.9802 14.3709 12.6103 14.3709 12.1541V3.43636C14.3709 2.98009 14.001 2.61023 13.5447 2.61023H13.144Z"
          fill={color}
        />
      </svg>
      <DeleteCard
        opened={opened}
        expert_id={selectedCard as number}
        close={close}
        fetchData={fetchData}
        fetchLandscape={fetchLandscape}
        fetchPortrait={fetchPortrait}
      />
    </>
  );
};

export default Delete;
