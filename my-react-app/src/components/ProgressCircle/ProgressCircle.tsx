import React from "react";
import "./ProgressCircle.css";
import { Row } from "../Row/Row";

interface ProgressCircleProps {
  size?: number;
  strokeWidth?: number;
  progress: number;
  circleColor?: string;
  progressColor?: string;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  size = 100,
  strokeWidth = 10,
  progress,
  circleColor = "#e6e6e6",
  progressColor = "#0088dd",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Row justify="center">
      <svg width={size} height={size}>
        <circle
          stroke={circleColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="butt"
          className="progress-circle-progress"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={size * 0.25}
          fontWeight={700}
          fill="black"
        >
          {progress}%
        </text>
      </svg>
    </Row>
  );
};
