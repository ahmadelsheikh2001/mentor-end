import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Icons from "./Help/Icons/Icons";
import ContactUs from "./pages/ContactUs/ContactUs";
import MentorRequest from "./components/MentorRequest/MentorRequest";
import New_MentorRequest1 from "./pages/New_MentorRequest1/New_MentorRequest1";
import CloseMentor from "./pages/PageCloseMentor/CloseMentor";
import Mentoring_opportunity_Form from "./components/Mentoring_opportunity_Form/Mentoring_opportunity_Form";
import Login from "./pages/Login/Login";
import Profile from "./pages/Pofile/Profile";
import Profile2 from "./pages/Profile2/Mentee";
import Mentor_Request_Form from "./components/Mentor_Request_Form/Mentor_Request_Form";
import Footer from "./components/Globel/Footer/Footer";
import Resgister from "./pages/Register/Register";
import Header from "./components/Globel/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from "./components/search/Page";
import Search from "./pages/search/Search";
import SideBar from "./pages/sideBar/SideBar"
import MainProfile from "./pages/Profile/MainProfile";
import CalendarDays from "./pages/Profile/calender-days";
import Pstopprtunity from "./pages/PstOpprtunity/Pstopprtunity.jsx";
import ProfileMentee from './pages/ProfileMentee/ProfileMentee';
import ProfileMentor from './pages/ProfileMentor/ProfileMentor';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/icons" element={<Icons />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Resgister />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/MentorRequest" element={<MentorRequest />} />
          <Route path="/closementor" element={<CloseMentor />} />
          <Route path="/search" element={<Search />} />
          <Route path="/MainProfile" element={<MainProfile />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Profile2" element={<Profile2 />} />
          <Route path="/pstopprtunity" element={<Pstopprtunity />} />
          <Route path="/new_mentorrequest1" element={<New_MentorRequest1 />} />
        {
          // <Route path='/profileMentee' element={<ProfileMentee />} />
        }
          <Route path='/profileMentor' element={<ProfileMentor />} />
          <Route path='/profileMentee' element={<ProfileMentee/>}/>
          <Route  path="/Mentoring_opportunity_Form" element={<Mentoring_opportunity_Form />} />
          <Route path="/Mentor_Request_Form"  element={<Mentor_Request_Form />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
