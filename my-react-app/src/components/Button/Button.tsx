import React, { type ReactNode } from "react";
import "./button.css";

type ButtonProps = {
  variant?: "solid" | "outline" | "ghost" | "black-transparent";
  color?: "primary" | "secondary" | "danger" | "success" | "black-transparent-color";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  color = "primary",
  size = "md",
  children,
  leftIcon,
  rightIcon,
  className,
}) => {
  const buttonClassName = `btn btn-${color} btn-${variant} btn-${size} ${className}`;

  return (
    <button className={buttonClassName}>
      {leftIcon && <span className="btn-icon-left">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="btn-icon-right">{rightIcon}</span>}
    </button>
  );
};
