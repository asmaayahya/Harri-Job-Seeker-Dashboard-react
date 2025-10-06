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
import { List } from "../List/List";
import { ListItem } from "../ListItem/ListItem";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { DateColumn } from "../DateColumn/DateColumn";
import { JobList } from "../CardList/CardList";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { SidebarSectionTitle } from "../SidebarSectionTitle/SidebarSectionTitle";
import { InfoItem } from "../InfoItem/InfoItem";
import { ActionItem } from "../ActionItem/ActionItem";
import { ProgressCircle } from "../ProgressCircle/ProgressCircle";
import { CardItem } from "../CardItem/CardItem";





export const ColumnsContainer: React.FC = () => {
  return (
    <div className="container">
      <div className="col-container-grid">
        
        <Column className="left-column">

          <ContentBox className="cover-box" >
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
            <List items={[
             <ListItem leadingContent={<img src="src/assets/harri_logo.jpg"></img>} title={"Designer"} subtitle={"Harri - Palestine"} status={"Interview confirmed"} date={"Apr 11, 2018"}
              action={<Row gap={"0.8rem"} >
                <Button variant="ghost" size="md"><span className="btn-text-lg">View Job</span></Button>
                <IconButton icon={<HiOutlineDotsHorizontal size={20} color="black" />} color="#F5F6F7" iconColor="black" rounded={false}></IconButton>
              </Row> }></ListItem>,
                           <ListItem leadingContent={<img src="src/assets/harri_logo.jpg"></img>} title={"Designer"} subtitle={"Harri - Palestine"} status={"Interview confirmed"} date={"Apr 11, 2018"}
              action={<Row gap={"0.8rem"} >
                <Button variant="ghost" size="md"><span className="btn-text-lg">View Job</span></Button>
                <IconButton icon={<HiOutlineDotsHorizontal size={20} color="black" />} color="#F5F6F7" iconColor="black" rounded={false}></IconButton>
              </Row> }></ListItem>,
                           <ListItem leadingContent={<img src="src/assets/harri_logo.jpg"></img>} title={"Designer"} subtitle={"Harri - Palestine"} status={"Interview confirmed"} date={"Apr 11, 2018"}
              action={<Row gap={"0.8rem"} >
                <Button variant="ghost" size="md"><span className="btn-text-lg">View Job</span></Button>
                <IconButton icon={<HiOutlineDotsHorizontal size={20} color="black" />} color="#F5F6F7" iconColor="black" rounded={false}></IconButton>
              </Row> }></ListItem>,
                           <ListItem leadingContent={<img src="src/assets/harri_logo.jpg"></img>} title={"Designer"} subtitle={"Harri - Palestine"} status={"Interview confirmed"} date={"Apr 11, 2018"}
              action={<Row gap={"0.8rem"} >
                <Button variant="ghost" size="md"><span className="btn-text-lg">View Job</span></Button>
                <IconButton icon={<HiOutlineDotsHorizontal size={20} color="black" />} color="#F5F6F7" iconColor="black" rounded={false}></IconButton>
              </Row> }></ListItem>,
                           <ListItem leadingContent={<img src="src/assets/harri_logo.jpg"></img>} title={"Designer"} subtitle={"Harri - Palestine"} status={"Interview confirmed"} date={"Apr 11, 2018"}
              action={<Row gap={"0.8rem"} >
                <Button variant="ghost" size="md"><span className="btn-text-lg">View Job</span></Button>
                <IconButton icon={<HiOutlineDotsHorizontal size={20} color="black" />} color="#F5F6F7" iconColor="black" rounded={false}></IconButton>
              </Row> }></ListItem>
            ]}>
              
            </List>
            <Row justify="center"><Button variant="ghost" rightIcon={<FaArrowRight/>}  className="section-last-row">Show more </Button>
            </Row>

          </ContentBox>
          <ContentBox >
            <TabList title="Interviews">
              <Tab label="Pending" onSelect={() => {}} isActive={true} />
              <Tab label="Confirmed" onSelect={() => {}} />
            </TabList>
            <List items={[
             <ListItem leadingContent={<DateColumn month="Mar" day="24" />} title={"09:15am - 10:15am"} subtitle={"Waiting confirmation"} status={"Interview confirmed"} date={"Apr 11, 2018"}
              action={
                <Button variant="ghost" size="md"><span className="btn-text-lg">View details</span></Button> }></ListItem>,
              <ListItem leadingContent={<DateColumn month="Mar" day="26" confirmation={true}/>} title={"09:15am - 10:15am"} subtitle={"Intervtew confirmed with Ahmad Maqboul"}
              action={
                <Button variant="ghost" size="md"><span className="btn-text-lg">View details</span></Button> } confirmed={true}></ListItem>,
              <ListItem leadingContent={<DateColumn month="Mar" day="26" />} title={"09:15am - 10:15am"} subtitle={"Waiting confirmation"} status={"Interview confirmed"} date={"Apr 11, 2018"}
              action={
                <Button variant="ghost" size="md"><span className="btn-text-lg">View details</span></Button> }></ListItem>
            ]}>
            </List>
          </ContentBox>
          <ContentBox>
            <TabList title="Jobs you may be interested in" justify="end" children={<div className="tab-list-location" >New York</div>} ></TabList>
            <List items={[
            ]}>
            </List>
            <JobList gap={20}>
              <CardItem
                media={<img src="src/assets/harri_logo.jpg" alt="Harri Logo" />}
                title="Harri - Palestine"
                subtitle="Chapter Lead / Senior Crew Member"
                action={<Button variant="outline" size="md" className="apply-btn">Apply now</Button>}
              />
              <CardItem
                media={<img src="src/assets/harri_logo.jpg" alt="Harri Logo" />}
                title="Harri - Palestine"
                subtitle="Chapter Lead / Senior Crew Member"
                action={<Button variant="outline" size="md" className="apply-btn">Apply now</Button>}
              />
              <CardItem
                media={<img src="src/assets/harri_logo.jpg" alt="Harri Logo" />}
                title="Harri - Palestine"
                subtitle="Chapter Lead / Senior Crew Member"
                action={<Button variant="outline" size="md" className="apply-btn">Apply now</Button>}
              />
            </JobList>
            <Row justify="center" className="pagination-container" gap={"0.7rem"}>
              <IconButton icon={<MdOutlineKeyboardArrowLeft color="#0088dd" size={30} />} color="#E5EEFA"></IconButton>
              <div className="pagination-info">3 of 10</div>
              <IconButton icon={<MdOutlineKeyboardArrowRight color="#0088dd" size={30}/>} color="#E5EEFA"></IconButton>
            </Row>

          </ContentBox>

        </Column>

       
        <Column className="right-column">
          <ContentBox >
            <SidebarSectionTitle title="Profile Strength" />
            <ProgressCircle progress={65} size={140} strokeWidth={25} circleColor="#E6E8EA" progressColor="#FECA57" />

            <Column className="action-column" gap={"0.5rem"}>
            
            <Row justify="center"  gap={"0.5rem"}>
              <ActionItem icon={<img src="src/assets/skills.png" width="35px" height="35px"></img>} label="Add skills" />
              <ActionItem icon={<img src="src/assets/refer.png" width="35px" height="35px"></img>} label="Add References" />
            </Row>
            <Row justify="center" gap={"0.5rem"}>
              <ActionItem icon={<img src="src/assets/expertise.png" width="35px" height="35px"></img>} label="Update Experience" />
              <ActionItem icon={<img src="src/assets/image (1).png" width="35px" height="35px"></img>} label="Add cover photo" />
            </Row>
            </Column>

          </ContentBox>


          <ContentBox >
              <SidebarSectionTitle title="Learn from our top member" />
            <List items={[
              <>
              <InfoItem
                leadingContent={<Avatar src="src/assets/user_photo.jpg" alt="Profile"/>}
                title="Maria Illescas"
                subtitle="Marketing Manager" />

                              <InfoItem
                leadingContent={<Avatar src="src/assets/user_photo.jpg" alt="Profile"/>}
                title="Maria Illescas"
                subtitle="Marketing Manager" />
                              <InfoItem
                leadingContent={<Avatar src="src/assets/user_photo.jpg" alt="Profile"/>}
                title="Maria Illescas"
                subtitle="Marketing Manager" />
                              <InfoItem
                leadingContent={<Avatar src="src/assets/user_photo.jpg" alt="Profile"/>}
                title="Maria Illescas"
                subtitle="Marketing Manager" />
                                              <InfoItem
                leadingContent={<Avatar src="src/assets/user_photo.jpg" alt="Profile"/>}
                title="Maria Illescas"
                subtitle="Marketing Manager" />
                                              <InfoItem
                leadingContent={<Avatar src="src/assets/user_photo.jpg" alt="Profile"/>}
                title="Maria Illescas"
                subtitle="Marketing Manager" />
                                              <InfoItem
                leadingContent={<Avatar src="src/assets/user_photo.jpg" alt="Profile"/>}
                title="Maria Illescas"
                subtitle="Marketing Manager" />
              </>

            ]}></List>
            <Row justify="center"><Button variant="ghost" rightIcon={<FaArrowRight/>}  className="section-last-row">Show more </Button>
            </Row>

          </ContentBox>

          <ContentBox >
              <SidebarSectionTitle title="Similar jobs" />
            <List items={[
              <>
              <InfoItem
                leadingContent={<img src="src/assets/harri_logo.jpg" />}
                title="Chapter Lead/ Senior Crew Member"
                subtitle="Harri - Palestine"
                subtitlePosition="above"
                />

              <InfoItem
                leadingContent={<img src="src/assets/harri_logo.jpg" />}
                title="Chapter Lead/ Senior Crew Member"
                subtitle="Harri - Palestine"
                subtitlePosition="above"
                />

              <InfoItem
                leadingContent={<img src="src/assets/harri_logo.jpg" />}
                title="Chapter Lead/ Senior Crew Member"
                subtitle="Harri - Palestine"
                subtitlePosition="above"
                />
              <InfoItem
                leadingContent={<img src="src/assets/harri_logo.jpg" />}
                title="Chapter Lead/ Senior Crew Member"
                subtitle="Harri - Palestine"
                subtitlePosition="above"
                />

              <InfoItem
                leadingContent={<img src="src/assets/harri_logo.jpg" />}
                title="Chapter Lead/ Senior Crew Member"
                subtitle="Harri - Palestine"
                subtitlePosition="above"
                />

              <InfoItem
                leadingContent={<img src="src/assets/harri_logo.jpg" />}
                title="Chapter Lead/ Senior Crew Member"
                subtitle="Harri - Palestine"
                subtitlePosition="above"
                />

              <InfoItem
                leadingContent={<img src="src/assets/harri_logo.jpg" />}
                title="Chapter Lead/ Senior Crew Member"
                subtitle="Harri - Palestine"
                subtitlePosition="above"
                />

              </>



            ]}></List>

            <Row justify="center"><Button variant="ghost" rightIcon={<FaArrowRight/>}  className="section-last-row">Show more </Button>
            </Row>
          </ContentBox>

          <ContentBox >
              <SidebarSectionTitle title="Articles" />

            <List items={[
              <>
              <InfoItem
                title="Articles lorem ipsem #1"
                subtitle="Harri - Palestine" />

              <InfoItem
                title="Articles lorem ipsem #2"
                subtitle="Harri - Palestine" />

              <InfoItem
                title="Articles lorem ipsem #3"
                subtitle="Harri - Palestine" />
              <InfoItem
                title="Articles lorem ipsem #4"
                subtitle="Harri - Palestine" />

              <InfoItem
                title="Articles lorem ipsem #5"
                subtitle="Harri - Palestine" />

              </>



            ]}></List>

            <Row justify="center"><Button variant="ghost" rightIcon={<FaArrowRight/>}  className="section-last-row">Show more </Button>
            </Row>
          </ContentBox>

        </Column>
      </div>
    </div>
  );
};