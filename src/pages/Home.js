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
import ire from '../images/ireland.jpg'
import aus from '../images/australia.jpg'
import can from '../images/canada-1.jpg'
import newz from '../images/newzea.jpg'
import uk from '../images/uk.jpg'
import usa from '../images/usa.jpg' 
import con from '../images/home11.jpg'
import ach from '../images/home12.jpg'
import mo from '../images/mo.jpg'
import co from '../images/co.jpg'
import gl from '../images/gl.jpg'
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
<div className='destination'>
<div class='image-box'>
  <a href= '#'>
<img src = {ire}></img>
<h4>Study in <br></br>Ireland</h4>
</a>
</div>
<div class='image-box'>
  <a href= '#'>
<img src = {aus}></img>
<h4>Study in <br></br>Australia</h4>
</a>
</div>
<div class='image-box'>
  <a href= '#'>
<img src = {uk}></img>
<h4>Study in <br></br>UK</h4>
</a>
</div>
<div class='image-box'>
  <a href= '#'>
<img src = {newz}></img>
<h4>Study in <br></br>New Zealand</h4>
</a>
</div>
<div class='image-box'>
  <a href= '#'>
<img src = {can}></img>
<h4>Study in <br></br>Canada</h4>
</a>
</div>
<div class='image-box'>
  <a href= '#'>
<img src = {usa}></img>
<h4>Study in <br></br>USA</h4>
</a>
</div>
</div>
</div>
<div className='service-section'>

  <h2>Student Services</h2>
  <h3>Take Advantage of Our Top-Notch Student Services from Highly Qualified Education Counselors and Visa Expert Teams </h3>
  
  <div className='service-items'>
                             
                             <li className='service-tags'>
                             <a href="#">
                                   <img src={img5} ></img>
                                         <div class="service_desc">
                                              <h3>Student Visa Declaration Form</h3>
                                                 <p>For convenience and in order to serve Australian Universities and Colleges better, Our Consultancy has formed its own Compliance Department.</p>
                                                           </div>
                                                      
                                                     </a>
                                                   </li>
                                           <li className='service-tags'>
                                           <a href="#">
                                             <img src ={img6}></img>
                                             <div class="service_desc">
                                                              <h3>University Application Assistance</h3>
                                                               <p>An application assistance team is available to you through Our Consultancy to help you complete the university admission process.</p>
                                                           </div>
                                                           </a>
                                           </li>

                                    <li className='service-tags'>
                                           <a href="#">
                                             <img src ={img8}></img>
                                             <div class="service_desc">
                                       <h3>Documentation Guidance</h3>
                                        <p>Our Consultancy’s Document Department is designed to guidance documents for students prepare their own documents and comply with court procedural requirements.</p>
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
                                        <p>For convenience and in order to serve Australian Universities and Colleges better, Our Consultancy has formed its own Compliance Department.</p>
                                    </div>
                                    </a>
                                    </li>   

              <li className='service-tags'>
                     <a href="#">
                        <img src ={img9}></img>

                       <div class="service_desc">
                                       <h3>Student Visa Declaration Form</h3>
                                        <p>For convenience and in order to serve Australian Universities and Colleges better, Our Consultancy has formed its own Compliance Department.</p>
                                    </div>
                                    </a>
                                    </li>
                       </div>
                     

  </div>
  <div className='contact_home'>
  <img src = {con}></img>
  <div className='container'>
  <section className='slide-form'>
    
      <h2>GET IN TOUCH</h2>
      <p>We value your inquiries, send us a message and we'll get back to you</p>
      <form action= ''>
        <input type='text' placeholder='Full Name' /><br></br>
        <input type='text' placeholder='Email Address' /><br></br>
        <input type='text' placeholder='Mobile Number' /><br></br>
        <label for="country"></label>
    <select id="country" name="city">
    <option value="">select Nearest Office*</option>
      <option value="Kathmandu">Kathmandu</option>
      <option value="canada">Pokhara</option>
      <option value="usa">Butwal</option>
      <option value="Birtamod">Birtamod</option>
      <option value="Bhairahawa">Bhairahawa</option>
      <option value="usa">Parsa</option>
      <option value="Nawalparasi">Nawalparasi</option>
      <option value="Chitwan">Chitwan</option>
      <option value="Sidney">Sidney</option>
    </select>
    <label for="city"></label><br></br>
    <select id="city" name="city">
    <option value="">select Prefered Study Destination*</option>
      <option value="Kathmandu">Australia</option>
      <option value="canada">UK</option>
      <option value="usa">Ireland</option>
      <option value="Birtamod">New Zealand</option>
      <option value="Bhairahawa">Canada</option>
      <option value="Bhairahawa">USA</option>
      </select>
      <label><input type="checkbox" name="checkbox-29[]" value="Yes, I would like to receive information on study abroad news and events from TheNext."/><span class="wpcf7-list-item-label">Yes, I would like to receive information on study abroad news and events from Our Consultancy.</span></label>
      <input type="submit" value="Submit" class="submit"></input>

      </form>
     
    
  </section>
  </div>
  </div>

  <div className='achievement'>
 
  <h2>OUR ACHIEVEMENTS</h2>

  <h3 class="title_desc">Our Educational Awards and Achievements<br></br> claim that we are one of the top education<br></br> consultancy in Nepal</h3>
  <div className='image-ach'>
  <img src = {co}></img>
  <img src = {mo}></img>
  <img src = {gl}></img>
  </div>
</div>
</> 
  )
}

export default Home
