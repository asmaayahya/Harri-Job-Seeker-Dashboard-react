import React from "react";
import "./Header.css";

interface HeaderProps {
  logo?: React.ReactNode;
  children?: React.ReactNode; // any components inside the header (like nav items, buttons, etc.)
  bgColor?: string;
  textColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo = "",
  children,
  bgColor = "#f5f6f7",
  textColor = "#333",
}) => {
  const headerStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header className="header" style={headerStyle}>
      {/* Logo */}
      <div className="logo">{logo}</div>

      {/* Any children passed in */}
      <nav className="nav">{children}</nav>
    </header>
  );
};
