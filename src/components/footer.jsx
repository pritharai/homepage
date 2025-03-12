import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import pcteLogo from "../assets/pctelogodark.avif";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <img src={pcteLogo} alt="PCTE Logo" className="h-16" />
        </div>

        {/* Contact Details */}
        <div className="text-gray-400 text-sm">
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" /> 0161-2888500
          </p>
          <p className="flex items-center gap-2 mt-3">
            <FaMapMarkerAlt className="text-white" />
            Campus-1, Baddowal, Ferozepur Road, Ludhiana-142021, Punjab, India
          </p>
          <p className="flex items-center gap-2 mt-3">
            <FaMapMarkerAlt className="text-white" />
            Campus-2, Near Baddowal Cantt, Ferozepur Road, Ludhiana-142021, Punjab, India
          </p>
          <p className="flex items-center gap-2 mt-3">
            <FaEnvelope className="text-white" /> info@pcte.edu.in
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6 md:mt-0 text-white text-2xl">
          <a href="#" className="hover:text-gray-500">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
