import React from 'react'
import './Popular.css'
import { Link } from 'react-router-dom'

const Popular = () => {
  return (
    <>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> 

<div className="rapperr">
  <h2>Popular Courses</h2>
	<div className="parenrt" onclick="">
  
		<div className="chilld bg-one">
    <Link to='/It'>
      <a>Study IT in Australia</a>
      </Link>
		</div>
   
	</div>

	<div className="parenrt right" onclick="">
		<div className="chilld bg-two">
			
			<Link to ='/Agriculture'>
    <a>Study Agriculture <br></br>in Australia</a>
	</Link>
		</div>
	</div>

	<div className="parenrt" onclick="">
		<div className="chilld bg-three">
		<Link to ='/Mba'>
		<a>Study MBA in Australia</a>
		</Link>
		</div>
	</div>

	<div className="parenrt right" onclick="">
		<div className="chilld bg-four">
		<Link to ='/Architecture'>
   <a>Study Architecture<br></br> in Australia</a>
   </Link>
		</div>
	</div>

	<div className="parenrt" onclick="">
		<div className="chilld bg-five">
			<Link to ='/Arts'>
    <a>Study Arts in Australia</a>
	</Link>
		</div>
	</div>

	<div className="parenrt right" onclick="">
		<div className="chilld bg-six">
			<Link to ='/Law'>
		<a>Study Law in Australia</a>
		</Link>
		</div>
	</div>
</div>
    </>
  )
}

export default Popular
