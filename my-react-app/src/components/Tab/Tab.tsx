import React from "react";
import "./Tab.css"

interface TabProps {
  label: string;
  isActive?: boolean;
  onSelect?: () => void;
}

export const Tab: React.FC<TabProps> = ({ label, isActive = false, onSelect }) => {
  return (
    <button
      className={`tab-btn ${isActive ? "active" : ""}`}
      onClick={onSelect}
    >
      {label}
    </button>
  );
};
