import React from 'react'
import con from '../../images/home11.jpg'
import Accordion from '../Accordion'

const Contactus = () => {
  return (
    <>
     <div className='homecontacts'>
       <div className='contact_home'>
  <img src = {con}></img>
  <div className='container'>
  <section className='slide-form'>
    
      <h2>GET IN TOUCH</h2>
      <p>We value your inquiries, send us a message and <br></br>we'll get back to you</p>
      <form action= ''>
        <input type='text' placeholder='Full Name' /><br></br>
        <input type='text' placeholder='Email Address' /><br></br>
        <input type='text' placeholder='Mobile Number' /><br></br>
        <label htmlFor="country"></label>
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
    <label htmlFor="city"></label><br></br>
    <select id="city" name="city">
    <option value="">select Prefered Study Destination*</option>
      <option value="Kathmandu">Australia</option>
      <option value="canada">UK</option>
      <option value="usa">Ireland</option>
      <option value="Birtamod">New Zealand</option>
      <option value="Bhairahawa">Canada</option>
      <option value="Bhairahawa">USA</option>
      </select>
      <label><input type="checkbox" name="checkbox-29[]" value="Yes, I would like to receive information on study 
      abroad news and events from TheNext."/><span>Yes, I would like to receive information on study abroad news and events <br></br>
        from Our Consultancy.</span></label>
      <input type="submit" value="Submit"></input>

      </form>
     
    
  </section>
  </div>
  </div>
  </div>

    </>
  )
}

export default Contactus