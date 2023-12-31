import React from 'react'
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
// import ME from '../../Images/profile1.jpeg';
import ME from '../../assets/me.png';
const Header = () => {
  return (
    <header>
        <div className='container h-wrapper'>
            <h5>Hello I'm</h5>
            <h1>Payal</h1>
            <h5 className='text-light '>Full Stack Developer</h5>
            <CTA/>
             <HeaderSocials/>
            <div className='me'>
                <img src={ME} alt="me"/>
            </div>
            
             <a href='#contact' className='scroll_down'>Scroll Down</a>

        </div>
    </header>
  )
}

export default Header
