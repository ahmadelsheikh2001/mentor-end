import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileNav.css';

const ProfileNav = () => {
  return (
    <div className='profile-nav mt-3 mb-4 px-2'>
        <Link to='' className='text-capitalize text-decoration-none me-3 active'>personal information</Link>
        <Link to='' className='text-capitalize text-decoration-none'>Additional information</Link>
    </div>
  )
}
export default ProfileNav;
