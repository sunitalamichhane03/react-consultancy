import React from 'react'
import './Lowerfooter.css'
import Accordion from '../Accordion'
import image from '../../images/lowerfooterimg.jpg'

function Lowerfooter() {
  return (
    <>
    <div className='location-details'>
      <h2>Location Details</h2>
    </div>
<Accordion/>
<div className='containers'>

<div className='wrappers'>

<div className='imagery'>
<img src={image}></img>
</div>
</div>
</div>
<div className='footer-content'>
  <div className='left'>
    <h1>Privacy Policy | Designed & Developed by Sunita</h1>

  </div>
  <div className='right'>
 <h1>OUR CONSULTANCY © All rights reserved</h1> 
  </div>
</div>
    </>
  )
}

export default Lowerfooter