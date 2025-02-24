import React from "react";
import './App.css';
import Navbar from './components/Navbar';   
import HeroSection from './components/HeroSection';  
import Gallery from './components/Gallery';  
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Gallery />
      <AboutUs/>
    </div>
  );
};

export default App;
