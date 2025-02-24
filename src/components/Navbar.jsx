import React from "react";

const Navbar = () => {
    return (
      <nav className="bg-gray-200 text-gray-500 p-4 flex justify-between items-center">
        <div className="text-xl font-bold flex items-center">
          <img src= "https://pcte.edu.in/wp-content/uploads/2024/02/logo-2-e1709133406948.jpeg" alt="PCTE Logo" className="h-8 mr-2" />
          PCTE Group of Institutes
        </div>
        <ul className="flex font-bold space-x-6">
          <li className="hover:text-gray-700 cursor-pointer">Home</li>
          <li className="hover:text-gray-700 cursor-pointer">About Us</li>
          <li className="hover:text-gray-700 cursor-pointer">Events</li>
          <li className="hover:text-gray-700 cursor-pointer">Results</li>
        </ul>
        <button className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700">REGISTER NOW</button>
      </nav>
    );
  };
  
  export default Navbar ;