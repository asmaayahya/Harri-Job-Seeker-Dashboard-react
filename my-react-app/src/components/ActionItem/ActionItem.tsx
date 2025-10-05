import React from "react";
import "./ActionItem.css";
import { Column } from "../Column/Column";

interface ActionItemProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const ActionItem: React.FC<ActionItemProps> = ({
  icon,
  label,
  className = "",
}) => {
  return (
    <Column className={`action-item ${className}`} justify="center">
      <div className="action-icon">{icon}</div>
      <div className="action-label">{label}</div>
    </Column>
  );
};
