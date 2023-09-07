import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  mentor1  from '../../../assets/images/ment1.jpg';
import  mentor2  from '../../../assets/images/ment2.jpg';
import  mentor3  from '../../../assets/images/ment3.jpg';
import  mentor4  from '../../../assets/images/ment4.jpg';
import './PreviousMentorOpertunity.css';

const data=[
  {id:1,name:'Heba Ahmed',job:'Student',img:mentor1},
  {id:2,name:'Tariq Ali',job:'UI/UX Designer',img:mentor2},
  {id:3,name:'Sadiq Seraj',job:'Fresh graduate',img:mentor3},
  {id:4,name:'Sara Al-nour',job:'Unemployed',img:mentor4},
]
const settings = {
  arrows:false,
  autoplay:true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2.3,
  initialSlide: 0,
  responsive: [
       {
         breakpoint: 450,
         settings: {
           slidesToShow: 1.7,
         }
       },
       {
         breakpoint: 280,
         settings: {
           slidesToShow: 1,
         }
       },
    ]
}
const PreviousMentorOpertunity = () => {
  return (
    <div className='mentoring-opertunity px-2'>
        <div className='mentoring-opertunity-container p-4'>
          <p className='title'>Past mentees</p>
          <p className='sec-title d-none'>Previously <span>Mentored</span></p>
          <div className='mentoring-opertunity-content d-flex'>
            {data.length?data.map(item=>{
              return(  
                <div className='card-item' key={item.id}>
                  <div className='card-img'></div>
                  <p className='name mt-1 mx-1'>{item.name}</p>
                  <p className='job mx-1'>{item.job}</p>
                </div> 
              )
            }):null}
          </div>
          <Slider {...settings} className='slider d-none'>
              {data.length?data.map(item=>{
                return(  
                  <div className='card-item w-100' key={item.id}>
                    <div className='card-img'>
                      <img src={item.img} className='w-100 h-100'/>
                    </div>
                    <p className='name mt-1 mx-1'>{item.name}</p>
                    <p className='job mx-1'>{item.job}</p>
                  </div> 
                )
              }):null}
          </Slider>
          <button class="btn-gernal btn-download">Download CV</button> 
        </div>
    </div>
  )
}
export default PreviousMentorOpertunity;
