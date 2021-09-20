import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/footer';
import InfoSection from './components/InfoSection';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Services from './components/ServicesElements';
import Works from './components/Works';
import { InfoData, InfoDataTwo } from './data/InfoData';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './GlobalStyles';
function App() {
  const [isOpen,setIsOpen]=useState(false)
  const toggle = () =>
  {
    setIsOpen(!isOpen)
  }
  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Main {...InfoData}/>
      <InfoSection {...InfoDataTwo}/>
      <Works/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
