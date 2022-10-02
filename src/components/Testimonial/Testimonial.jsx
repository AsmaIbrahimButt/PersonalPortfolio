import React from 'react'
import img1 from '../../assets/img2.PNG';

import './Testimonial.css'
import 'swiper/css';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';


const data=[
  {

   avatar:img1,
   name:"Saad Fareed",
   review:"Asma is one of the active community members of MLSA UET, a tech community where we learn, share & lead the trending technologies, her learning behavior and leading the initiative in his own community are quite impressive. She is a quick learner and a self-starter I wish her all the very best in her future plans."
  },
  {

    avatar:img1,
    name:"Ali Butt",
    review:"Asma is a quick learner and passionate about web tech and her work."
   },
   {

    avatar:img1,
    name:"Asma Butt",
    review:"Great Tech developer."
   },

]


const Testimonial = () => {
  return (
   <section id='testimonial' style={{width:"50%",marginLeft:"25%",marginTop:"25%"}}>
   <h5>Reviews from clients</h5>
   <h2>Testimonials</h2>
    
   <Swiper className='container testimonial__container' 
   modules={[Pagination]}
   spaceBetween={40}
   slidesPerView={1}

   pagination={{ clickable: true }}
  
>
  {
    data.map(({avatar,name,review},index)=>{
return (

  <SwiperSlide key={index} className='testimonial'>
  <div className='client__avatar'>
  <img src={avatar} alt="avatar"/>
  </div>
  <h5 className='client__name'>{name}</h5>
  <small className='client__review' style={{ textAlign:"center",marginLeft:"50px"}}>
 {review}
  </small>
  </SwiperSlide>
 
)


    })
  }
   </Swiper>
   


   </section>
  )
}

export default Testimonial
