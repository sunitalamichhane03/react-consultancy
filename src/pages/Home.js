import React from 'react'
import './home.css'

import mo from '../images/mo.jpg'
import co from '../images/co.jpg'
import gl from '../images/gl.jpg'
import img from '../images/usa.jpg'

import Body from '../components/Body/Body'
import Contactus from '../components/Contactus/Contactus'
import Destination from '../components/Destinations/Destination'
import Testpreparation from '../components/Testprepn/Testprepn'
import Services from '../components/Services/Service'
import Testimonials from '../components/Testimonials/Testimonials'

import Popular from '../components/Popular/Popular'
import Slider from '../components/slider/Slider'
const Home = () => {

  return (
    <> 
 
 <Slider />
     
<Body/>
<Testpreparation/>
<Destination/>

<Services/>
<Popular/>
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
};

export default Home;
