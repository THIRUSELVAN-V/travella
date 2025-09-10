// components/InputField.jsx
import React from "react";

export const InputField = ({ icon: Icon, type, name, value, onChange, placeholder }) => {
  return (
    <div>
      <label className="block text-primary text-sm font-semibold mb-1 capitalize">
        {name}
      </label>
      <div className="flex items-center border border-border bg-input px-3 py-2 rounded focus-within:ring-2 focus-within:ring-ring">
        <Icon className="text-primary" />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="ml-2 outline-none flex-grow bg-transparent text-foreground placeholder:text-muted-foreground"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

