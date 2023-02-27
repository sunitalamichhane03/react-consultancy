import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from './components/Footer/Footer'
import Lowerfooter from "./components/Footer/Lowerfooter";
import Destination from './components/Destination'


import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Studentscreening from "./pages/Studentscreening";
import Testpreparation from "./pages/Testpreparation";
import Popularcourses from "./pages/Popularcources";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Uppernav from "./components/Uppernav";
import Studyabroad from "./pages/Studyabroad";
import Aboutus from "./pages/Aboutus";
import Ielts from "./pages/Ielts";
import Pte from './pages/Pte'
import Ireland from "./pages/Ireland";
import University_application_assistance from './pages/University_applicaton_assistance'
import Australia from "./pages/Australia";

function App() {
  return (
    <>
      <Router>
      <Uppernav />
        <Navbar />
       
        <Routes>
          <Route path="/"exact element={<Home/>}></Route>
          <Route path="/contactus" element={<Contactus/>}></Route>
          <Route path ='/aboutus' exact element={<Aboutus/>}></Route>
          <Route path="/Testpreparation" element={<Testpreparation/>}></Route>
          <Route path="/services"  element={<Services/>}></Route>
          <Route path="/signup"element={<Signup/>}></Route>
          <Route path="/studentscreening" element={<Studentscreening/>}></Route>
          <Route path="/development" element={<Development/>}></Route>
          <Route path="/design" element={<Design/>}></Route>
          <Route path="/Popularcourses" element={<Popularcourses/>}></Route>
          <Route path='/Studyabroad'element ={<Studyabroad/>}></Route>
          <Route path ='/Ielts' element ={<Ielts/>}></Route>
          <Route path='/Pte' element={<Pte/>}></Route>
          <Route path='/Ireland' element={<Ireland/>}></Route>
          <Route path ='/University_application_assistance' element={<University_application_assistance/>}></Route>
          <Route path ='/australia' element={<Australia/>}></Route>
        </Routes>
       <Footer />
     
       
       
      </Router>
    </>
  );
}

export default App;
