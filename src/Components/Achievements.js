import React from 'react'
import '../Assets/CSS/Achievements/Achievements.css'
import Lock from '../Assets/Images/Icons/lock.png'
import Bars from '../Assets/Images/Icons/bars.png'
import Cup from '../Assets/Images/Icons/cup.png'

const Achievements = () => {
   return (
      <div className='first-section'>
         <span className='third-gradient'></span>
         <div className='inner-section'>
            <div>
               <img src={Lock} className='inner-section-icon' />
            </div>
            <div className='inner-section-content'>
               <h4 className='inner-section-heading'>24/7 Support</h4>
               <p className='inner-section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
         </div>
         <div className='inner-section'>
            <div>
               <img src={Bars} className='inner-section-icon' />
            </div>
            <div className='inner-section-content'>
               <h4 className='inner-section-heading'>1000+ of reviews</h4>
               <p className='inner-section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
         </div>
         <div className='inner-section'>
            <div>
               <img src={Cup} className='inner-section-icon' />
            </div>
            <div className='inner-section-content'>
               <h4 className='inner-section-heading'>And more!</h4>
               <p className='inner-section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
         </div>
      </div>
   )
}

export default Achievements