import React from 'react'
import './Studyabroad.css'
import { Link } from 'react-router-dom'
import Back from '../components/Back/Back'
import irel from '../images/ireland.jpg'
import aus from '../images/australia.jpg'
import uk from '../images/uk.jpg'
const Studyabroad = () => {
  return (
    <>
       <Back title ='Study Abroad'/>
     
<div className='container'>
  <div className='wrapper'>
    <h2>Study Abroad</h2>
  <div className='options'>
<div className="destinations">
  <img src={irel}></img>
  <Link to = '/Ireland'>
  <h1>Study in Ireland</h1>
  </Link>
</div>
</div>
<div className='options'>
<div className="destinations">
  <img src={aus}></img>
  <Link to = '/Australia'>
  <h1>Study in Australia</h1>
  </Link>
</div>
</div>
<div className='options'>
<div className="destinations">
  <img src={uk}></img>
  <Link to = '/Ireland'>
  <h1>Study in Ireland</h1>
  </Link>
</div>
</div>
<div className='options'>
<div className="destinations">
  <img src={irel}></img>
  <Link to = '/Ireland'>
  <h1>Study in Ireland</h1>
  </Link>
</div>
</div>

</div>
</div>
    </>   
  )
}

export default Studyabroad
