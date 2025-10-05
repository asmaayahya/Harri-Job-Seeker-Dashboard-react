import React from "react";
import { Row } from "../Row/Row";
import { IconButton } from "../IconButton/IconButton";
import { Avatar } from "../Avatar/Avatar";
import { FaFolderOpen, FaCaretDown } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { FaCircleInfo } from "react-icons/fa6";
import "./Header.css"

interface HeaderProps {
  logoSrc: string;
  userName: string;
  userPhoto: string;
  icons?: React.ReactNode[];
}

export const Header: React.FC<HeaderProps> = ({
  logoSrc,
  userName,
  userPhoto,
  icons,
}) => {
  return (
    <Row
      gap="1rem"
      align="center"
      justify="space-between"
      className="header-row"
    >
      <img src={logoSrc} alt="Logo" style={{ height: 40 }} />

      <Row gap="0.8rem" align="center">
        {(icons || [
          <IconButton key="info" icon={<FaCircleInfo size={25} />} size="lg" color="#F5F6F7" />,
          <IconButton key="chat" icon={<IoChatbubbleEllipsesSharp size={25} />} size="lg" color="#F5F6F7" />,
          <IconButton key="folder" icon={<FaFolderOpen size={25} />} size="lg" color="#F5F6F7" />,
          <IconButton key="email" icon={<MdEmail size={25} />} size="lg" color="#F5F6F7" />,
          <IconButton key="home" icon={<TiHome size={25} />} size="lg" color="#F5F6F7" />,
        ]).map((iconBtn, idx) => (
          <React.Fragment key={idx}>{iconBtn}</React.Fragment>
        ))}

        <Row
          gap="1rem"
          align="center"
          justify="space-between"
          className="header-user"
        >
          <Avatar src={userPhoto} alt="User Photo" size={30} />
          <span>{userName}</span>
          <FaCaretDown />
        </Row>
      </Row>
    </Row>
  );
};
