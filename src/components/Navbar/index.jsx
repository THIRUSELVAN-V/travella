import React from 'react';

export const Navbar = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destinations" },
    { label: "Plans", path: "/plans" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <nav className="bg-white shadow-md py-4 px-8 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          Travella
        </div>

        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-blue-600 cursor-pointer"
                data-path={link.path} // 👈 Path saved here for future use
              >
                {link.label}
              </li>
            ))}
          </ul>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};
