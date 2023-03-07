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
            <ol>
<li>Harvard University was the first university ever established in the United States.</li>
<li>Every day, Americans consume over 100 acres of pizza.</li>
<li>Women gained the right to vote in the United States for the first time in 1920.Alaska was a part of Russia in the nineteenth century.</li>
<li>London owns the Liberty Bell of the United States.</li>
<li>Philadelphia was the nation’s original capital, while Washington did not become the capital until 1790.</li>
<li>The American flag is made up of 50 stars, each representing one of the 50 states.</li>
<li>The Harvard Library is the world’s largest academic library</li>
</ol>

<div className='more_about'>
  <h2>Why is the USA popular amongst Nepalese Students?</h2>
</div>
<div className='in_details'>
<p>Every year, a large number of students from Nepal come to study in the USA. The number of students wishing to study in the United States has risen dramatically in recent years. Scholarships are available in the United States for Nepalese students who wish to study there. America offers a wide range of educational opportunities, from the most expensive to the most affordable. That is most likely why it is a popular choice among Nepalese students.</p>
</div>
        
        <div className='studyinusa'>
          <h2>Reasons to study in USA</h2>
        <div className="wpr">
			<ol>
<li><strong>World’s Top Universities</strong></li>
</ol>
<p>The USA has one of the top-ranked universities in the world. Over 4,000 schools and universities are located in the United States. In the United States, you can find outstanding undergraduate and graduate programs. For their excellence, US degrees are recognized and accepted all around the world.</p>
<ol start="2">
<li><strong>Career Opportunities</strong></li>
</ol>
<p>The United States has the world’s largest economy. When it comes to dividing the world’s top 100 companies, the United States still has the largest share. A degree from a US institution opens up a wide range of job opportunities, and a degree from a well-known university boosts the chances even more.</p>
<ol start="3">
<li><strong>Job Opportunities</strong></li>
</ol>
<p>When it comes to providing opportunities for excellent and well-paying jobs, the United States is one of the world’s leadershttps. Additionally, the US government provides a lot of assistance to students who want to continue their education to graduate with a good career.</p>
<ol start="4">
<li><strong>Travel Opportunities</strong></li>
</ol>
<p>With so many cities and states in the United States, it’s easy to get lost and wind up doing a variety of activities. Rather than sticking in one city or region, it is always a good idea to travel to new areas, meet new people, and learn about different cultures. Some wonderful destinations to visit are New York City, Chicago, Los Angeles, San Francisco, Washington, D.C., Las Vegas, Miami, and many more.</p>
<ol start="5">
<li><strong>Excellent Support for International Students</strong></li>
</ol>
<p>Institutions assist international students living in a foreign country. They conduct webinars, workshops, open days, orientation programs, and training, among other things. These institutes also offer language seminars to help international students integrate into their new culture.</p>

		</div>

    <div className='megha'>
      <h2>Which Test is required to study in the USA?</h2>
      <p>The USA takes the IELTS, PTE, and TOEFL exams, the same as other English-speaking nations.</p>
    </div>

        </div>
        </div>
    </div>
    
    </>
  )
}

export default Usa