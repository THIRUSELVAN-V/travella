import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleresClick = () => {
    navigate("/register");
  };

  return (
    <div className="bg-blue-100 justify-center flex flex-col items-center h-screen">
      <h1 className="text-2xl font-bold">Home</h1>
      <h1 className="text-2xl font-bold">Travella!!!!</h1>
      <button 
        onClick={handleLoginClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
      <button 
       onClick={handleresClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        res
      </button>
    </div>
  ) 
}
