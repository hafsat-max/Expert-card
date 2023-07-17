import React, { useEffect, useState } from "react";
import { Istyle } from "./task";

const Landscape = ({ color, onClick }: Istyle) => {
  return (
    <svg
      onClick={onClick}
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="23" height="17" rx="2.5" stroke={color} />
      <line
        x1="4.75"
        y1="4.75"
        x2="19.25"
        y2="4.75"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="4.75"
        y1="8.75"
        x2="13.9167"
        y2="8.75"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="4.75"
        y1="12.75"
        x2="8.58333"
        y2="12.75"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Landscape;
