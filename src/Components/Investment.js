import React from 'react'
import '../Assets/CSS/Investment/Investment.css'
import Avatar1 from '../Assets/Images/Avatar/avatar1.png'
import Avatar2 from '../Assets/Images/Avatar/avatar2.png'
import Avatar3 from '../Assets/Images/Avatar/avatar3.png'
import InvestmentImage from '../Assets/Images/investment.png'

const Investment = () => {
   return (
      <div className='main'>
         <div className='main-section'>
            <div>
               <p className='heading'>Lorem ipsum <span className='dolor'><p className='dolor-text'>dolor </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="126" height="11" viewBox="0 0 126 11" fill="none" className='line-svg'>
                     <path d="M2.04198 8.50584C24.8536 4.70635 81.1524 -1.34187 123.855 4.86114" stroke="#5380EA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></span>

                  sit amet yo 👋
               </p>
            </div>
            <div className='boxes'>
               <span className='first-gradient'></span>
               <div className='box'>
                  <img src={Avatar1} className='avatar-image' />
                  <div className='box-text'>
                     <h4>Andrew Schwitz</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
                  </div>
               </div>
               <div className='box'>
                  <img src={Avatar2} className='avatar-image' />
                  <div className='box-text'>
                     <h4>Andrew Schwitz</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
                  </div>
               </div>
               <div className='box'>
                  <img src={Avatar3} className='avatar-image' />
                  <div className='box-text'>
                     <h4>Andrew Schwitz</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
                  </div>
               </div>
               <div className='transparent-box'>
               </div>
            </div>
         </div>

         <div className='Investment-image-section'>

            <svg style={{ position: "absolute", left: "30%", top: "3%" }} xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none" className="svg-icon-1">
               <circle cx="15" cy="15.0687" r="15" fill="#5380EA" />
            </svg>
            <svg style={{ position: "absolute", left: "8%", top: "15%" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="svg-icon-2">
               <ellipse cx="10.1044" cy="10" rx="9.74047" ry="10" fill="#F0B80D" />
            </svg>
            <svg style={{ position: "absolute", left: "60%", top: "2%" }} xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" className="svg-icon-3">
               <ellipse cx="10.5539" cy="10" rx="9.74047" ry="10" fill="#E49192" />
            </svg>
            <svg style={{ position: "absolute", left: "90%", top: "20%" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="svg-icon-4">
               <ellipse cx="10.2595" cy="10" rx="9.74047" ry="10" fill="#F0B80D" />
            </svg>
            <svg style={{ position: "absolute", left: "88%", top: "45%" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className="svg-icon-5">
               <ellipse cx="15.2197" cy="15" rx="14.6107" ry="15" fill="#5380EA" />
            </svg>
            <svg style={{ position: "absolute", left: "88%", top: "68%" }} xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" className="svg-icon-6">
               <ellipse cx="10.4015" cy="10" rx="9.74047" ry="10" fill="#E49192" />
            </svg>
            <svg style={{ position: "absolute", left: "17%", top: "93%" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="svg-icon-7">
               <ellipse cx="10.1442" cy="10" rx="9.74047" ry="10" fill="#5380EA" />
            </svg>
            <svg style={{ position: "absolute", left: "55%", top: "90%" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className="svg-icon-8">
               <ellipse cx="14.9415" cy="15" rx="14.6107" ry="15" fill="#F0B80D" />
            </svg>

            <span className='second-gradient'></span>

            <img src={InvestmentImage} className='investment' />

         </div>
      </div>
   )
}

export default Investment