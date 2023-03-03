import React from 'react'

import { Link } from 'react-router-dom'

import './Testpreparation.css'
import iel from '../../images/ielts.jpg'
import pte from '../../images/pte.jpg'
const Testpreparation = () => {
  return (
    <>
    <div className='test-preparation'>
    <div className='prepn'>
<h2>Test Preparation</h2>
</div>
<div className='test-prep'>
 
  <div className='ielts'>
    <Link to ='/Ielts'>
  
  <img src = {iel}></img>
  <p>The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language.</p>
  <button>Learn More</button>
  </Link>
  </div>
  <div className='pte'>
  <Link to = '/Pte'>
  <img src = {pte}></img>
  <p>The Pearson Test of English (PTE) Academic is an entirely computer-based exam English language test for non-native English speakers who wish to study abroad</p>
  <button>Learn More</button>
  </Link>
 
  </div>
</div>
</div>
    </>
  )
}

export default Testpreparation