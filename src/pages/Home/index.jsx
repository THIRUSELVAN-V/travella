import React from 'react';
import { Navbar } from '../../components'; // Adjust path if needed
import beachImg from '../../assets/beach.jpg'; // Background image
import pagodaImg from '../../assets/pagoda.jpeg'; // Right-side image

export const Home = () => {
  return (
    <div>
      <Navbar />
      <section
        className="relative bg-cover bg-center min-h-screen md:h-screen w-full pt-[80px]"
        style={{ backgroundImage: `url(${beachImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left Side Content */}
          <div className="text-white max-w-xl space-y-6">
            <h1 className="text-5xl font-bold">Enjoy your</h1>
            <h2 className="text-5xl font-semibold italic text-blue-200">Moment</h2>
            <p className="text-lg text-gray-200">
              Travel isn't about places, it's about moments.
              Moments that make you feel alive and free.
              Create memories that last a lifetime.
              Begin your adventure with us.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold rounded-md transition-all">
              Explore
            </button>
          </div>

          {/* Right Side Image */}
          <div className="relative mt-10 md:mt-0">
            <img
              src={pagodaImg}
              alt="Pagoda"
              className="w-[450px] rounded-lg shadow-lg"
            />

            {/* Discount Badge
            <div className="absolute top-0 left-0 bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold rotate-[15deg] -translate-x-1/2 -translate-y-1/2">
              UP TO 25%
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};
