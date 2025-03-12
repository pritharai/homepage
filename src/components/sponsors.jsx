import React from "react";
import cola from "../assets/cola.jpeg";
import canam from "../assets/canam.png";
import lic from "../assets/lic.png";
import zerodha from "../assets/zerodha.png";

const Sponsors = () => {
  const sponsors = [
   cola,
   lic,
   canam,
   zerodha,
  ];

  return (
    <div className="bg-white px-10 py-26">
      {/* Heading */}
      <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-300 absolute -top-8 -left-2 md:-top-16 md:-left-4">
            SPONSORS
          </h1>
          <h2 className="text-3xl text-gray-500 font-bold relative z-10">Sponsors_</h2>
      

      {/* Sponsor Images */}
      <div className="flex justify-center flex-wrap gap-10 mt-6">
        {sponsors.map((sponsor, index) => (
          <img key={index} src={sponsor} alt={sponsor.alt} className="h-34 w-64-auto" />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Sponsors;
