import React from "react";
import { Search, Globe, User } from "lucide-react";
import { useTravelStore } from "../../store/destination";

export const Destinations = () => {
  const { upcomingTrips, popularDestinations } = useTravelStore();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">TravelScope</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-2 rounded-xl bg-gray-100 focus:outline-none"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          </div>
          <Globe className="h-5 w-5 text-gray-600 cursor-pointer" />
          <User className="h-6 w-6 text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Search bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Where to?"
          className="w-full rounded-xl bg-gray-100 py-3 px-4 focus:outline-none"
        />
      </div>

      {/* Upcoming Trips */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-3">Upcoming Trips</h2>
        <div className="grid grid-cols-2 gap-4 max-w-xl">
          {upcomingTrips.map((trip) => (
            <div
              key={trip.id}
              className="overflow-hidden rounded-2xl shadow-sm bg-white"
            >
              <img
                src={trip.img}
                alt={trip.city}
                className="h-32 w-full object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold">{trip.city}</h3>
                <p className="text-sm text-gray-500">{trip.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section>
        <h2 className="text-lg font-bold mb-3">Popular Destinations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {popularDestinations.map((place) => (
            <div
              key={place.id}
              className="overflow-hidden rounded-2xl shadow-sm bg-white"
            >
              <img
                src={place.img}
                alt={place.city}
                className="h-32 w-full object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold">{place.city}</h3>
                <p className="text-sm text-gray-500">{place.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 bg-blue-500 p-4 rounded-full shadow-lg text-white">
        💬
      </button>
    </div>
  );
};
