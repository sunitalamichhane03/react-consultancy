import React from 'react'
import { useState } from 'react';
import './Tableofcontent.css'

export default function Tableofcanada (){
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
<li><a href="#facts-canada" class="__mPS2id _mPS2id-h">Quick Facts about Canada</a></li>
<li><a href="#eligibility-criteria" class="__mPS2id _mPS2id-h">Eligibility Criteria to study in Canada</a></li>
<li><a href="#step-process-to-study-in-canada" class="__mPS2id _mPS2id-h">Step by Step Process to Apply for Canadian Student Visa</a></li>
<li><a href="#reasons-to-study-in-canada" class="__mPS2id _mPS2id-h">5 Reasons why you should study in Canada</a></li>
<li><a href="#employment-opportunities" class="__mPS2id _mPS2id-h">Employment Opportunities</a></li>
<li><a href="#scholarships" class="__mPS2id _mPS2id-h">Scholarships in Canada</a></li>
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
  