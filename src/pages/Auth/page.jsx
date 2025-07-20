// components/AuthLayout.jsx
import React from "react";
import { GoogleLoginPage } from "../../components";
import { RegisterPage } from "../../components";

export const AuthLayout = ({ page, imageSubText }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-white rounded-3xl shadow-lg flex w-full max-w-5xl overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-evenly items-center bg-blue-500 text-white w-1/2 p-8 relative">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-2">Travella</h1>
            <p className="text-center mt-3">{imageSubText}</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Travel"
            className="rounded-2xl mt-8 mb-8 object-cover w-full h-80 shadow-lg"
          />
        </div>

        {/* Right Side (Form Area) */}
        <div className="flex flex-col w-[32rem] justify-center items-center relative">
          {page == "login" &&
            <GoogleLoginPage />
          }
          {page == "register" &&
            <RegisterPage />
          }
        </div>
      </div>
    </div>
  );
};

