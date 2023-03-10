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
    width="1920"
    height="2193"
  /> 
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title">IELTS</h2>
      <p className="card__description">
        Learn more about IELTS
      </p>
    </div>
    <Link  to ='/Ielts'>
    <button className="card__button">Learn more</button>
    </Link>
  </div>
 
</article>
<article className="card">
 
  <img
    className="card__background"
    src="https://i.imgur.com/QYWAcXk.jpeg"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title">PTE</h2>
      <p className="card__description">
        Learn more about PTE
      </p>
    </div>
    <Link to ='/Pte'>
    <button className="card__button">Learn more</button>
    </Link>
  </div>
  
</article>
</div>
</div>
</div>
    </>
  )
}

export default Testprepn