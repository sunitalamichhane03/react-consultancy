import React from 'react'
import { useState } from 'react';
import './Tableofcontent.css'

export default function Tableofcontent() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
 
return (
  <>
    <button onClick={toggleModal} className="btn-modal">
     Table of contents
    </button>
    
    {modal && (
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <div className="toc">
       
          <ol classname="tableofcontents">
<li><a href="#facts" class="__mPS2id _mPS2id-h">Interesting Facts about USA</a></li>
<li><a href="#reasons" class="__mPS2id _mPS2id-h">Reasons to study in USA</a></li>
<li><a href="#test" class="__mPS2id _mPS2id-h mPS2id-clicked mPS2id-highlight mPS2id-highlight-first mPS2id-highlight-last">Which Test is required to study in the USA?</a></li>
<li><a href="#university" class="__mPS2id _mPS2id-h">Top Universities and Colleges in USA</a></li>
<li><a href="#cost-to-study" class="__mPS2id _mPS2id-h">Cost to Study in USA</a></li>
<li><a href="#cost-of-living" class="__mPS2id _mPS2id-h">Cost of Living in USA</a></li>
<li><a href="#health-insurance" class="__mPS2id _mPS2id-h">Health Insurance in USA</a></li>
<li><a href="#best-cities" class="__mPS2id _mPS2id-h">Best Cities to Study in USA</a></li>
<li><a href="#scholarships" class="__mPS2id">Scholarships in USA</a></li>
<li><a href="#jobs" class="__mPS2id _mPS2id-h">Job Opportunities in USA</a></li>
<li><a href="#visa-requirements" class="__mPS2id _mPS2id-h">Student Visa Requirements to study in USA from Nepal</a></li>
<li><a href="#faqs" class="__mPS2id _mPS2id-h">Frequently Asked Questions (FAQs)</a></li>
</ol>
       
       </div>
          <button className="close-modal" onClick={toggleModal}>
            CLOSE
          </button>
        </div>
        </div>
      
    )}
   


    </>
  )
}
