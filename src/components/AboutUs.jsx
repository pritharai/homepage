import React from "react";
import Etimage from "../assets/Aboutus.webp"

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-30 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Side Content */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-300 absolute -top-8 -left-2 md:-top-16 md:-left-4">
            ABOUT US
          </h1>
          <h2 className="text-3xl text-gray-500 font-bold relative z-10">About Us_</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Kosish is a vibrant annual event held at PCTE College, bringing
            together students from various disciplines to showcase their
            talents. It features a diverse range of activities, including
            dancing, singing, debate, coding, art, and painting.
          </p>
          <p className="mt-2 text-gray-700 leading-relaxed">
            The event fosters creativity, teamwork, and a competitive spirit,
            providing a platform for students to express themselves and enhance
            their skills. Kosish is a much-anticipated celebration of talent,
            culture, and innovation, making it a highlight of the academic year
            at PCTE.
          </p>
          {/* Button
          <button className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition">
            KNOW MORE
          </button> */}
        </div>

        {/* Right Side Image */}
        <div>
          <img
            src={Etimage}
            alt="PCTE College"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
