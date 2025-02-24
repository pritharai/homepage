import React from "react";
import coverImage from "../assets/pcte_ludhiana_cover.jpeg"; 

const HeroSection = () => {
  return (
    <div
      className="relative h-[500px] bg-cover bg-center text-white flex flex-col justify-center items-center"
    ><div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${coverImage})`,
      filter: 'blur(4px)', 
      zIndex: -1,
      // backgroundColor:' rgba(0, 0, 0, 0.2)',
    }}
  ></div>
  <div
        className="absolute inset-0 bg-black"
        style={{
          opacity: 0.5, // Adjust opacity here for background darkening
          zIndex: -1,
        }}
      ></div>
      <h1 className="text-gray-200 text-7xl font-bold">PCTE Groups of Institutes</h1>
      <p className="text-gray-200 text-6xl mt-2">PRESENTS</p>
      <h2 className="text-gray-200 text-8xl font-semibold mt-2">Koshish</h2>
      <button className="bg-red-800 px-6 py-3 mt-4 rounded hover:bg-red-700">
        CONTACT US ↗
      </button>
    </div>
  );
};

export default HeroSection;
