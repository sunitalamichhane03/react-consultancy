import React from 'react'
import './Body.css'
import img1 from '../../images/home1.jpg'
import img2 from '../../images/home2.jpg'
import img3 from '../../images/home3.jpg'
import img4 from '../../images/home4.png'


const Body = () => {
  return (
    <>

<div className="home-body">

<div className='home-text'>
<a href="#">
																	
<div className='gradient_text'>
  <h2>Welcome to Our Consultancy</h2></div>
<h1>The Leading Education Consultancy<br></br> In Nepal </h1></a>
<p>Our Consultancy has a long-standing reputation for being one of the best educational consultancy in Nepal for studying abroad. Our head office is located at Dillibazar, Kathmandu including branches at Parsa, Birtamode, Pokhara, Nawalparasi, Chitwan, Butwal in Nepal. And we have a support office in Sydney.</p>
</div>
<div className='image-rowq'>
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

    </>
  )
}

export default Body