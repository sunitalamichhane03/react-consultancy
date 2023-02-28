import React from 'react'
import {Link }from 'react-router-dom'
import ire from '../images/ireland.jpg'
import './Destination.css'

function Destination() {
  return (
    <>
    <div className='destination'>
    <div className='containerr'>
  <Link to = '/Ireland'>
            <img src={ire} alt="ireland image"></img>
            <div className='overlay'>
              <div className='content'>
                <h3>Study in Ireland</h3>
              </div>

            </div>
            </Link>
            </div> 
    </div>
    </>
  )
}

export default Destination
