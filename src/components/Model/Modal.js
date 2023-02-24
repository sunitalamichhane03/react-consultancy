import React, { useState } from "react";
import "./Modal.css";

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
        Register Here
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <form action= ''>
        <input type='text' placeholder='Full Name' /><br></br>
        <input type='text' placeholder='Email Address' /><br></br>
        <input type='text' placeholder='Mobile Number' /><br></br>
        <label htmlFor="country"></label>
    <select id="country" name="city">
    <option value="">select Nearest Office*</option>
      <option value="Kathmandu">Kathmandu</option>
      <option value="canada">Pokhara</option>
      <option value="usa">Butwal</option>
      <option value="Birtamod">Birtamod</option>
      <option value="Bhairahawa">Bhairahawa</option>
      <option value="usa">Parsa</option>
      <option value="Nawalparasi">Nawalparasi</option>
      <option value="Chitwan">Chitwan</option>
      <option value="Sidney">Sidney</option>
    </select>
    <label htmlFor="city"></label><br></br>
    <select id="city" name="city">
    <option value="">select Prefered Study Destination*</option>
      <option value="Kathmandu">Australia</option>
      <option value="canada">UK</option>
      <option value="usa">Ireland</option>
      <option value="Birtamod">New Zealand</option>
      <option value="Bhairahawa">Canada</option>
      <option value="Bhairahawa">USA</option>
      </select>
      <label><input type="checkbox" name="checkbox-29[]" value="Yes, I would like to receive information on study abroad news and events from TheNext."/><span>Yes, I would like to receive information on study abroad news and events from Our Consultancy.</span></label>
      <input type="submit" value="Submit"></input>

      </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
     
    </>
  );
}