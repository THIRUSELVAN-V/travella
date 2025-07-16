import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          Travella
        </div>
        <div className="flex items-center space-x-8">

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Destinations</li>
          <li className="hover:text-blue-600 cursor-pointer">Plans</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
          Login
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
