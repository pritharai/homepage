import React from "react";
import AboutUs from "../assets/Aboutus.webp";    
import dance2 from "../assets/dance2.jpeg";
import singing from "../assets/singing.webp";
import dance from "../assets/dance.jpeg";
import debate from "../assets/debate.webp";
import winners from "../assets/winners.jpg";

const MainGallery = () => {
  const images = [
    debate,
    AboutUs,
    dance,
    dance2,
    singing,
    winners,
  ];
  return (
    <div className="bg-gray-100 py-26 px-10">
      <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-300 absolute -top-8 -left-2 md:-top-16 md:-left-4">
            WINNERS'
          </h1>
          <h2 className="text-3xl text-gray-500 font-bold relative z-10">Winners'_</h2>
          </div>
      <div className="flex flex-col items-center mt-10">
        <div className="grid grid-cols-3 gap-4 max-w-6xl">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery ${index + 1}`} className="rounded-lg shadow-lg h-64 w-auto" />
          ))}
        </div>
        {/* <button className="mt-6 bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700">
          EXPLORE MORE
        </button> */}
      </div>
    </div>
  );
};

export default MainGallery;
