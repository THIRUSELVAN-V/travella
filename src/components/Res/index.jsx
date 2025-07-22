// src/pages/Register/RegisterPage.jsx
import React, { useState } from "react";
import { InputField } from "..";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BasicButtons } from "..";
import { GoogleLogin } from "..";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { api } from "../../axious/api";

export const RegisterPage = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
 const navigate = useNavigate(); 
  const login = useAuthStore((state) => state.login)
  const setToken = useAuthStore((state) => state.setToken)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous error
  if (formData.password !== formData.confirmPassword) {
      setError("confirmPassword do not match");
      return;
    }
    try {
      const response = await api.post('/auth/register', formData);
  
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      login(response.data.user); // Optional: login state if needed
      navigate('/dashboard');
    } catch (err) {
      console.error("Login failed:", err);
  
      if (err.response) {
        // Server responded with an error
        const msg = err.response.data.error || "Login failed. Please try again.";
        setError(msg);
      } else {
        setError("Network error. Please try again later.");
      }
    }
  };

  const handleGoogleSuccess = (userData) => {
    console.log("Google login successful:", userData);
    login(userData);
    navigate('/dashboard') 
  };

  return (
    <div className="w-full h-[39rem] flex flex-col items-center justify-center p-5">
      <h2 className="text-4xl font-bold text-blue-500 mb-2">Register</h2>
      <p className="text-gray-500 mb-2">Create your account</p>
      
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <InputField
          icon={FaUser}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter full name"
        />
        <InputField
          icon={MdOutlineEmail}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter email"
        />
        <InputField
          icon={MdOutlineLock}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter password"
        />
        
        <InputField
          icon={MdOutlineLock}
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm password"
        />
        {error && (
  <div className="text-red-500 text-sm text-center mb-2">
    {error}
  </div>
)}

        <BasicButtons
          name="REGISTER"
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200"
        />
      </form>
      <div className="flex items-center my-4 w-full max-w">
        <div className="flex-grow h-px bg-gray-200" />
        <span className="mx-2 text-gray-400 text-sm">OR</span>
        <div className="flex-grow h-px bg-gray-200" />
      </div>
      <GoogleLogin onSuccess={handleGoogleSuccess} />

      <div className="text-center text-sm text-gray-500 mt-2">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 font-semibold hover:underline">
          Login here
        </a>
      </div>
    </div>
  );
};
