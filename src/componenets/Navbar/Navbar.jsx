import React, {useState} from 'react';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
 import { MdOutlineRestaurantMenu } from 'react-icons/md';
import navimg1 from '../../assets/navbarimg1.png';


const Navbar = () => {
  const[toggleMenu,setToggleMenu]=useState(false)
  return (
    <>
  
  <nav className='appnavbar'>
    <div className="appnavbar-logo">
      <img src={navimg1} alt="" />
    </div>
    <ul className='appnavbar-links'>

          <li className='popensans'><a href="#home">Home</a></li>
          <li className='popensans'><a href="#about">About</a></li>
          <li className='popensans'><a href="#menu">Menu</a></li>
          <li className='popensans'><a href="#awards">Awards</a></li>
          <li className='popensans'><a href="#contact">Contact</a></li>
        </ul>
        <div className="login">
          <a href="#login" className='popensans'>Log In / Register</a>
          <div />
          <a href="/" className='popensans'>Book Table</a>
        </div>
        <div className="app_navbar-smallscreen">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            
         
          <div className='app_navbar-smallscreen_overlay flex_center slide-bottom'>
             <MdOutlineRestaurantMenu className='overlay_close' fontSize={27} onClick={() => setToggleMenu(false)} />


        
           <ul className='app_navbar-smallscreen-links'>

          <li className='popensans'><a href="#home">Home</a></li>
          <li className='popensans'><a href="#about">About</a></li>
          <li className='popensans'><a href="#menu">Menu</a></li>
          <li className='popensans'><a href="#awards">Awards</a></li>
          <li className='popensans'><a href="#contact">Contact</a></li>
            </ul>


            </div>
             )}
        

        </div>
      
   

    </nav>
    </>
  )
  
}

export default Navbar
