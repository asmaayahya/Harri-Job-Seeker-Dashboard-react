import { Row } from "./components/Row/Row";
import { Avatar } from "./components/Avatar/Avatar";
import { IconButton } from "./components/IconButton/IconButton";
import { TiHome } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import "./App.css";
import { ColumnsContainer } from "./components/ColumnsContainer/ColumnsContainer";




export const App = () => {
  return (

    <><Row gap="1rem" align="center" justify="space-between" bgcolor="#ffffffff" padding="1rem">

      <img src="src/assets/harri.png" alt="Logo" style={{ height: 40 }} />
      <Row>
        <IconButton icon={<FaCircleInfo size={25} />} size="lg" color="#F5F6F7" />
        <IconButton icon={<IoChatbubbleEllipsesSharp size={25} />} size="lg" color="#F5F6F7" />
        <IconButton icon={<FaFolderOpen size={25} />} size="lg" color="#F5F6F7" />
        <IconButton icon={<MdEmail size={25} />} size="lg" color="#F5F6F7" />
        <IconButton icon={<TiHome size={25} />} size="lg" color="#F5F6F7" />
        <Row gap="1rem" align="center" justify="space-between" bgcolor="#f0f0f0" padding="0.5rem 1rem" borderRadius="50px">
          <Avatar src="src/assets/user_photo.jpg" alt="User Photo" size={30} />
          <span>Jerrad</span>
          <FaCaretDown />
        </Row>
      </Row>
    </Row><ColumnsContainer></ColumnsContainer></>
  );
};
