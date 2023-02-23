import React from "react";
import Back from '../components/Back/Back'
import './Ielts.css'
import './Pte.css'
import img from '../images/ielts.jpg'
function Testpreparation() {
  return (
    <>
     <Back title ='Test Preparation'/>
    
     <div className='container'>
     <div className="wrapper">
    <h2> IELTS Overview</h2>
     <div className='description'>
			<p>Full Form: The International English Language Testing System (IELTS)</p>
<p>Year Started: 1980 AD</p>
<p>Score / Grade Range: 0 to 9 at increment of 0.5 band multiple.</p>
<p>Test Score/Grade Validity: 2 Years</p>
<p>Total Test Duration 2 hours 45 minutes.</p>
<p>Annual number of test takers: Over 3 million in 2017.</p>
<p>Test official authorities: British Council and IDP</p>
<p>Countries / Regions: More than 1,200 test centres in over 140 countries.</p>

		</div>
     </div>
     </div>

     <div className='container1'>
      <div className='wrapper1'>
        <h4>How many types of IELTS tests are there?</h4>
        <p>There are two types of IELTS Test namely:</p>
        <ol>
<li>1.IELTS Academic</li>
<li>2.IELTS General Training.</li>
</ol>
<p>IELTS test is mainly of two types: Academic and General Training. The Test consists of Listening, Speaking, Reading and Writing.</p>
<p>In both tests Listening &amp; speaking are same whereas there is a slight variation on Reading and Writing for Academic and <br></br>General Training IELTS Test according to 2018 Exam pattern.</p> 
      </div>
     </div>
     <div className='container2'>
     <img src = {img}></img>
      <div className='wrapper2'>
        <h4>IELTS Preparation Classes available in<br></br> Kathmandu</h4>
        <p>If you are planning to take IELTS Test then do Visit us we have a special offer for you.</p>
        <p>The Next Education Consultancy Nepal</p>
        <p>Dillibazar, Kathmandu</p>
        <a className="btn rounded_btn" href="tel:01-4010342">Call Us Now</a>
       
      </div>
     </div>
    </>
  );
}

export default Testpreparation;
