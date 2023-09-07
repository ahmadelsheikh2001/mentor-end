import React from 'react';
import './MentorOpertunity.css';

const data=[
  {id:1,courseName:'Website UI design implementation',mentor:'belal shwani'},
  {id:2,courseName:'Website UI design implementation',mentor:'belal shwani'},

]

const MentorOpertunity = () => {
  return (
    <div className='mentor-opertunity px-2'>  
      <div className='mentor-opertunity-container p-4'>
        <p className='title'>Open mentoring <span>opportunities</span></p>
        {data.length?data.map(item=>{
           return(
            <div className='mentor-opertunity-content d-flex justify-content-between mb-3' key={item.id}>
              <div className='course-name'>
                  <p className='course'>{item.courseName}</p>
                  <div className='mobile-view d-none'>
                      <p className='mentor'>Get mentored by : <span className='text-capitalize'>{item.mentor}</span></p>
                      <div className='requirments first d-flex mt-4'>
                        <button class="btn-gernal btn-download mt-1">Certificate</button>
                        <button class="btn-gernal btn-download mt-1 mx-2">Remote</button>
                        <button class="btn-gernal btn-download mt-1">Open Duration</button>
                      </div>
                      <div className='requirments second d-flex mt-2'>
                        <button class="btn-gernal btn-download mt-1">paid</button>
                        <button class="btn-gernal btn-download mt-1 mx-2">Might get hired</button>
                      </div>
                      <div className='desc'>
                        <p>
                          looking for someone who’s intrested in project managment related tasks and who’s
                          eagre to gain knowledge and have fun during the experience !
                        </p>
                      </div>
                  </div>
              </div>
              <div className='view-btns d-flex justify-content-end position-relative'>
                  <button class="btn-gernal btn-defauit view  position-absolute me-3">View</button> 
                  <button class="btn-gernal btn-defauit request position-absolute">Request</button> 
              </div>
           </div>
           )
        }):null} 
      </div>
    </div>
  )
}
export default MentorOpertunity;
