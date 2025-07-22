import React from 'react';

const SamplePage = () => {
  return (
    <div className="min-h-screen bg-background text-text p-8">
      <h1 className="text-4xl font-bold text-primary mb-4">Sample Theme Page</h1>
      
      <p className="text-lg text-secondary mb-6">
        This page uses the royal blue theme defined in Tailwind using CSS variables.
      </p>

      <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition duration-300">
        Themed Button
      </button>
    </div>
  );
};

export default SamplePage;
