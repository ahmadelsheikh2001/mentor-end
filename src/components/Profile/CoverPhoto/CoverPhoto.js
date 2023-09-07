import React from 'react';
import {AiFillCamera} from "react-icons/ai";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faCalendar} from '@fortawesome/free-solid-svg-icons';
import coverPhoto from '../../../assets/images/colored_background.jpg';
import coverPhoto2 from '../../../assets/images/colored_background2.jpg';
import './CoverPhoto.css';

const CoverPhoto = ({type}) => {
  return (
    <div className='cover-photo'>
        <div className='cover-photo-bg position-relative  px-2'>
            <img src={coverPhoto} className='w-100  h-100 d-md-block d-none'/>
            <img src={coverPhoto2} className='w-100 h-100 d-md-none  d-block'/>
            <div className='profile-img position-absolute'>
              <AiFillCamera className='edit position-absolute text-white'/> 
            </div>      
            <div className='profile-info position-absolute text-center'>
              <p className='name'>Balqees hamdi</p>
              <p className='position'>Software engineer</p>
              <p className='type text-white text-uppercase'>{type}</p>
            </div>
            <div className='message'>
              <button class="btn-gernal btn-defauit position-absolute">Message</button>
            </div>
            <div className='icons d-md-none d-flex position-absolute'>
              <div className='email-icon text-center mx-2'>
                <FontAwesomeIcon icon={faEnvelope} className='email text-white'/>
              </div>
              <div className='calender-icon text-center'>
                <FontAwesomeIcon icon={faCalendar} className='calender text-white'/>
              </div>
            </div>
        </div>
    </div>
  )
}
export default CoverPhoto;
