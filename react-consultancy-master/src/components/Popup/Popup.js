import React, { useState } from "react";
import "./Popup.css";

export default function Modal() {
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
         
         <ol className="contents">
<li><a href="#facts" class="__mPS2id _mPS2id-h">Facts about Australia as a student destination</a></li>
<li><a href="#nepalese-students-destination-australia" class="__mPS2id _mPS2id-h">What makes such a desired destination for Nepalese Students for further study in Australia? </a></li>
<li><a href="#minimum-requirements-australia" class="__mPS2id _mPS2id-h">What are the minimum qualifications and requirements for Students in Nepal to study in Australia? </a></li>
<li><a href="#works-while-study-in-australia" class="__mPS2id _mPS2id-h">Work While You Study in Australia</a></li>
<li><a href="#documents-checklist-for-asutralia" class="__mPS2id _mPS2id-h">Document Checklist for Australia Studies</a></li>
<li><a href="#Cost-of-education-in-Australia" class="__mPS2id _mPS2id-h">Cost of education in Australia</a></li>
<li><a href="#step-guide-visa-application-from-nepal" class="__mPS2id _mPS2id-h">Step by step guide for Student visa Application from Nepal</a></li>
<li><a href="#faqs" class="__mPS2id _mPS2id-h">Frequently Asked Questions (FAQ’s)</a></li>
</ol>
         
         </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
          </div>
        
      )}
     
    </>
  );
}