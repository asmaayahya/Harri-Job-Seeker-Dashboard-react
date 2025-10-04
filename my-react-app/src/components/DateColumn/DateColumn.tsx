import React from "react";
import { Column } from "../Column/Column";
import "./DateColumn.css"

interface DateColumnProps {
  month: string;
  day: string;
  className?: string;
  confirmation?: boolean;
}

export const DateColumn: React.FC<DateColumnProps> = ({ 
  month, 
  day, 
  className, 
  confirmation = false 
}) => {
  return (
    <Column 
      justify="center" 
      align="center" 
      className={`leading-column ${confirmation ? "confirmed" : ""} ${className || ""}`}
    >
      <div className="date-month">{month}</div>
      <div className="date-day">{day}</div>
    </Column>
  );
};
