import React from 'react'
import Back from '../components/Back/Back'
import './Usa.css'
import us1 from '../images/usa1.jpg'
import us2 from '../images/usa2.jpg'

import Model from '../components/Modaal/Model'
import Tableofcontent from '../components/Table0fcontents/Tableofcontent'

const Usa = () => {
  return (
    <>
   <Back title ='USA'/> 
    <div className='wrap-usa'>
        <div className='demo-usa'>
            
                <div className='usa-home'>
                    <h2>Study in USA from Nepal</h2>
                    </div>
                         <div className='usa-section'>
                         <div className="usa-body">
			<p>When we think about studying abroad for higher education, the first place that comes to mind is the United States. Every year, over a million students from all over the globe apply to study in the USA, and international students contribute over $50 billion to the US economy, making international students an essential part of America. The numbers have been gradually growing, which indicates that the United States is the finest location for overseas students.</p>

<img src={us1}></img>
		</div>

                        <Tableofcontent/>
                        
                </div>
               
           

            <div className='moretoknow'>
            <h2>Interesting Facts about USA</h2>
        
            </div>
        
        </div>
    </div>
    
    </>
  )
}

export default Usa