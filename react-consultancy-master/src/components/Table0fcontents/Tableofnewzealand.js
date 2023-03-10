import React from 'react'
import { useState } from 'react';
import './Tableofcontent.css'

export default function Tableofnewzealand (){
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
<p class="tableofcontents" title="Table of Contents">Table of Contents</p>
<ol class="hide">
<li><a href="#education-system" class="__mPS2id _mPS2id-h mPS2id-highlight">The Educational System</a></li>
<li><a href="#university-program" class="__mPS2id _mPS2id-h">University programs</a></li>
<li><a href="#work-opportunity" class="__mPS2id _mPS2id-h">Work opportunities</a></li>
<li><a href="#language-requirements" class="__mPS2id _mPS2id-h">English Language Requirements</a></li>
<li><a href="#cost-requirements" class="__mPS2id _mPS2id-h">Cost Requirement</a></li>
<li><a href="#student-visa-to-study-in-newzealand" class="__mPS2id _mPS2id-h">How To Apply For A Student Permit Visa To Study In New Zealand?</a></li>
<li><a href="#faq's" class="__mPS2id _mPS2id-h">Frequently Asked Questions (FAQ’s)</a></li>
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
  