import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom/";
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
function App() {
  return (
    <>
      <BrowserRouter>
      <Uppernav />
        <Navbar />
        <Home/>
        <Routes>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contactus" component={Contactus}></Route>
          <Route path="/Testpreparation" component={Testpreparation}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/marketing" component={Marketing}></Route>
          <Route path="/development" component={Development}></Route>
          <Route path="/design" component={Design}></Route>
          <Route path="/Popularcourses" component={Popularcourses}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
