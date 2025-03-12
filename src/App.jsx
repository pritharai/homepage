import React from "react";
import './App.css';
import Navbar from './components/Navbar';   
import HeroSection from './components/HeroSection';  
import Gallery from './components/Gallery';  
import AboutUs from "./components/AboutUs";
import EventsPage from "./components/Events";
import MainGallery from "./components/MainGallery";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Gallery />
      <AboutUs/>
      <EventsPage/>
      <MainGallery/>
      <Sponsors/>
      <Footer/>
    </div>
  );
};

export default App;
