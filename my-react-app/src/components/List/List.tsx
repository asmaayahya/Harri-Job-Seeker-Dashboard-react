import React, { type ReactNode } from "react";

interface ListProps {
  items: ReactNode[];
  className?: string;
}

export const List: React.FC<ListProps> = ({ items, className = "" }) => {
  return (
    <ul className={`list ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item}
        </li>
      ))}
    </ul>
  );
};
