import React from 'react'

const Opportunitysidebar = ({selected}) => {
  return (
    <div className='sidebar-content'>
        <div className="line computer-filter"> 
            <h4>Filters</h4>
            <p class="black-reguar-txt-mediam clear-all">Clear All</p>
        </div>
        <div className='rating'>
              <div className={selected=="Requests"?"d-none":"line"}>
                <div className="check_div">
                    <input type="checkbox"  className="me-3 form-check-input" id="certificate"/>
                    <label htmlFor="certificate" class="seconry-one">Certificate</label>
                </div>
              </div>
              <div className="line">
                <div className="check_div">
                    <input type="checkbox"  className="me-3 form-check-input" id="paid"/>
                    <label htmlFor="paid" class="seconry-one">Paid</label>
                </div>
              </div>
              <div className="line">
                <div className="check_div">
                    <input type="checkbox"  className="me-3 form-check-input" id="hire"/>
                    <label htmlFor="hire" class="seconry-one">Hiring Possibility</label>
                </div>
              </div>
        </div>
        <div className='location'>
          <p className="black-bold-txt-mediam">Location</p>
          <div className="all-1 sidebar-select mt-3" >    
            <select className="minimal" >
               <option >Cairo</option>
               <option >Assiut</option>
               <option >Alexandria</option>
               <option >Gizeh</option>
               <option >Shubra El-Kheima</option>
            </select>
          </div>  
        </div>
        <p class="black-bold-txt-mediam duration-p">Duration</p>
        <div className="duration-div mt-4">
          
        </div>
    </div>
  )
}

export default Opportunitysidebar