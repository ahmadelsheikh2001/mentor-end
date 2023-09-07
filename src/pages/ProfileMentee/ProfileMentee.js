import React from 'react';
import CoverPhoto from '../../components/Profile/CoverPhoto/CoverPhoto'
import ProfileNav from '../../components/Profile/ProfileNav/ProfileNav';
import ProfileInfo from '../../components/Profile/ProfileInfo/ProfileInfo';
import MentoringRequest from '../../components/Profile/MentoringRequest/MentoringRequest';
import PreviousMentor from '../../components/Profile/PreviousMentor/PreviousMentor';
import './ProfileMentee.css';

const ProfileMentee = () => {
  const title={
    name1:`I'm a`,
    value1:'Fresh graduate',
    name2:'University',
    value2:'international islamic university'
  }
  return (
    <div className='page15-profile-mentee'>
       <div className='container-fluid p-0 mt-5'>
         <div className='row'>
           <div className='page15-left col-2 d-md-block d-none border'>
              <div className='sidebar-left'>
                 <p>Sidebar left</p>
              </div>
           </div>
           <div className='page15-content col-md-8 col-12'>
              <CoverPhoto type='mentee'/>
              <ProfileNav/>
              <ProfileInfo title={title} flag={true}/>
              <MentoringRequest/>
              <PreviousMentor/>
           </div>
           <div className='page15-right col-2 d-md-block  d-none border'>
              <div className='sidebar-right'>
                 <p>sidebar right</p>
              </div>
           </div>
         </div>
       </div>
    </div>
  )
}
export default ProfileMentee;
