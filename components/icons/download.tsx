import React from "react";

import { Istyle } from "./task";

const Download = ({color, onClick, className}:Istyle) => {
  return (
    <svg
    className={className}
    onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.98825 12.5834C3.98825 12.325 2.76325 10.7834 2.76325 7.40837V7.30004C2.76325 3.57504 4.25492 2.08337 7.97992 2.08337L13.4049 2.08337C17.1299 2.08337 18.6216 3.57504 18.6216 7.30004V7.40837C18.6216 10.7584 17.4132 12.3 14.4632 12.575"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6885 7.49994L10.6885 16.9833"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.89665 15.125L10.6883 17.9166L13.48 15.125"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Download;
