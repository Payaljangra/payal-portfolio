import React from 'react'
import './footer.css'
import { FiInstagram } from 'react-icons/fi';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>PAYAL</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://instagram.com'><FiInstagram/></a>
        <a href='https://github.com'><FaGithub/></a>
        <a href='https://linkedin.com'><BsLinkedin/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; copyright 2023 (Payal)</small>
      </div>
    </footer>
  )
}

export default Footer
