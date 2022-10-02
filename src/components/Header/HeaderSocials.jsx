import React from 'react'
import {FaLinkedin} from 'react-icons/fa';
import {BsGithub}  from 'react-icons/bs';
import {FiDribbble}  from 'react-icons/fi';
import './Header.css'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="" target="__blank"><FaLinkedin/></a>
    <a href="" target="__blank"><BsGithub/></a>
    <a href="" target="__blank"><FiDribbble/></a>
      
    </div>
  )
}

export default HeaderSocials
