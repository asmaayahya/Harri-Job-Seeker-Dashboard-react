import React from "react";
import "./Avatar.css";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  initials?: string;
  borderColor?: string;
  borderWidth?: number;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "avatar",
  size = 40,
  initials,
  borderColor = "#fff",
  borderWidth = 2,
  className,
}) => {
  return (
    <div
      className={`avatar-container ${className}`}
      style={{ width: size, height: size, borderColor, borderWidth }}
    >
      {src ? (
        <img src={src} alt={alt} className="avatar-img" />
      ) : (
        <span className="avatar-initials">{initials}</span>
      )}
    </div>
  );
};
