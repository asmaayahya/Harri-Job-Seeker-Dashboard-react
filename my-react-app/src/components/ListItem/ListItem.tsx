import React from "react";
import { Column } from "../Column/Column";
import { Row } from "../Row/Row";
import "./ListItem.css";

interface ListItemProps {
  title: string;
  subtitle: string;
  status?: string;
  date?: string;
  leadingContent?: React.ReactNode;
  action?: React.ReactNode;
  confirmed?: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  status,
  date,
  leadingContent,
  action,
  confirmed = false,
}) => {
  return (
    <div className={`list-item-container ${confirmed ? "confirmed" : ""}`}>
      <Row justify="center" align="start">
        {leadingContent && <div className="item-media">{leadingContent}</div>}
        <Column>
          <div className="item-title">{title}</div>
          <div className="item-subtitle">{subtitle}</div>
        </Column>
      </Row>

      <Column justify="center" align="left">
        <div className="item-status">{status}</div>
        <div className="item-date">{date}</div>
      </Column>

      <div className="list-item-right">
        {action && <div className="item-action">{action}</div>}
      </div>
    </div>
  );
};
