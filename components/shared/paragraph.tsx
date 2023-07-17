import React, { ReactNode } from "react";

interface HeadingProps {
  text: ReactNode;
  style?: string;
}

const Paragraph = ({ text, style }: HeadingProps) => {
  return <p className={`text-center text-16   ${style}`}>{text}</p>;
};

export default Paragraph;
