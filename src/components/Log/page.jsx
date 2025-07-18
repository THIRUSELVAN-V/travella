import React, { useState } from "react";
import InputField from "../Text/page.jsx";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import GoogleLogin from "../../components/GoogleLogin/page";
import BasicButtons from "../Button/Button.jsx";

const GoogleLoginPage = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", formData);
  };

  const handleGoogleSuccess = (userData) => {
    console.log("Google login successful:", userData);
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold  text-blue-500 mb-2">Welcome</h2>
      <p className="text-gray-500 mb-6">Login with Email</p>

      {user ? (
        <div className="text-center">
          <img src={user.picture} alt="Profile" className="rounded-full w-16 h-16 mx-auto mb-4 object-cover" />
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
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
            <div className="flex justify-end text-xs text-gray-400 mb-2">
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
            {/* <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200"
            >
              LOGIN
            </button> */}
            <BasicButtons
              name="LOGIN"
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
        </>
      )}

      <div className="text-center text-sm text-gray-500 mt-6">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-500 font-semibold hover:underline">
          Register Now
        </a>
      </div>
    </div>
  );
};

export default GoogleLoginPage;
