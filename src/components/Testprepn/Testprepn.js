import React from 'react'

import { Link } from 'react-router-dom'

import './Testpreparation.css'
import iel from '../../images/ielts.jpg'
import pte from '../../images/pte.jpg'
const Testprepn = () => {
  return (
    <>
  
     <div className="moreaboutiel">
      <h2>Test Preparation</h2>
<div className="isos">
    <div className="giben">
    <article className="card">
   
  <img
       className="card__background"
   
    src="https://i.imgur.com/QYWAcXk.jpeg"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="2000"
    height="1900"
  /> 
  <div className="card__content | flow">
    <div className="card__content--container | flow">
    <Link  to ='/Ielts'>
      <h2 className="card__title">IELTS</h2>
      <p className="card__description">
        Learn more about IELTS
      </p>
      </Link>
    </div>
  </div>
 
</article>
<article className="card">
 
  <img
    className="card__background"
    src="https://i.imgur.com/QYWAcXk.jpeg"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="2000"
    height="1900"
  />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
    <Link to ='/Pte'>
      <h2 className="card__title">PTE</h2>
      <p className="card__description">
        Learn more about PTE
      </p>
      </Link>
    </div>
  
  </div>
</article>
<article className="card">
 
  <img
    className="card__background"
    src="https://i.imgur.com/QYWAcXk.jpeg"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="2000"
    height="1900"
  />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
    <Link to ='/Gre'>
      <h2 className="card__title">GRE & SAT</h2>
      <p className="card__description">
        Learn more about GRE&SAT
      </p>
      </Link>
    </div>
  
  </div>
</article>
</div>
</div>
</div>
    </>
  )
}

export default Testprepn