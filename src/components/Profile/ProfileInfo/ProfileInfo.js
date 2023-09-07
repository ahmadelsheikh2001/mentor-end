import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamation} from '@fortawesome/free-solid-svg-icons';
import './ProfileInfo.css';

const ProfileInfo = ({title,flag}) => {
  return (
    <div className='profile-info-part px-2'>
      <div className='profile-info-container position-relative p-4'>
        <div className='profile-content d-flex'>
          <div className='left-side-part mt-3'>
            <div className='name'>
              <p className='title'>Name</p>
              <p>Balqees Hamdi</p>
            </div>
            <div className='grad mt-4'>
              <p className='title'>{title.name1}</p>
              <p>{title.value1}</p>
            </div>
            <div className='university mt-4'>
              <p className='title'>{title.name2}</p>
              <p>{title.value2}</p>
            </div>
          </div>
          <div className='right-side-part mt-3'>
            <div className='phone'>
              <p className='title'>Phone</p>
              <p>0995457312</p>
            </div>
            <div className='email mt-4'>
              <p className='title'>Email</p>
              <p>Balqeessabir@gmail.com</p>
            </div>
            <div className={flag?'job-btn d-block':'d-none'}>
              <button className='btn-gernal btn-defauit d-flex justify-content-around align-items-center'>
                <span>Job Seeker</span>
                <div className='ex-icon ms-2'>
                  <FontAwesomeIcon icon={faExclamation} className='icon'/>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className='desc mt-4'>
          <p>dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat non proident, sunt in clupa qui
              officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className='profile-experiences'>
          <p className='title'>Experience</p>
          <div className='profile-experience d-flex justify-content-between'>
            <p>Software Engineer at EIT</p>
            <p className='profile-year'>2016 - 2018</p>
          </div>
          <div className='profile-experience d-flex justify-content-between'>
            <p>Software Engineer at IAT</p>
            <p className='profile-year'>2016 - 2018</p>
          </div>
          <div className='profile-experience d-flex justify-content-between'>
            <p>Backend developer at Suhaj.inc</p>
            <p className='profile-year'>2016 - 2018</p>
          </div>
        </div>
        <div className='skills'>
          <p className='title'>Skills</p>
          <div className='skills-container d-flex mt-2'>
              <button class="btn-gernal-skills mt-1">C#</button>
              <button class="btn-gernal-skills mt-1 mx-2">Communication</button>
              <button class="btn-gernal-skills mt-1">UI / UX</button>
          </div>
          <div className='skills-container d-flex mt-2'>
            <button class="btn-gernal-skills mt-1">Coding</button>
            <button class="btn-gernal-skills mt-1 mx-2">Presentation</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo;

                    
                      
                      
                    
                    