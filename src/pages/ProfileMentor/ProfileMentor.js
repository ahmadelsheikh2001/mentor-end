import React, { useState } from "react";
import CoverPhoto from "../../components/Profile/CoverPhoto/CoverPhoto";
import ProfileNav from "../../components/Profile/ProfileNav/ProfileNav";
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";
import MentorOpertunity from "../../components/Profile/MentorOpertunity/MentorOpertunity";
import PreviousMentorOpertunity from "../../components/Profile/PreviousMentorOpertunity/PreviousMentorOpertunity";
import CalendarDays from "../Profile/calender-days";
import HeaderWithIcon from "../../components/Globel/Header/HeaderWithIcon";
import { AiFillPlusSquare } from "react-icons/ai";
import "./ProfileMentor.css";
import SidaNav2 from "../sideBar/SideBar";
import SidebarLeft from "../../components/Globel/SidebarLeft/SidebarLeft";

const ProfileMentor = (props) => {
  const [date, setDate] = useState({ currentDay: new Date() });
  const changeCurrentDay = (day) => {
    setDate({ currentDay: new Date(day.year, day.month, day.number) });
  };
  const title = {
    name1: "Job Title",
    value1: "Software Engineer",
    name2: "Company",
    value2: "Software Engineer",
  };
  return (
    <>
      <HeaderWithIcon />
      <div className="page16-profile-mentor p-0">
        <div className="container-fluid p-0 mt-5">
          <div className="row">
            <div className="page16-left col-md-3">
              <SidebarLeft/>
            </div>
            <div className="page16-content col-md-6 p-0">
              <CoverPhoto type="mentor" />
              <ProfileNav />
              <ProfileInfo title={title} flag={false} />
              <MentorOpertunity />
              <PreviousMentorOpertunity />
            </div>
            <div className="page16-right col-md-3">
              <CalendarDays
                day={date.currentDay}
                changeCurrentDay={changeCurrentDay}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileMentor;
