import React from "react";
import { Istyle } from "./task";

const Portrait = ({color, onClick} : Istyle) => {
  return (
    <svg
    onClick={onClick}
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="17.5"
        width="17"
        height="14"
        rx="1.75"
        transform="rotate(-90 0.5 17.5)"
        stroke={color}
      />
      <line
        x1="3.75"
        y1="5.25"
        x2="11.25"
        y2="5.25"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="3.75"
        y1="8.75"
        x2="9.25"
        y2="8.75"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="3.75"
        y1="12.25"
        x2="5.25"
        y2="12.25"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Portrait;
