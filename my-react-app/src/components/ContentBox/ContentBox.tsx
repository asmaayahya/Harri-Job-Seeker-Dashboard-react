import React, { type ReactNode } from "react";
import "./contentBox.css";

type ContentBoxProps = {
  children: ReactNode;
  bgColor?: string;
  className?: string;
};

export const ContentBox: React.FC<ContentBoxProps> = ({ children, bgColor = "#fff", className }) => {
  return (
    <div className={`content-box ${className}`} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
};
