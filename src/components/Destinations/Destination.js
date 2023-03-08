import React from 'react'
import img from '../../images/australia1.png'
import ire from '../../images/ireland.jpg'
import can from '../../images/canada-1.jpg'
import us from '../../images/usa.jpg'
import uk from '../../images/uk.jpg'
import ne from '../../images/newzea.jpg'
import './Destination.css'
import { Link } from 'react-router-dom'
const Destination = () => {
  return (
    <>
    <div className='wrapperss'>
    <div className='contain'>
    <div className='places'>

    <div className='destu'>
    <h2>TOP STUDY DESTINATIONS AROUND THE WORLD</h2>
<div className='rowimage'>
    <div className="content_img">
        <Link to ='/Ireland'>
    <img src={ire}></img>
    <div>Study in <br></br>Ireland</div>
    </Link>
  </div>
  <div className="content_img">
    <Link to ='/Australia'>
  <img src={img}></img>
  <div>Study in <br></br>Australia</div>
  </Link>
  </div>
  <div className="content_img">
    <Link to ='/Uk'>
  <img src={uk}></img>
  <div>Study in <br></br>UK</div>
  </Link>
  </div>
 
 <br></br>
  </div>
  <div className='rowimage'>
    <div className="content_img">
        <Link to ='/Newzealand'>
    <img src={ne}></img>
    <div>Study in New<br></br>Zealand</div>
    </Link>
  </div>
  <div className="content_img">
    <Link to ='/Canada'>
  <img src={can}></img>
  <div>Study in <br></br>Canada</div>
  </Link>
  </div>
  <div className="content_img">
    <Link to ='/Usa'>
  <img src={us}></img>
  <div>Study in <br></br>USA</div>
  </Link>
  </div>
 
  </div>
</div>
</div>
</div>
</div>
    </>
  )
}

export default Destination
