import React from 'react'
import '../Assets/CSS/Trusted/Trusted.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import i2c from '../Assets/Images/Icons/coca-cola-logo.svg'
import twitter from '../Assets/Images/Icons/twitter.svg'
import cocacola from '../Assets/Images/Icons/coca-cola-logo.svg'
import microsoft from '../Assets/Images/Icons/microsoft-logo-svgrepo-com.svg'

const Trusted = () => {


   var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <button class=" arrow-prev slide-arrow prev-arrow "></button>,
      nextArrow: <button class=" arrow-next slide-arrow next-arrow "></button>,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]

   };

   return (
      <>
         <div className='trusted-section'>
            <div className='trusted-main-heading'>
               <span>
                  <p className='trusted-heading'>Trusted by
                  </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="209" height="10" viewBox="0 0 209 10" fill="none" className='trusted-svg'>
                     <path d="M2.45029 7.28623C40.6142 3.84683 134.855 -1.31147 206.508 5.57055" stroke="#F0B80D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
               </span>
            </div>
            <p className='trusted-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
         </div>


         <Slider className='Slider-section' {...settings}>
            <div className='Slider-content'>
               <img src={microsoft} style={{ opacity: 0.65, width: '180px', height: '180px' }} />
            </div>
            <div className='Slider-content'>
               <img src={twitter} style={{ opacity: 0.65, width: '134px', height: '140px' }} />
            </div>
            <div className='Slider-content'>
               <img src={cocacola} style={{ opacity: 0.65, width: '180px', height: '180px' }} />
            </div>
            <div className='Slider-content'>
               <img src={microsoft} style={{ opacity: 0.65, width: '180px', height: '180px' }} />
            </div>
            <div className='Slider-content'>
               <img src={twitter} style={{ opacity: 0.65, width: '134px', height: '140px' }} />
            </div>
            <div className='Slider-content'>
               <img src={cocacola} style={{ opacity: 0.65, width: '180px', height: '180px' }} />
            </div>


         </Slider>
      </>


   )
}

export default Trusted