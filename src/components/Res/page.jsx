// src/pages/Register/RegisterPage.jsx
import React, { useState } from "react";
import InputField from "../Text/page";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import BasicButtons from "../Button/Button";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Register attempt with:", formData);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-blue-500 mb-2">Register</h2>
      <p className="text-gray-500 mb-6">Create your account</p>

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
        {/* <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200"
        >
          REGISTER
        </button> */}
        <BasicButtons
          name="REGSITER"
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200"
        />
      </form>

      <div className="text-center text-sm text-gray-500 mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 font-semibold hover:underline">
          Login here
        </a>
      </div>
    </div>
  );
};

export default RegisterPage;
