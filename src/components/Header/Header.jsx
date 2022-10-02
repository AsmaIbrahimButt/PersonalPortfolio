import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import img1 from '../../assets/ME.png';


const Header = () => {
  return (
   <header>
<div className='container header__container' >


<h5>Hello I'm</h5>
<h1>Asma Butt</h1>
<h5 className='text-light'>FullStack Developer🚀 | UX\UI Designer 🎨| Graphic Designer</h5>
<CTA/>
<HeaderSocials/>
<div className='me' style={{height:"240%"}}>
<img src= {img1}  alt="me" />
</div>
<a href='#contact' className='scroll__down'>Scroll Down</a>
</div>
   </header>
  )
}

export default Header
