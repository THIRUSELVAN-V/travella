import React, { useState } from "react";
import { InputField } from "..";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { GoogleLogin } from '..';
import { BasicButtons } from "..";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { api } from "../../axious/api";

export const GoogleLoginPage = () => {
  const [error, setError] = useState("");

  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); 
  const login = useAuthStore((state) => state.login)
  const setToken = useAuthStore((state) => state.setToken)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError(""); // Reset previous error

  try {
    const response = await api.post('/auth/login', formData);

    localStorage.setItem('token', response.data.token);
    setToken(response.data.token);
    login(response.data.user); // Optional: login state if needed
    navigate('/');
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
    navigate('/') 
  };

  const handleLogout = () => {
    setUser(null);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="w-full  h-[39rem] flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold  text-primary mb-2">Welcome</h2>
      <p className="text-foreground mb-6">Login with Email</p>

      {user ? (
        <div className="text-center">
          <img src={user.picture}  alt="Profile" className="rounded-full w-16 h-16 mx-auto mb-4 object-cover" />
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          
        </div>
      ) : (
        <>
        {error && (
  <div className="text-destructive text-sm text-center mb-2">
    {error}
  </div>
)}
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
            <BasicButtons
              name="LOGIN"
              type="submit"
              className="w-full !bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-2 rounded transition duration-200"
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
        <a href="/register" className="text-primary font-semibold hover:underline">
          Register Now
        </a>
      </div>
    </div>
  );
};

