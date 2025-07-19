// components/InputField.jsx
import React from "react";

export const InputField = ({ icon: Icon, type, name, value, onChange, placeholder }) => {
  return (
    <div>
      <label className="block text-blue-500 text-sm font-semibold mb-1 capitalize">
        {name}
      </label>
      <div className="flex items-center border px-3 py-2 rounded focus-within:ring-2 focus-within:ring-blue-200">
        <Icon className="text-blue-400" />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="ml-2 outline-none flex-grow"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

