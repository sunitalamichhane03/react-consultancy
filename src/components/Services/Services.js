import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import img5 from '../../images/home5.jpg'
import img6 from '../../images/home6.jpg'
import img7 from '../../images/home7.jpg'
import img8 from '../../images/home8.jpg'
import img9 from '../../images/home9.jpg'
import img10 from '../../images/home10.jpg'

const Services = () => {
  return (
    <>
    <div className="facilities">
    <div className='home-service'>
   <div className='service-section'>

<h2>Student Services</h2>
<h3>Take Advantage of Our Top-Notch Student Services from Highly Qualified Education Counselors and Visa Expert Teams </h3>

<div className='service-items'>
                           
                           <li className='service-tags'>
                          <Link to='/Studentscreening'>
                                 <img src={img5} ></img>
                                       <div className="service_desc">
                                            <h3>Student Screening</h3>
                                               <p>For convenience and in order to serve Australian Universities and Colleges better, Our Consultancy has formed its own Compliance Department.</p>
                                                         </div>
                                                        </Link>
                                                   
                                                 </li>
                                         <li className='service-tags'>
                                         <Link to='/University_application_assistance'>
                                           <img src ={img6}></img>
                                           <div className="service_desc">
                                                            <h3>University Application Assistance</h3>
                                                             <p>An application assistance team is available to you through Our Consultancy to help you complete the university admission process.</p>
                                                         </div>
                                                         </Link>
                                         </li>

                                  <li className='service-tags'>
                                         <a href="#">
                                           <img src ={img8}></img>
                                           <div className="service_desc">
                                     <h3>Documentation Guidance</h3>
                                      <p>Our Consultancy’s Document Department is designed to guidance documents for students prepare their own documents and comply with court procedural requirements.</p>
                                  </div>  
                                  </a>
                                  </li>  
                                  <li className='service-tags'>
                                         <a href="#">
                                           <img src ={img7}></img>
                                           <div className="service_desc">
                                     <h3>Interview Assistance</h3>
                                      <p>While interviews are not part of every university’s admission process, many institutions will ask students to meet online before accepting their application.</p>
                                  </div>
                                  </a></li>
                                  <li className='service-tags'>
                                         <a href="#">
                                           <img src ={img10}></img>
                                           <div className="service_desc">
                                     <h3>Student Visa Declaration Form</h3>
                                      <p>For convenience and in order to serve Australian Universities and Colleges better, Our Consultancy has formed its own Compliance Department.</p>
                                  </div>
                                  </a>
                                  </li>   

            <li className='service-tags'>
                   <a href="#">
                      <img src ={img9}></img>

                     <div className="service_desc">
                                     <h3>Student Visa Declaration Form</h3>
                                      <p>For convenience and in order to serve Australian Universities and Colleges better, Our Consultancy has formed its own Compliance Department.</p>
                                  </div>
                                  </a>
                                  </li>
                     </div>
                     </div>

</div>
</div>
    </>
  )
}

export default Services