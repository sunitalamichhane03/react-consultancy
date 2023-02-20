import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Testpreparation from "./pages/Testpreparation";
import Popularcourses from "./pages/Popularcources";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Uppernav from "./components/Uppernav";
import Studyabroad from "./pages/Studyabroad";
function App() {
  return (
    <>
      <Router>
      <Uppernav />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contactus" exact element={<Contactus/>}></Route>
          <Route path="/Testpreparation" element={<Testpreparation/>}></Route>
          <Route path="/services"  element={<Services/>}></Route>
          <Route path="/signup"element={<Signup/>}></Route>
          <Route path="/marketing" element={<Marketing/>}></Route>
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
