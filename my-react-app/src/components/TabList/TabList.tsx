import React, { type ReactNode } from "react";
import "./TabList.css"

interface TabListProps {
  children: ReactNode;
  title?: string;
}

export const TabList: React.FC<TabListProps> = ({ children, title }) => {
  return (
    <div className="tab-list-container">
      {title && <h3 className="tab-list-title">{title}</h3>}
      <div className="tab-list">
        {children}
      </div>
    </div>
  );
};
