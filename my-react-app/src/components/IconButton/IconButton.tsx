import React from "react";
import "./IconButton.css";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  color?: string;
  iconColor?: string;
  rounded?: boolean;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  size = "md",
  color,
  iconColor,
  rounded = true,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`icon-btn ${size} ${rounded ? "rounded" : "square"} ${className}`}
      style={{
        backgroundColor: color,
        color: iconColor,
      }}
    >
      {icon}
    </button>
  );
};
