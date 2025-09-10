import React from 'react'
import UnifiedLayout from '../../components/UnifiedLayout'

export default function Offers() {
  const offers = [
    {
      id: 1,
      title: "Summer Getaway Special",
      destination: "Beach Destinations",
      discount: "30% OFF",
      originalPrice: "$2000",
      newPrice: "$1400",
      validUntil: "2024-08-31",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Mountain Adventure",
      destination: "Himalayan Treks",
      discount: "25% OFF",
      originalPrice: "$1500",
      newPrice: "$1125",
      validUntil: "2024-09-15",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec5b4b?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Cultural Heritage Tour",
      destination: "Historical Cities",
      discount: "20% OFF",
      originalPrice: "$1200",
      newPrice: "$960",
      validUntil: "2024-10-30",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Wildlife Safari",
      destination: "National Parks",
      discount: "35% OFF",
      originalPrice: "$1800",
      newPrice: "$1170",
      validUntil: "2024-11-20",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
    }
  ]

  return (
    <UnifiedLayout>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Special Offers</h1>
        <p className="text-slate-400 mt-2">Limited time deals on amazing destinations</p>
      </header>

      <div className="space-y-8">
        {/* Featured Offer */}
        <div className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Flash Sale - 50% OFF!</h2>
              <p className="text-blue-100 mb-4">Book any destination this week and save big!</p>
              <button className="px-6 py-2 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors">
                Book Now
              </button>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">50%</div>
              <div className="text-blue-100">OFF</div>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="rounded-lg bg-slate-900 overflow-hidden hover:bg-slate-800 transition-colors">
              <div className="relative h-48">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${offer.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full">
                    {offer.discount}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-bold text-lg">{offer.title}</h3>
                  <p className="text-sm text-gray-200">{offer.destination}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-400">${offer.newPrice}</span>
                    <span className="text-slate-400 line-through">${offer.originalPrice}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">Valid until: {offer.validUntil}</p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="rounded-lg bg-slate-900 p-6">
          <h2 className="text-xl font-bold mb-4">Get Exclusive Offers</h2>
          <p className="text-slate-400 mb-6">Subscribe to our newsletter and be the first to know about new deals and promotions.</p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </UnifiedLayout>
  )
}


