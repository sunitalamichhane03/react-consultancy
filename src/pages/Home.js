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
import ImageSlider from '../components/ImageSlider'
import Popular from '../components/Popular/Popular'

const Home = () => {

  const slides = [
    
    { url: "https://static.studyin-uk.com/assets/study-guide/studying-in-uk-vs-home-country.jpg", title: "study" },
    { url: "https://i0.wp.com/studyabroadconsultants.org/wp-content/uploads/2020/10/Study-in-Australia-1.jpg?w=800&ssl=1", title:"study" },
    { url: "https://thenext.edu.np/wp-content/uploads/2017/08/newzea.jpg", title: "city" },
    { url: "https://thenext.edu.np/wp-content/uploads/2019/09/canada-1.jpg", title: "study" },
    { url: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/11231006/Study-Abroad-1024x640.png", title: "italy" },
    { url: "https://www.smarttalk.in/wp-content/uploads/2019/10/How-spoken-English-helps-in-study-abroad-1024x384.jpg", title: "study" },

  ];
  const containerStyles = {
    width: "95%",
    height: "550px",
    margin: "0 auto",
  };
  return (
    <> 
 
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
  
     
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
