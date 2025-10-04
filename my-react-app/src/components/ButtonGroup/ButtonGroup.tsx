import React, { type ReactNode } from "react";
import "./ButtonGroup.css";

type ButtonGroupProps = {
  children: ReactNode;
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
  return <div className="btn-group">{children}</div>;
};
