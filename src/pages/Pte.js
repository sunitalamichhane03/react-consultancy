import React from 'react'
import Back from '../components/Back/Back'
import pte from '../images/pte.jpg'
import './Pte.css'
import Modal from '../components/Model/Modal'
const Pte = () => {
  return (
    <>
       <Back title ='Pte'/> 
       <div className='overview'>
<h2>PTE Overview</h2>

<b>Pearson Test Of English (Academic)</b>
       <table className="table">
<tbody>
<tr>
<th>PTE Format</th>
<th>Details</th>
</tr>
<tr>
<td>Exam Pattern</td>
<td>An English language exam that has been developed to test the Speaking &amp; Writing Skills (54 – 67 minutes), Reading skills (29 – 30 minutes), and Listening skills (30 – 43 minutes) of candidates wanting to study abroad in an English-speaking country.</td>
</tr>
<tr>
<td>Duration</td>
<td>2 hours and a Single test session</td>
</tr>
<tr>
<td>Medium</td>
<td>Computer-based with headset</td>
</tr>
<tr>
<td>Mode</td>
<td>Taken in a test center / Home Edition</td>
</tr>
<tr>
<td>Test Type</td>
<td>Assesses real-life English</td>
</tr>
<tr>
<td>Test Layout</td>
<td>20 question types</td>
</tr>
</tbody>
</table>
</div>
<div className='ptedesc'>
  <h4>What is PTE?</h4>
  <div className='pte'>

  <p><b>PTE</b>: Pearson Test of English (Academic) is an English language proficiency test that is designed to assess the competence or the language ability level of non-native English speakers. It assesses all skills of the English language: Speaking, Writing, Reading, and Listening. PTE is one of the internationally recognized tests which is accepted by several universities, colleges, and academic institutions including government agencies. It is a computer-based test that is valid for 2 years.</p>
  <img src = {pte}></img>
</div>

</div>
<div className='consult'>
  <div className='cons'>
    <h2>Why PTE in Our Consultancy?</h2>
    <p>The Next Education Consultancy feels honored to announce that it has been conducting PTE classes since its establishment. Our well-qualified and experienced Instructors regularly facilitate students who wish to prepare for the PTE exam pragmatically and methodologically. They not only make students well acquainted with the test format but also provide them with some valuable tips and strategies to master individual question types so that the desired score can be easily achieved.
</p>
<p><b>PTE Test Format in Detail:</b></p>
  </div>
</div>
<table className="table-bordered">
<tbody>
<tr>
<td>Speaking and Writing(SW)</td>
<td>54-67 minutes</td>
</tr>
<tr>
<td>Reading(R)</td>
<td>29-30 minutes</td>
</tr>
<tr>
<td>Listening(L)</td>
<td>30-34 minutes</td>
</tr>
</tbody>
</table>

<Modal/>
    </>
  )
}

export default Pte