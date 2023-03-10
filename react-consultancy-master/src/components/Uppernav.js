import React from 'react'
import './uppernav.css'
import { FaGlobe } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import {FaFacebookSquare ,FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa"

  const  Uppernav = ()=> {
  return (
  <>
<nav className="upper-nav">
  <div className='top-email'>
 <a href="#"><FaGlobe/>ourconsultancy.edu.np</a></div>
 <div className='top-phone'>
 <a href="#"><BiPhone/> +977-1-2323232, +977-1-4010233</a>
 </div>

<div className='social-media'>
  <ul className='social-media-icons'>
<li><a className='face'>< FaFacebookSquare/></a></li>
<li><a className='insta'><FaInstagramSquare/></a></li>
<li><a className='twit'><FaTwitterSquare /></a></li>
<li><a className='you'><FaYoutubeSquare/></a></li>
</ul>
</div>
 
</nav>

  </>
  )
}

export default Uppernav
