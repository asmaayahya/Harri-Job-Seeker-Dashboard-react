import React from "react";
import "./SidebarSectionTitle.css";

interface SidebarSectionTitleProps {
  title: string;
  className?: string;
}

export const SidebarSectionTitle: React.FC<SidebarSectionTitleProps> = ({
  title,
  className,
}) => {
  return (
    <h3 className={`sidebar-section-title ${className || ""}`}>
      {title}
    </h3>
  );
};
