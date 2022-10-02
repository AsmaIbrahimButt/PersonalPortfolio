import React from 'react'
import{BiCheck} from 'react-icons/bi';
import './Service.css';

const Service = () => {
  return (
<section id='services'>
 <h5>What I offer</h5>
 <h2>Service</h2>


 <div className='container service__container'>
 <article className='service'>
<div className='service__head'>
<h3>Web Design</h3>
</div>

<ul className='service__list'>
<li>
<BiCheck className='service__list-icon'/>
<p>I can design the responsive website design.</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>I can design the aesthetic web design for you.</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>I can design the beautiful and attractive design. </p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>I can design web design according to the user needs.</p>
</li>

</ul>

</article>

<article className='service'>
<div className='service__head'>
<h3>Web Development</h3>
</div>

<ul className='service__list'>
<li>
<BiCheck className='service__list-icon'/>
<p>I can design the fully functional website for you.</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>I can develop  ecommerance website.</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>I can develop the portolio website.</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>I can develop the  website using Nodejs ,Expressjs and Mongodb. </p>
</li>

</ul>

</article>

<article className='service'>
<div className='service__head'>
<h3>UX/UI Design</h3>
</div>

<ul className='service__list'>
<li>
<BiCheck className='service__list-icon'/>
<p>I can design the responsive website.</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>I can design the responsive app design.</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>I can desig the user experience design.</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>I can design using Adobexd</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>I can design the Figma</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>I can design illustration using adobe illustrator.</p>
</li>



</ul>

</article>

</div>
</section>
  )
}

export default Service
