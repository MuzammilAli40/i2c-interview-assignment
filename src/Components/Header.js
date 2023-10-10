import '../Assets/CSS/Header/Header.css'
import { NavLink } from 'react-router-dom'
import HeaderImage from '../Assets/Images/Logo/i2c.png'
import { useState } from 'react'
import { BsList } from "react-icons/bs"



const Header = () => {
   const [showNavbar, setShowNavbar] = useState(false)

   const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
   }
   return (
      <nav className="navbar">
         <div className="logo">
            <img src={HeaderImage} alt="Logo og i2c" />
         </div>
         <div className="menu-icon" onClick={handleShowNavbar}>
            <BsList />
         </div>
         <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
               <li>
                  <NavLink to="/">About Us</NavLink>
               </li>
               <li>
                  <NavLink to="/product">Products</NavLink>
               </li>
               <li>
                  <NavLink to="/career">Careers</NavLink>
               </li>
            </ul>
            <div className='nav-button-element'>
               <button type='button' className='nav-button'>Contact Us</button>
            </div>
         </div>
      </nav>
   )
}

export default Header