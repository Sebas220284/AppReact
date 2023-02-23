import React from "react";
import Header from "./components/header/Header";
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experencias from "./components/experencias/Experencias";

import Contact from "./components/contact/Contact";
import  Footer from './components/footer/Footer'
import Services from "./components/services/Services";
import Portafolio from "./components/portafolio/Portafolio";
const App = () => {
  return <>
  <Header/>
  <Nav/>
<About/>
  <Experencias/>
  <Services/>
  <Portafolio/>
  
  <Contact/>
  <Footer/>
  </>
};

export default App;
