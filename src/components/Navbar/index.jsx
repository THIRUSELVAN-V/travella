import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
export const Navbar = () => {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate('/login'); 
  };
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destinations" },
    { label: "Plans", path: "/plans" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <nav className="bg-background shadow-md py-4 px-8 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          Travella
        </div>

        <div className="flex items-center space-x-8">
          <ModeToggle/>
          <ul className="hidden md:flex space-x-8 text-foreground font-medium">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-primary-hover cursor-pointer"
                data-path={link.path} 
              >
                {link.label}
              </li>
            ))}
          </ul>

          <button onClick={handleLogin} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover transition-all">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};
