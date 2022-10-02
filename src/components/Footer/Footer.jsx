import React from 'react'
import {FaFacebook, FaLinkedin} from 'react-icons/fa';

import {FaTwitter} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer__logo' >Asma Butt</a>
    <ul className='permalinks' style={{marginLeft:"28%"}}>
    <li><a href='home'>Home</a></li>
    <li><a href='about'>About</a></li>
    <li><a href='experience'>Experience</a></li>
    <li><a href='services'>Services</a></li>
    <li><a href='portfolio'>Portfolio</a></li>
    <li><a href='testimonial'>Testimonials</a></li>
    <li><a href='contact'>Contact</a></li>

    </ul>

<div className='footer__socials'>
<a href='https://www.facebook.com/profile.php?id=100076820106561'><FaFacebook/></a>
<a href='https://www.linkedin.com/in/asma-butt-4063a31a6/'><FaLinkedin/></a>
<a href='https://twitter.com/home?lang=en'><FaTwitter/></a>

<div className='footer__copyright'>
<small>&copy; Asma Portfolio. All right reserved.</small>
</div>
</div>
</footer>
  )
}

export default Footer
