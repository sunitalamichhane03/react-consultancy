import React from 'react'
import './Aboutus.css'
import Back from '../components/Back/Back'
import int from '../images/about1.jpg'
import inti from '../images/about2.jpg'
import obj from '../images/about3.jpg'
const Aboutus = () => {
  return (
    <>

      <Back title='About us' />

      <section className='intro'>
        <div className='introduction'>
          <img src={int}></img>
          <div className='text'>
            <h2>WHO WE ARE</h2>
            <p>Our Consultancy has a long standing reputation of being one of the most comprehensive study abroad consultants in  Nepal. Our head office is at Dillibazar, Kathmandu, Nepal. We have a support office in Sydney and Perth and branches at Parsa, Birtamode, Pokhara, Nawalparasi, Chitwan, Butwal in Nepal.</p>
          </div>
        </div>
        <div className='introduction1'>
          <div className='text1'>
            <h2>OUR MISSION</h2>
            <p>Our organization has single minded focus; to guide students to the best possible institutions to enable them to build their future. Using our expertise and vast experience, we can identify the most suitable institutions for each student. Our excellent network with the Australian Institutions helps us to deliver the best services to our students.</p>

            <p>Measuring the contentment of many students and their guardians, we are now showered with their unconditional love proving the bricks to success. This has triggered the expansion of our facilities for the students of all levels and faculties.  The Next with its incessant services to students, willing to carry on higher study abroad, has created own border in study abroad consultation as the most reliable source. We are proud to announce that students in various faculties<br></br> and institutions abroad have found our services better than the best.</p>
          </div>
          <img src={inti}></img>
        </div>
        <div className='objective'>
        <img src={obj}></img>
        <div className='text2'>
          <h2>OUR GOAL</h2>
          <p> With a team of enthusiastic &amp; dedicated human resources and excellent services is determined to meet the requirements of students seeking to study abroad. Within 10 short years it has all set a record by recruiting a considerable number of Nepalese students to study abroad. Contributing to realizing so many dreams we think we have added a brick to the nation’s strength. We are using all the resources available in and outside the country to achieve the goal of providing better opportunities for Nepalese students. Consequently, the main thrust of The Next is to craft it as a consultancy center of an international standard. To achieve this end we are pushing forward with the following objectives:</p>
        </div>
        </div>

      </section>
    </>
  )
}

export default Aboutus
