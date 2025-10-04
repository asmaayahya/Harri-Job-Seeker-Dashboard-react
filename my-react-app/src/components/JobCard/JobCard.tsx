import React, { type ReactNode } from "react";
import "./JobCard.css";
import { Column } from "../Column/Column";

interface JobCardProps {
  logo: React.ReactNode;
  companyName: string;
  jobTitle: string;
  action?: ReactNode;
}

export const JobCard: React.FC<JobCardProps> = ({
  logo,
  companyName,
  jobTitle,
  action,
}) => {
  return (
    <Column justify="start" className="job-card">
        <div className="job-card-logo">{logo}</div>
        <div className="job-card-company">{companyName}</div>
        <div className="job-card-title">{jobTitle}</div>
      {action && <div className="job-card-action">{action}</div>}
    </Column>
  );
};
