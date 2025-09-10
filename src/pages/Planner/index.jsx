import React from 'react'
import UnifiedLayout from '../../components/UnifiedLayout'

export default function Planner() {
  return (
    <UnifiedLayout>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Trip Planner</h1>
        <p className="text-slate-400 mt-2">Plan your perfect trip with our AI-powered planner</p>
      </header>

      <div className="space-y-8">
        <div className="rounded-lg bg-slate-900 p-6">
          <h2 className="text-xl font-bold mb-4">Plan Your Trip</h2>
          <p className="text-slate-400 mb-6">
            Tell us about your preferences and we'll create a personalized itinerary just for you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Destination</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Where do you want to go?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Duration</label>
              <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select duration</option>
                <option value="1-3">1-3 days</option>
                <option value="4-7">4-7 days</option>
                <option value="8-14">1-2 weeks</option>
                <option value="15+">2+ weeks</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Budget</label>
              <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select budget range</option>
                <option value="budget">Budget ($500-1000)</option>
                <option value="mid">Mid-range ($1000-3000)</option>
                <option value="luxury">Luxury ($3000+)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Travel Style</label>
              <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select travel style</option>
                <option value="adventure">Adventure</option>
                <option value="relaxation">Relaxation</option>
                <option value="culture">Culture & History</option>
                <option value="nature">Nature & Wildlife</option>
              </select>
            </div>
          </div>
          
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Generate My Itinerary
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg bg-slate-900 p-6">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white">auto_awesome</span>
            </div>
            <h3 className="text-lg font-bold mb-2">AI-Powered</h3>
            <p className="text-slate-400 text-sm">Our AI analyzes your preferences to create the perfect itinerary.</p>
          </div>
          <div className="rounded-lg bg-slate-900 p-6">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white">schedule</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Optimized Routes</h3>
            <p className="text-slate-400 text-sm">Efficient scheduling to maximize your time and experiences.</p>
          </div>
          <div className="rounded-lg bg-slate-900 p-6">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white">personalize</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Personalized</h3>
            <p className="text-slate-400 text-sm">Tailored recommendations based on your interests and budget.</p>
          </div>
        </div>
      </div>
    </UnifiedLayout>
  )
}


