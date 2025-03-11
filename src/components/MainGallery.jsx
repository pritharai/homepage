import React from "react";
import AboutUs from "../assets/AboutUs";    
import dance2 from "../assets/dance2";
import singing from "../assets/singing";

const MainGallery = () => {
  const images = [
    "../assets/concert.jpg",
    "../assets/Aboutus.jpg",
    "../assets/dance.jpg",
    "../assets/dance2.jpg",
    "../assets/singing.jpg",
    "../assets/singer.jpg",
  ];

  return (
    <div className="bg-gray-100 py-30 px-6 md:px-16">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10"></div>
      <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-300 absolute -top-8 -left-2 md:-top-16 md:-left-4">
            Winners'
          </h1>
          <h2 className="text-3xl text-gray-500 font-bold relative z-10">Winners'_</h2>
      <div className="grid grid-cols-3 gap-4 mt-10 max-w-4xl">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} className="rounded-lg shadow-lg" />
        ))}
      </div>
     
      <button className="mt-6 bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700">
        EXPLORE MORE
      </button>
      </div>
    </div>
  );
};

export default MainGallery;
