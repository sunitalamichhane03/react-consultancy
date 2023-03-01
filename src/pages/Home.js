import React from 'react'
import {Link }from 'react-router-dom'
import './home.css'
import Body from '../components/Body/Body'
import Contactus from '../components/Contactus/Contactus'
import home from '../images/home.jpg'
import mo from '../images/mo.jpg'
import co from '../images/co.jpg'
import gl from '../images/gl.jpg'

import Destination from '../components/Destination'
import Testpreparation from '../components/Testpreparation/Testpreparation'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <>
    <div className='home-section'>
      <img src={home}></img>
      </div>
<Body/>

<Testpreparation/>
<Services/>
 <Contactus/>

  <div className='achievement'>
 
  <h2>OUR ACHIEVEMENTS</h2>

  <h3 className="title_desc">Our Educational Awards and Achievements<br></br> claim that we are one of the top education<br></br> consultancy in Nepal</h3>
  <div className='image-ach'>
  <img src = {co}></img>
  <img src = {mo}></img>
  <img src = {gl}></img>
  </div>
</div>
<Testimonials/>
</> 
  )
}

export default Home
