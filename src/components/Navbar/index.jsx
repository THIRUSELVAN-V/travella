import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { useAuthStore } from '../../store/authStore';
export const Navbar = () => {
  const navigate = useNavigate(); 
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  const handleLogin = () => {
    navigate('/login'); 
  };
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destinations" },
    { label: "Planner", path: "/planner" },
    { label: "Offers", path: "/offers" },
    { label: "Booking", path: "/booking" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <nav className="bg-background shadow-md py-4 px-8 fixed top-0 left-0 right-0 z-50">
      {/* <div className="max-w-7xl mx-auto flex justify-between items-center">
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
                onClick={() => navigate(link.path)}
                data-path={link.path} 
              >
                {link.label}
              </li>
            ))}
          </ul>

          {!user ? (
            <button onClick={handleLogin} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover transition-all">
              Login
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button onClick={() => navigate('/')} className="flex items-center gap-2 px-3 py-2 rounded-md border border-black/10 hover:bg-accent transition-colors">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">
                  {(user.name || user.email || 'U').charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:inline text-sm">{user.name || user.email || 'Profile'}</span>
              </button>
              <button onClick={handleLogout} className="bg-primary text-primary-foreground px-3 py-2 rounded-md hover:bg-primary-hover transition-all text-sm">
                Logout
              </button>
            </div>
          )}
        </div>
      </div> */}
    </nav>
  );
};
