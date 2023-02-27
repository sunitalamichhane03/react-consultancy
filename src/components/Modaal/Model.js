import React, { useState } from "react";
import "./Model.css";

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
         <p className="contents">
            <ol>
                <li><a href='#'>Study in Ireland from Nepal 2023</a></li>
                <li><a href="#fun-facts-ireland">Fun facts about Ireland</a></li>
                <li><a href="#reasons-to-study-in-ireland">Reasons to Study in Ireland</a></li>
                <li><a href="#cost-study-in-ireland">Cost of Studying in Ireland</a></li>
                <li><a href="#popular-courses-in-ireland" >Popular Courses to Study in Ireland 2023</a></li>
                <li><a href="#best-cities-ireland">Best Cities to Study in Ireland</a></li>
                <li><a href="#universities-in-ireland">Top Universities and Colleges in Ireland</a></li>
                <li><a href="#scholarships-in-ireland" >Scholarships in Ireland</a></li>
                <li><a href="#scholarships-in-ireland">Scholarships in Ireland</a></li>
                <li><a href="#jobs-in-ireland">Job Opportunities in Ireland</a></li>
                <li><a href="#insurance-cost-in-ireland">Insurance Cost in Ireland</a></li>
                <li><a href="#document-required-in-ireland">Visa fees and documents required for visa lodgment</a></li>
                <li><a href="#faq">Frequently Asked Questions (FAQs)</a></li>


            </ol>
         </p>
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