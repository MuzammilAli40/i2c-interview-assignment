import React, { useState } from 'react'
import '../Assets/CSS/Form/Form.css'
import FormImage from '../Assets/Images/form-image.png'


const FormSection = () => {

   const [nameError, setNameError] = useState(false);
   const [emailError, setEmailError] = useState(false);

   const validateForm = (event) => {
      event.preventDefault();
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');

      if (nameInput.value.trim() === '') {
         setNameError(true);
      } else {
         setNameError(false);
      }

      if (emailInput.value.trim() === '') {
         setEmailError(true);
      } else {
         setEmailError(false);
      }

      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      if (!emailRegex.test(emailInput.value)) {
         setEmailError(true);
      }

      if (nameInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
         alert('Please Fill the form');
      }
      else {
         alert("Form submitted successfully")
      }
   };

   return (
      <form onSubmit={validateForm}>
         <div className='form-section'>
            <div className='image-section'>
               <svg style={{ position: "absolute", top: "20%" }} xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <circle cx="10" cy="10.0687" r="10" fill="#F0B80D" />
               </svg>
               <svg style={{ position: "absolute", top: "5%", left: "30%" }} xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none" className='form-svg'>
                  <circle cx="15" cy="15.0687" r="15" fill="#5380EA" />
               </svg>
               <svg style={{ position: "absolute", top: "1%", left: "70%" }} xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className='form-svg'>
                  <circle cx="10" cy="10.0687" r="10" fill="#E49192" />
               </svg>
               <svg style={{ position: "absolute", top: "8%", left: "93%" }} xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className='form-svg'>
                  <circle cx="10" cy="10.0687" r="10" fill="#F0B80D" />
               </svg>
               <svg style={{ position: "absolute", top: "70%", left: "10%" }} xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none" className='form-svg'>
                  <circle cx="15" cy="15.0687" r="15" fill="#5380EA" />
               </svg>
               <svg style={{ position: "absolute", top: "58%", left: "28%" }} xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className='form-svg'>
                  <circle cx="10" cy="10.0687" r="10" fill="#E49192" />
               </svg>
               <svg style={{ position: "absolute", top: "73%", left: "55%" }} xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none" className='form-svg'>
                  <circle cx="15" cy="15.0687" r="15" fill="#F0B80D" />
               </svg>
               <svg style={{ position: "absolute", top: "100%", left: "60%" }} xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className='form-svg'>
                  <circle cx="10" cy="10.0687" r="10" fill="#5380EA" />
               </svg>
               <img src={FormImage} className='form-image' style={{ transform: "ScaleX(-1)" }} />
            </div>
            <div className='inner-form'>
               <div className='form-heading'>
                  <h3 className='form-heading-text'>Register Interest</h3>
                  <p className='form-heading-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
               </div>

               <div className='form'>
                  <div className={`form-group`}>
                     <label className='form-label'>Name <span className='required'>*</span></label>
                     <input type='text' className={`form-input ${nameError ? 'error' : ''}`} placeholder='Enter your name' id='name' />
                  </div>
                  <div className='form-group'>
                     <label className='form-label'>Company</label>
                     <input type='text' className='form-input' placeholder='Enter your company name' />
                  </div>
                  <div className={`form-group`}>
                     <label className='form-label'>Email address <span className='required'>*</span></label>
                     <input type='text' className={`form-input ${emailError ? 'error' : ''}`} placeholder='Enter your email address' id='email' />
                  </div>
               </div>
               <button type='submit' className='form-button'>Submit</button>
            </div>
         </div>
      </form>
   )
}

export default FormSection