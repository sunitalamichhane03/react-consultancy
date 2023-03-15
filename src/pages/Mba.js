import React from 'react'
import Back from '../components/Back/Back'
import './Mba.css'
import Modal from '../components/Model/Modal'
import img from '../images/mba.jpg'

const Mba = () => {
  return (
    <>
    <Back title ='Study MBA in Australia'/>
    <div className='mba'>
        <div className='morembaa'>
            <div className='mbaabout'>
                <img src ={img} alt =''></img>
                <p>MBA refers to Masters in Business Administration. MBA is turning out to be the go-to course for Nepalese entrepreneurs, financial staffs and other. A good MBA course can provide you with adequate knowledge to run your own business or to be able to handle businesses with ease.

                </p>
            </div>
       
            <div className="wmbaaaer">
			<p><strong><b>Course description</b></strong></p>
<p>Course duration</p>
<p>Average course duration for MBA in Australia is 2 years (Average).</p>
<p>&nbsp;</p>
<p><strong><b>Requirements</b></strong></p>
<p>Academic Requirements</p>
<p>Two to Five years of relevant managerial work experience which varies from university to university.</p>
<p>&nbsp;</p>
<p><strong><b>English Requirements</b></strong></p>
<ol>
<li>IELTS (Academic) – 0 overall (scores no less than 6.0 for Speaking and Writing and&nbsp;5.5&nbsp;for Listening and Reading)</li>
<li>TOEFL Internet-based (IBT) – Overall 60</li>
<li>Pearson Test of English (Academic) (PTE) – Overall score of 50</li>
</ol>
<p>&nbsp;</p>
<p><strong><b>Most affordable business colleges in Australia for MBA:</b></strong></p>
<p>We understand how you’d like to study in Australia. So we’ve decided to make a list of colleges for MBA. The lists are:</p>
<ol>
<li>Kaplan Business School</li>
<li>Charles Sturt University</li>
<li>Excelsia College</li>
<li>Edith Cowan University</li>
<li>Victoria University</li>
<li>Central Queensland University</li>
<li>Australian Catholic University</li>
<li>Federation University</li>
<li>University of Southern Queensland</li>
<li>Southern Cross University</li>
</ol>
<p>&nbsp;</p>
<p><strong><b>Salary range for Australian MBA graduate students</b></strong></p>
<p>An MBA graduate can earn an average of AUS $100k as salary.</p>
<p>&nbsp;</p>
<p><strong><b>Career scope for Australian MBA graduate students:</b></strong></p>
<p>An MBA graduate can work as :</p>
<ol>
<li>Business Analyst</li>
<li>Business owner</li>
<li>Manager</li>
<li>Strategic planner</li>
<li>Business consultant</li>
<li>General manager</li>
<li>Marketing manager</li>
<li>Business manager</li>
<li>Human resources manager</li>
<li>Researcher</li>
</ol>
<p>&nbsp;</p>


		</div>

        </div>
        <Modal/>
    </div>
    
    
    
    </>
  )
}

export default Mba