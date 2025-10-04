import React, { type ReactNode } from "react";
import "./TabList.css"

interface TabListProps {
  children: ReactNode;
  title?: string;
  justify?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";
}

export const TabList: React.FC<TabListProps> = ({ children, title, justify = "start" }) => {
  return (
    <div className="tab-list-container">
      {title && <h3 className="tab-list-title">{title}</h3>}
      <div className={`tab-list justify-${justify}`}>
        {children}
      </div>
    </div>
  );
};
