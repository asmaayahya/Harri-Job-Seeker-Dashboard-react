import React from "react";

interface ColumnProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
}

export const Column: React.FC<ColumnProps> = ({ children, className, align, justify }) => {
  return (
    <div className={className} style={{ textAlign: align, justifyContent: justify }}>
      {children}
    </div>
  );
};
