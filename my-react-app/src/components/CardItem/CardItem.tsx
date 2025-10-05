import React, { type ReactNode } from "react";
import "./CardItem.css";
import { Column } from "../Column/Column";

interface CardItemProps {
  media?: React.ReactNode;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export const CardItem: React.FC<CardItemProps> = ({
  media,
  title,
  subtitle,
  action,
}) => {
  return (
    <Column justify="start" className="card-item">
      {media && <div className="card-item-media">{media}</div>}
      <div className="card-item-title">{title}</div>
      {subtitle && <div className="card-item-subtitle">{subtitle}</div>}
      {action && <div className="card-item-action">{action}</div>}
    </Column>
  );
};
