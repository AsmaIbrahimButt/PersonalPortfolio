import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {IoIosContact} from 'react-icons/io'
import {useState} from 'react';
import './Nav.css';

const Nav = () => {


  const [activeNav,setActiveNav]=useState('#');

  return (
    <nav>
    <a href='#' onClick={()=> setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiFillHome/></a>
    <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
    <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><BiBookBookmark/></a>
    <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><RiServiceFill/></a>
    <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><IoIosContact/></a>
    </nav>
  )
}

export default Nav
