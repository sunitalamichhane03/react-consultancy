import React from 'react'
import './Popular.css'
import img from '../../images/aus.png'

const Popular = () => {
  return (
    <>
<div className="container">
  <div className='wrapper'>
  <div className='flex'>
  <div className='image'>
  <img src={img} ></img>
  </div>
  <div className="middle">
    <div className="text">Study IT in Australia</div>
  </div>
  </div>
  <div className='flex'>
  <div className='image'>
  <img src={img} ></img>
  </div>
  <div className="middle">
    <div className="text">Study IT in Australia</div>
  </div>
  </div>
</div>
</div>
    </>
  )
}

export default Popular
