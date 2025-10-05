import React from "react";
import "./InfoItem.css";
import { Row } from "../Row/Row";
import { Column } from "../Column/Column";

interface InfoItemProps {
  leadingContent?: React.ReactNode;
  title: string;
  subtitle?: string;
  subtitlePosition?: "above" | "below";
}

export const InfoItem: React.FC<InfoItemProps> = ({
  leadingContent,
  title,
  subtitle,
  subtitlePosition = "below",
}) => {
  return (
    <Row justify="start" align="start" className="info-item" gap={"0.5rem"}>
      {leadingContent && <div className="item-media">{leadingContent}</div>}
      <Column justify="start">
        {subtitle && subtitlePosition === "above" && (
          <div className="item-subtitle">{subtitle}</div>
        )}
        <div className="item-title">{title}</div>
        {subtitle && subtitlePosition === "below" && (
          <div className="item-subtitle">{subtitle}</div>
        )}
      </Column>
    </Row>
  );
};
