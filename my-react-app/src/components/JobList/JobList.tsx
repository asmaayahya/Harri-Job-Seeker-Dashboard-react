import React, { type ReactNode } from "react";
import { Row } from "../Row/Row";
import "./JobList.css";

interface JobListProps {
  children: ReactNode;
  gap?: number;
  className?: string;
}

export const JobList: React.FC<JobListProps> = ({ children, gap = 20, className }) => {
  return (
    <div className={`job-list ${className || ""}`}>
      <Row justify="center" gap={gap}>
        {children}
      </Row>
    </div>
  );
};
