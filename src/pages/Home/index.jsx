import React from 'react';
import { Navbar } from '../../components';
import beachImg from '../../assets/beach.jpg';
import pagodaImg from '../../assets/pagoda.jpeg';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <section
        className="relative bg-cover bg-center min-h-screen md:h-screen w-full pt-[80px]"
        style={{ backgroundImage: `url(${beachImg})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between h-full">
          <div className="text-white max-w-xl space-y-6">
            <h1 className="text-5xl font-bold">Enjoy your</h1>
            <h2 className="text-5xl font-semibold italic text-blue-200">Moment</h2>
            <p className="text-lg text-gray-200">
              Travel isn't about places, it's about moments.
              Moments that make you feel alive and free.
              Create memories that last a lifetime.
              Begin your adventure with us.
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold rounded-md transition-all" >
              Explore
            </button>
          </div>
          <div className="relative mt-10 md:mt-0">
            <img
              src={pagodaImg}
              alt="Pagoda"
              className="w-[450px] rounded-lg shadow-lg"/>
          </div>
        </div>
      </section>
    </div>
  );
};
