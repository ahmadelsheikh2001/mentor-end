import React from 'react'
import { Link } from 'react-router-dom';
import './SidebarLeft.css';

const SidebarLeft = () => {
  return (
    <div className='sidebar-left-part'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='sidebar-link col-12 px-5'>
                   <Link to='#'>Edit profile</Link>
                </div>
                <div className='sidebar-link col-12 px-5 my-3'>
                   <Link to='#'>Settings</Link>
                </div>
                <div className='sidebar-link col-12 px-5'>
                   <Link to='#'>Terms and Privacy</Link>
                </div>
                <div className='sidebar-link col-12 px-5 mb-2 opportunities'>
                   <Link to='#'>My Opportunities</Link>
                </div>
                <div className='sidebar-link col-12 px-5 mb-2'>
                   <Link to='#' className='d-flex align-items-center'>
                    <span>Post a new opportunity</span>
                    <span className="add ms-3">+</span>
                   </Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}
export default SidebarLeft;
