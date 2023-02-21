import React from 'react'
import './Footer.css'
import Popup from '../Popup'

function Footer() {
  return (
    <>
    <div className='upper-footer'>
    <div className='visa'>
       <h4>Visa process</h4> 
       <ul className='visa-content'>
        <li><a href='#'>Student Visa in Australia</a></li>
        <li><a href='#'> Canada Student Visa<br></br> Process From Nepal</a></li>
        <li><a href='#'>Study in New Zealand<br></br> in scholarship</a></li>
        <li><a href='#'>Study in UK<br></br> in scholarship</a></li>
        <li><a href='#'>Study in Canada<br></br> in scholarship</a></li>
      
       </ul>
    </div>
    <div className='support'>
        <h4>Support</h4>
        <ul>
            <li><a href='#'>Study Abroad FAQS<br></br>Blogs</a></li>
            <li><a href='#'>Testimonials</a></li>
            <li><a href='#'>Universities</a></li>
            <li><a href='#'>Scholarships</a></li>
            <li><a href='#'>Interview Preparation</a></li>
        </ul>
    </div>
    <div className='resources'>
        <h4>Resources</h4>
        <ul>
            <li><a href='#'>Relationship Certificate<br></br> with Sponsor</a></li>
            <li><a href='#'>Tax Clearance<br></br>Certificate</a></li>
            <li><a href='#'>Bank Balance<br></br>Certificate</a></li>
            <li><a href='#'>Salary Certificate</a></li>
            <li><a href='#'>Sponsorship Certificate<br></br> (AOS) for Australia</a></li>
            <li><a href='#'>SOP Collection</a></li>
            <li><a href='#'>Income Certificate</a></li>
        </ul>
    </div>
    </div>
    <div className='lower-footer'>
        <div className='adress-details'>
            <div className='adress-left'>
<main>
   
    <button>Head Office</button>
    <Popup trigger={true}> 
      <h1>Our Consultancy@edu.np</h1>
     </Popup>
</main>
            </div>
            <div className='adress-right'>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer