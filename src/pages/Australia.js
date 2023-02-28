import React from 'react'

import Back from '../components/Back/Back'
import './Australia.css'
import aus1 from '../images/australia1.png'
import aus2 from '../images/australia2.jpg'

import Popup from '../components/Popup/Popup'
const Australia = () => {
  return (
    <>
     <Back title ='Australia'/> 
     <div className='container'>
        <div className='wrappe'>
            <div className='contents'>
                <h2>Why Study in Australia from Nepal? </h2>
                
            </div>
            <div className='class'>
            <div className='pass'>
           
			<p>Australia is not only as a student destination but overall is a dynamic and technologically vibrant country that offers good educational and career life to students from all over the world including students from Nepal to study in Australia.</p>
<p>Australia is one of the most sought-after study destinations for Nepalese students. IT has always been a popular student destination among students for abroad studies because of the quality of education, lifestyle and the friendly nature of the Australian people who accept all other cultures all around.</p>
<p>Every year, students from different parts of the world including Nepal visit this country in large numbers to avail themselves of the educational opportunities here.</p>
<p>The main reason behind this is that it offers the best educational system along with a challenging English-speaking environment.</p>
<p>Having some of the world’s top Universities as its assets; the country offers the best educational environment for international students. There are over 22000 courses and 1100 institutions that span over more than 29 study areas like language, nursing, medicine, engineering, art, business, etc.</p>

	
            </div>
            <img src={aus1}></img>

         
        </div>
     
        </div>
       
     </div>

     <Popup/>


     <div className='quarter'>
        <div className='half'>
            <h2>Facts about Australia as a student destination</h2>
<div className='more'>
	<ul className='lists'>
<li>Australia is the world’s 13th largest economy and has the world’s fifth-highest per capita income.</li>
<li>One of the most popular destinations in the world for international students.</li>
<li>Australia is the third most popular destination for international students</li>
<li>AQF provides a standard for global recognition</li>
<li>The cost of living is lower compared to the high standard of living</li>
<li>Over 260+ languages are spoken in Australia</li>
<li>Five of the top 40 cities with the best urban infrastructure I&nbsp;are in Australia</li>
<li>Australia is the fourth happiest country</li>
<li>Australia is ranked ninth in the world in the university system ranking</li>
<li>Melbourne has been ranked the world’s most liveable city for the past three years</li>
<li>8 out of 100 top universities in the world are Australian Universities.</li>
<li>5 out of the 30 best student cities in the world are in Australia.</li>
<li>$200 Million annual government investment in international scholarships.</li>
<li>2,500,000 international alumni of Australian institutions are making a difference around the world.</li>
<li>Almost one in four Australians was born overseas.</li>
<li>The Human Development Index of the UN Human Development Report 2015 ranked Australia second in the world.</li>
<li>The Economist Intelligence Unit’s 2016 World’s Most Livable Cities Survey ranked Melbourne No. 1 in the World’s most livable city.</li>
</ul>
<div className='checklist'>
<img src={aus2}></img>	
</div>
</div>
 </div>
     </div>
     <div className='further'>
      <div className='far'>
        <div className='moreabout'>
        <div className='desired'>
        <h2>What makes such a desired destination for Nepalese Students for further study in Australia?</h2>
      </div>
      <p>Australia offers a diverse range of study options for international students, with more than 1,200 institutions and over 22,000 courses to choose from. Regardless of what you are studying or how long for, Australia’s law promotes quality education &amp; protection of international students. As an international student on a study visa, you must study with an institution and in a course that is registered with the CRICOS. CRICOS registration guarantees that the course &amp; the institution at which you study meet the high standards expected by international students. So no matter what course you want to study for, how long or where you can be assured that in Australia you will have high quality &amp; rewarding study experience.</p>
      <p><strong>Australia is such a desired destination for students from Nepal because of the following reasons</strong></p>
      <ul>
<li>Safe and friendly society</li>
<li>Diverse course availability</li>
<li>Similar climate to that of Nepal</li>
<li>Better lifestyle</li>
<li>40 hours work per fortnight allowed</li>
<li>Flexible visa policy</li>
<li>World-class universities</li>
<li>Cheaper living cost</li>
<li>Post-study work visa</li>
<li>Globally accepted international degree</li>
</ul>


      </div>
     </div>
     </div>


    </>
  )
}

export default Australia