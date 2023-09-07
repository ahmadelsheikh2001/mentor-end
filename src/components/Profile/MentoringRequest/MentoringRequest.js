import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './MentoringRequest.css';

const data=[
    {id:1, position:'Front end development',name:'Balqees Hamdi',
    desc:`i’m a recent computer science graduate from khartoum university,
    intrested in front end development and UI / UX looking for a mentor
    to guide me through becoming a proficional front end developer`,
    duration:'2 month', paid:'yes',lookForJob:'yes',experience:'none'
    },
    {id:2, position:'Front end development',name:'Balqees Hamdi',
    desc:`i’m a recent computer science graduate from khartoum university,
    intrested in front end development and UI / UX looking for a mentor
    to guide me through becoming a proficional front end developer`,
    duration:'2 month', paid:'yes',lookForJob:'yes',experience:'none'
    }
]
const settings = {
    arrows:false,
    autoplay:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
}
const MentoringRequest = () => {
  return (
    <div className='mentoring-request px-2'>
        <div className='mentoring-request-container p-4'>
            <p className='title'>Open mentoring <span>requests</span></p>
            {data.length?data.map(item=>{
                return(
                    <div className='request-content position-relative w-100 p-3 mb-3' key={item.id}>
                        <div className='main-title'>
                            <p>{item.position}</p>
                        </div>
                        <div className='name'>
                            <p>{item.name} <span>is looking for a mentor</span> </p>
                        </div>
                        <div className='desc'>
                            <p>{item.desc}</p>
                            <p className='read-more'>... Read more</p>
                        </div>
                        <div className='job-desc'>
                            <div className='duration d-flex'>
                                <p>Duration : <span>{item.duration}</span></p>
                                <p className='paid'>Paid : <span> {item.paid}</span></p>
                            </div>
                            <div className='experience d-flex'>
                                <p>Looking for a job : <span>{item.lookForJob}</span></p>
                                <p className='ex-none'>Experince : <span>{item.experience}</span></p>
                            </div>
                        </div>
                        <div className='details position-absolute'>
                            <button class="btn-gernal btn-defauit">View</button>
                            <button class="btn-gernal btn-defauit mx-3">Mentor</button>
                        </div>
                    </div>
                )
            }):null}
            <Slider {...settings} className='slider d-none'>
                {data.length?data.map(item=>{
                    return(
                        <div className='request-content position-relative p-3  mb-3' key={item.id}>
                            <div className='main-title'>
                                <p>{item.position}</p>
                            </div>
                            <div className='name'>
                                <p>{item.name} <span>is looking for a mentor</span> </p>
                            </div>
                            <div className='desc'>
                                <p>{item.desc}</p>
                                <p className='read-more'>... Read more</p>
                            </div>
                            <div className='job-desc'>
                                <div className='duration d-flex'>
                                    <p>Duration : <span>{item.duration}</span></p>
                                    <p className='paid'>Paid : <span> {item.paid}</span></p>
                                </div>
                                <div className='experience d-flex'>
                                    <p>Looking for a job : <span>{item.lookForJob}</span></p>
                                    <p className='ex-none'>Experince : <span>{item.experience}</span></p>
                                </div>
                            </div>
                            <div className='details position-absolute d-flex'>
                                <button class="btn-gernal btn-defauit view">View</button>
                                <button class="btn-gernal btn-defauit view-details d-none">View details</button>
                                <button class="btn-gernal btn-defauit mx-3">Mentor</button>
                            </div>
                        </div>
                    )
               }):null}
            </Slider>
        </div>
    </div>
  )
}
export default MentoringRequest;
