import React, { useRef } from 'react'
import{MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
const form=useRef();


const sendEmail=(e) => {
  e.preventdefault();
  emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',form.current,'YOUR_USER_ID')
};

  return (
 <section id='contact' >

  <h5 style={{marginTop:"-20%"}}>Get In Touch</h5>
  <h2 >Contact Me</h2>
  <div className='container contact__container' >
  <div className='contact__options'>
  
  <article className='contact__option'>
  <MdOutlineEmail className='contact__option-icon'/>
  <h4>Email</h4>
  <h5>asmabuttdev@gmail.com</h5>
  <a href='mailto:dummy@gmail.com' target="_blank">
  Send a message</a>
  </article>
  <article className='contact__option'>
  <MdOutlineEmail className='contact__option-icon'/>
  <h4>Linkdin</h4>
  <h5>Contact me</h5>
  <a href='#'>
  Send a message</a>
  </article>
  <article className='contact__option'>
  <BsWhatsapp className='contact__option-icon'/>
  <h4>Whtsapp</h4>
  <h5>asmabuttdev@gmail.com</h5>
  <a href='https://api.whatsapp.com/send?phone+92055008369'>
  Send a message</a>
  </article>
  </div>
  <form ref={form} onSubmit={sendEmail} style={{width:"50%"}}>
   <input type="text" name='name' placeholder='your full name' required/>
   <input type="email" name='name' placeholder='your Email' required/>
   <textarea name="message" rows="7" placeholder='your message'>
   Send Message
   </textarea>  
   <button type='submit' className='btn btn-primary' >Send Message</button>
  </form>
  
  </div>

 </section>
  )
}

export default Contact
