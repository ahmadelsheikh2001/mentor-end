import React from 'react';
import './PreviousMentor.css';

const data=[
  {id:1,courseName:'Website UI design implementation',mentor:'Belal AL shekh'},
  {id:2,courseName:'Website UI design implementation',mentor:'Belal AL shekh'},
]
const PreviousMentor = () => {
  return (
    <div className='previous-mentor px-2'>
      <div className='previous-mentor-container p-4'>
          <p className='title text-capitalize'>previously <span>mentored</span> by</p>
          {data.length?data.map(item=>{
            return(
              <div className='previous-mentor-content d-flex justify-content-between mb-3' key={item.id}>
                <div className='course-name'>
                  <p className='course'>{item.courseName}</p>
                  <p className='mentor'>Mentored by : <span>{item.mentor}</span></p>
                </div>
                <div className='view'>
                  <button class="btn-gernal btn-defauit">View</button> 
                </div>
              </div>
            )
          }):null}
          <button class="btn-gernal btn-download">Download CV</button> 
      </div>
    </div>
  )
}
export default PreviousMentor;
