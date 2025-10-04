import React from "react";
import "./Row.css";

interface RowProps {
  children?: React.ReactNode;
  gap?: string | number;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
  className?: string;
  bgcolor?: string; 
  padding?: string | number;
  borderRadius?: string | number;
}

export const Row: React.FC<RowProps> = ({
  children,
  gap,
  align = "center",
  justify = "start",
  className = "",
  bgcolor,
  padding,
  borderRadius,
}) => {
  const gapStyle: React.CSSProperties = gap ? { gap } : {};
  const alignClass = `row-align-${align}`;
  const justifyClass = `row-${justify.replace(/\s+/g, "-")}`;
  const bgcolorStyle: React.CSSProperties = bgcolor ? { backgroundColor: bgcolor } : {};
  const paddingStyle: React.CSSProperties = padding ? { padding } : {};
  const borderRadiusStyle: React.CSSProperties = borderRadius ? { borderRadius } : {};

  return (
    <div className={`row ${alignClass} ${justifyClass} ${className}`} style={{ ...gapStyle, ...bgcolorStyle, ...paddingStyle, ...borderRadiusStyle }}>
      {children}
    </div>
  );
};
