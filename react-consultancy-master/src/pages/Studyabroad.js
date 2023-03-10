import React from 'react'
import './Studyabroad.css'
 
import { Link } from 'react-router-dom'
import Back from '../components/Back/Back'
import irel from '../images/ireland.jpg'
import aus from '../images/australia.jpg'
import uk from '../images/uk.jpg'
import zeal from '../images/newzea.jpg'
import can from '../images/canada-1.jpg'
import us from '../images/usa.jpg'
import Destination from '../components/Destinations/Destination'
const Studyabroad = () => {
  return (
    <>
       <Back title ='Study Abroad'/>
       <div className='study-abroad'>
        
       </div>
 <Destination/>
 
    </>   
  )
}

export default Studyabroad
