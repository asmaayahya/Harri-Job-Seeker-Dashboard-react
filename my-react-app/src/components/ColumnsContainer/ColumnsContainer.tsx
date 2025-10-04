import React from "react";
import "./ColumnsContainer.css";
import { ContentBox } from "../ContentBox/ContentBox";
import { Column } from "../Column/Column";
import { Button } from "../Button/Button";
import { FaRegImage } from "react-icons/fa6";
import { Avatar } from "../Avatar/Avatar";
import { Row } from "../Row/Row";
import { IconButton } from "../IconButton/IconButton";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { IoIosArrowDown } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import { Tab } from "../Tab/Tab";
import { TabList } from "../TabList/TabList";



export const ColumnsContainer: React.FC = () => {
  return (
    <div className="container">
      <div className="col-container-grid">
        
        <Column className="left-column">

          <ContentBox className="cover-box">
            <img
              className="cover-image"
              src="src/assets/cover.jpg"
              alt="cover image"
            />
            <Button variant="black-transparent" size="md" color="black-transparent-color" leftIcon ={<FaRegImage color="white" size={20}/> } className="cover-btn">Change cover photo</Button>
            <Avatar size={80} src="src/assets/user_photo.jpg" alt="User Avatar" className="user-avatar" borderWidth={4}/>

            <Row gap="0.5rem" align="start" justify="space-between" className="user-name-row"  >
              <Column align="left" justify="center">
                <h2 className="user-name">Mhamad Jarrar</h2>
                <h3 className="user-role">Bartender Lead</h3>
              </Column>
              <Row gap="0.5rem" align="center" justify="space-between">
                <IconButton icon={<FaLinkedinIn size={11} color="white" />} size="sm" color="#0766C2" rounded = {false} />
                <IconButton icon={<FaFacebookF size={11} color="white" />} size="sm" color="#0F72F6" rounded = {false}/>
                <IconButton icon={<FaXTwitter size={11} color="white" />} size="sm" color="#000000ff" rounded = {false} />
                <IconButton icon={<MdEmail size={11}  color="black"/>} size="sm" color="#CDD1D6" rounded = {false} />
              </Row>
            </Row>
            <p className="description"> Managed multiple projects from concept to completion. Work well under pressure and highly experienced at leading and collaborating with sizeable teams of experts, and contractors. Solid understanding of efficiency, budgets, and value-for-money in design, as well as business...
              <Link to={"/about"} className="see-more">See more</Link>
            </p>
            <Row justify="start" align="center" gap="0.5rem" className="profile-action-row" >
              <ButtonGroup children={

                <>
                <Button size="sm" variant="solid">Improve your profile </Button>
                <IconButton icon={<IoIosArrowDown size={25} color="white"/> } rounded={false} size="md" color="#006DB1"></IconButton></>

                }
                >
              </ButtonGroup>
              <Button size="sm" leftIcon={<FaShare />} rightIcon={<IoIosArrowDown size={25}/>} variant="outline"><span style={{ fontWeight: 600 }}>Share</span></Button>
            </Row>
          </ContentBox>


          <ContentBox >
            <TabList title="Applications">
              <Tab label="All" onSelect={() => {}} isActive={true} />
              <Tab label="Active" onSelect={() => {}} />
              <Tab label="Screening questions" onSelect={() => {}} />
              <Tab label="Training courses" onSelect={() => {}} />
            </TabList>






          </ContentBox>
          <ContentBox >Left Box 3</ContentBox>
        </Column>

       
        <Column className="right-column">
          <ContentBox >Right Box 1</ContentBox>
          <ContentBox >Right Box 2</ContentBox>
          <ContentBox >Right Box 3</ContentBox>
        </Column>
      </div>
    </div>
  );
};