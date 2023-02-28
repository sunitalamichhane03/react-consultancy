import React from 'react'
import Back from '../components/Back/Back'
import './Uk.css'
import uk1 from '../images/uk1.jpg'

const Uk = () => {
  return (
    <>
    <Back title ='UK'/>
    <div className='container'>
        <div className='wrapper'>
<div className='details'>
<h2>Why Study in UK from Nepal?</h2>
</div>

    <div className='demo'>
<div className='uks'>

<p>The United Kingdom is renowned for its quality of education. Many universities established in the 12th century have become leaders in the education world. Study in UK, providing quality education and pioneered the education culture.</p> 
<p>If you intend to study in the UK, you are up for a unique experience. Whether it is the hustle and bustle of London you are looking for or the charming countryside of West England, you will fall in love with the UK and its people.</p>
<p>With the long history of education culture, there is no wonder that it has one of the biggest international student population in the world.</p>
<p>Whatever your interests, there’s a huge range of clubs and societies, as well as a diverse social life on offer.</p>


<img src={uk1}></img>
</div>

  
</div>


        </div>
    </div>
    </>
  )
}

export default Uk