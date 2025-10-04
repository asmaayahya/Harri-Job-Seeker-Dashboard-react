import React from "react";
import { Column } from "../Column/Column";
import { Row } from "../Row/Row";
import "./ListItem.css"

interface ListItemProps {
  title: string;
  subtitle: string;
  status: string;
  date: string;
  leadingContent?: React.ReactNode;
  action?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  status,
  date,
  leadingContent,
  action,
}) => {
  return (
    <div className="list-item-container">
      {/* Left section */}
      <Row justify="center" align="start">
        {leadingContent && <div className="item-media">{leadingContent}</div>}
        <Column  >
          <div className="item-title">{title}</div>
          <div className="item-subtitle">{subtitle}</div>
        </Column>
      </Row>

      {/* Middle section */}
      <Column justify="center" align="left" >
        <div className="item-status">{status}</div>
        <div className="item-date">{date}</div>
      </Column>

      {/* Right section */}
      <div className="list-item-right">
        {action && <div className="item-action">{action}</div>}
      </div>
    </div>
  );
};
