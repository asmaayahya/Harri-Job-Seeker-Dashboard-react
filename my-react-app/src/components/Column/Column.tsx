import React from "react";
import "./Column.css";

interface ColumnProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
  gap?: string | number;
}

export const Column: React.FC<ColumnProps> = ({ children, className = "", align, justify, gap }) => {
  const style: React.CSSProperties = {};
  if (align) style.textAlign = align;
  if (justify) style.justifyContent = justify;
  if (gap) style.gap = typeof gap === "number" ? `${gap}px` : gap;

  return (
    <div className={`column ${className}`} style={style}>
      {children}
    </div>
  );
};
