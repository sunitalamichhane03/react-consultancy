import React from 'react'
import Back from '../components/Back/Back'
import './Studentscreening.css'
import Modal from '../components/Model/Modal'
import { Link } from 'react-router-dom'
const Studentscreening = () => {
  return (
    <>
      <Back title ='Student screening'/>
      <div className='screening'>
      <div className="con">	
      <div className='contents'>						 
				<p>The “student assistance team” of Next Consultancy is an experienced agency in background checks of Students eligibility for enrollment. Universities, colleges and education providers turn to us because of our safe, secure and customized screening procedure which is unique in the Nepalese Prospective student market.</p>
<p>The goal of the Student Assistance Team is to offer additional support to kids who are having academic or behavioral issues and who are either performing below or above expectations. This prevents the students from benefiting from general education.<br></br>
A student must be referred to the student assistance team for consideration of interventions if universal screening, a recommendation from a parent, a&nbsp;staff member, or other information accessible to a public agency suggests that they need educational support for learning.</p>
<p>We conduct background checks for academic, financial, study gap, career progression, immigration history and most importantly intention to study requirements, working closely with the students. Screenings can mirror the academic and financial potential of Nepalese students where our counselors are assigned to conduct the process. We offer an online link where students can follow our website and fill-in their information for assessment. If there is some problems regarding filling form then, don’t hesitate to</p>
<Link to ='/Contactus'> <p><strong>contact us</strong>.</p></Link>
                    </div>
                  

                    <Modal/>
                    </div>
                    </div>

    </>
  )
}

export default Studentscreening
