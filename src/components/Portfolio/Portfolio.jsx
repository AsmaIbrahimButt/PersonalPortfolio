import React from 'react'
import img1 from '../../assets/ME.png';
import img3 from '../../assets/img2.PNG';
import img4 from '../../assets/img4.PNG';
import img5 from '../../assets/img5.PNG';
import img6 from '../../assets/imh6.png';
import './Portfolio.css'


const data=[
  {
 id:1,
 image:img3,
 title:'Linkdin Clone ',
 github:"https://github.com/AsmaIbrahimButt/Linkdineclone.git",
 demo:"https://linkdin-clone-858c7.web.app/"
  },
  {
    id:1,
    image:img4,
    title:'Gmail Clone',
    github:"https://github.com/AsmaIbrahimButt/Gmail-Clone.git",
    demo:"https://clone-e442b.web.app/"
     },
     {
      id:1,
      image:img5,
      title:'Slack Clone',
      github:"https://github.com/AsmaIbrahimButt/Slack-Clone.git",
      demo:"https://slack-clone-a73e7.web.app/room/KOyLWWFERCGRTQvD20lO"
       },
       {
        id:1,
        image:img6,
        title:'Upcoming Projects',
        github:"#",
        demo:"#"
         },
         {
          id:1,
          image:img6,
          title:'Upcoming Projects',
          github:"#",
          demo:"#"
           },
           {
            id:1,
            image:img6,
            title:'Upcoming Projects',
            github:"#",
            demo:"#"
             },
]

const Portfolio = () => {
  return (
<section id='portfolio'>
<h5>My Recent Work</h5>
<h2>Portfolio</h2>
<div className='container portfolio__container'>

{

data.map(({id,image,title,github,demo})=>{

return(
  <article key={id} className='portfolio__items'>
  <div className='portfolio__item-image'>
  <img src={image} alt={title}></img>
  </div>
  <h3>{title}</h3>
  <div className='portfolio__item-cta'>
  <a href={github} className='btn' target='_blank'>GitHub </a>
  <a href={demo} className='btn btn-primary' target='_blank' >Live demo</a>
  
  </div>
  
  
 
  
  </article>
  
)

})

}
</div>
   </section>
  )
}

export default Portfolio
