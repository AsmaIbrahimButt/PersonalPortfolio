import React from 'react';
import {FaAward} from 'react-icons/fa'
import img1 from '../../assets/ME.png';
import './About.css'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

 <div className='container about__container'>

 <div className='about__me'>
 
 <div className='about__me-image'>
 
 <img src={img1}  alt=""/>
 
 </div> 
 </div>
 
 <div className='about__content'>
   <div className='about__cards'>
    <article className='about__card'>
     <FaAward className='about__icon'/>
 <h5>Certificates</h5>
 <small> 10+ Certicates</small>
 </article>
 <article className='about__card'>
 <FaAward className='about__icon'/>
<h5>Community Member</h5>
<small>100+ Community members</small>
</article>
<article className='about__card'>
<FaAward className='about__icon'/>
<h5>Experience</h5>
<small>7 Month experience</small>
</article>
 
 </div>
 <p>Passionate Mern Stack developer possess a good set of problem-solving skills and have ability to perform well in a team. Excellent organisational
 and time management skills and aim for the success to the end goals.Love to explore new web tech and design world.Im also
 a User Experience Designer and Graphic Designer.
 </p>

<a href='#contact' className='btn btn-primary'>Let's Talk</a>
 </div>
 </div>

    </section>
  )
}

export default About
