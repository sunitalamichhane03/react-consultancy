import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from './components/Footer/Footer'

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
function App() {
  return (
    <>
      <Router>
      <Uppernav />
        <Navbar />
        <Home />
        <Footer/>
        <Routes>
          <Route path="/home"exact element={<Home/>}></Route>
          <Route path="/contactus" exact element={<Contactus/>}></Route>
          <Route path ='/aboutus' exact element={<Aboutus/>}></Route>
          <Route path="/Testpreparation" element={<Testpreparation/>}></Route>
          <Route path="/services"  element={<Services/>}></Route>
          <Route path="/signup"element={<Signup/>}></Route>
          <Route path="/studentscreening" element={<Studentscreening/>}></Route>
          <Route path="/development" element={<Development/>}></Route>
          <Route path="/design" element={<Design/>}></Route>
          <Route path="/Popularcourses" element={<Popularcourses/>}></Route>
          <Route path='/Studyabroad'element ={<Studyabroad/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
