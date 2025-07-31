// components/InputField.jsx
import React from "react";

export const InputField = ({ icon: Icon, type, name, value, onChange, placeholder }) => {
  return (
    <div>
      <label className="block text-primary text-sm font-semibold mb-1 capitalize">
        {name}
      </label>
      <div className="flex items-center border border-blue-300 bg-white px-3 py-2 rounded-lg focus-within:ring-2 focus-within:ring-primary shadow-sm transition">
        <Icon className="text-primary" />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="ml-2 outline-none flex-grow text-gray-700 placeholder-gray-400 bg-transparent"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};
