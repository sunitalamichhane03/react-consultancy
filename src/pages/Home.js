import React from 'react'
import './home.css'
import img1 from '../images/home1.jpg'
import img2 from '../images/home2.jpg'
import img3 from '../images/home3.jpg'
import img4 from '../images/home4.png'
import img5 from '../images/home5.jpg'
import img6 from '../images/home6.jpg'
import img7 from '../images/home7.jpg'
import img8 from '../images/home8.jpg'
import img9 from '../images/home9.jpg'
import img10 from '../images/home10.jpg'

const Home = () => {
  return (
    <>
    <div className='home'>
      </div>
<div className="home-body">

<div className='home-text'>
<a href="#">
																	
<div className='gradient_text'>
  <h2>Welcome to Our Consultancy</h2></div>
<h1>The Leading Education Consultancy<br></br> In Nepal </h1></a>
<p>Our Consultancy has a long-standing reputation for being one of the best educational consultancy in Nepal for studying abroad. Our head office is located at Dillibazar, Kathmandu including branches at Parsa, Birtamode, Pokhara, Nawalparasi, Chitwan, Butwal in Nepal. And we have a support office in Sydney.</p>
</div>
<div className='image-row'>
  <figure>
  <img src = {img1}></img>
  <h3>High Visa <br></br>Success Rate</h3>
  </figure>
  <figure>
  <img src = {img2}></img>
  <h3>18<sup>th</sup> Year of <br></br>Success</h3>
  </figure>
  <figure>
  <img src = {img3}></img>
  <h3>Certified Career <br></br>Counselors</h3>
 </figure>
  <figure>
  
  <img src = {img4}></img>
  <h3>Visa Expert Team </h3>
  </figure>

</div>
</div>
<div className='destinations'>
<h2>Top Study Destinations Around the World</h2>

</div>
<div className='service-section'>
  <div className='service'>
  <h2>Student Services</h2>
  <h3>Take Advantage of Our Top-Notch Student Services from Highly Qualified Education Counselors and Visa Expert Teams </h3>
  </div>
  <div className='service-items'>
                             
                             <li className='service-tags'>
                             <a href="#">
                                   <img src={img5} ></img>
                                         <div class="service_desc">
                                              <h3>Student Visa Declaration Form</h3>
                                                 <p>For convenience and in order to serve Australian Universities and Colleges better, The Next has formed its own Compliance Department.</p>
                                                           </div>
                                                      
                                                     </a>
                                                   </li>
                                           <li className='service-tags'>
                                           <a href="#">
                                             <img src ={img6}></img>
                                             <div class="service_desc">
                                                              <h3>University Application Assistance</h3>
                                                               <p>An application assistance team is available to you through The Next Education Consultancy to help you complete the university admission process.</p>
                                                           </div>
                                                           </a>
                                           </li>

                                    <li className='service-tags'>
                                           <a href="#">
                                             <img src ={img8}></img>
                                             <div class="service_desc">
                                       <h3>Documentation Guidance</h3>
                                        <p>The Next’s Document Department is designed to guidance documents for students prepare their own documents and comply with court procedural requirements.</p>
                                    </div>  
                                    </a>
                                    </li>  
                                    <li className='service-tags'>
                                           <a href="#">
                                             <img src ={img7}></img>
                                             <div class="service_desc">
                                       <h3>Interview Assistance</h3>
                                        <p>While interviews are not part of every university’s admission process, many institutions will ask students to meet online before accepting their application.</p>
                                    </div>
                                    </a></li>
                                    <li className='service-tags'>
                                           <a href="#">
                                             <img src ={img10}></img>
                                             <div class="service_desc">
                                       <h3>Student Visa Declaration Form</h3>
                                        <p>For convenience and in order to serve Australian Universities and Colleges better, The Next has formed its own Compliance Department.</p>
                                    </div>
                                    </a>
                                    </li>   

              <li className='service-tags'>
                     <a href="#">
                        <img src ={img9}></img>

                       <div class="service_desc">
                                       <h3>Student Visa Declaration Form</h3>
                                        <p>For convenience and in order to serve Australian Universities and Colleges better, The Next has formed its own Compliance Department.</p>
                                    </div>
                                    </a>
                                    </li>
                       </div>

  </div>

  


</> 
  )
}

export default Home
