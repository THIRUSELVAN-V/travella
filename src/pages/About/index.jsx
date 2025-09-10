import React from 'react'
import UnifiedLayout from '../../components/UnifiedLayout'

export const About = () => {
  return (
    <UnifiedLayout>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">About Travella</h1>
        <p className="text-slate-400 mt-2">Your trusted travel companion</p>
      </header>

      <div className="space-y-8">
        <div className="rounded-lg bg-slate-900 p-6">
          <h2 className="text-xl font-bold mb-4">Our Story</h2>
          <p className="text-slate-400 leading-relaxed">
            Travella was founded with a simple mission: to make travel accessible, enjoyable, and memorable for everyone. 
            We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg bg-slate-900 p-6">
            <h3 className="text-lg font-bold mb-3">Our Mission</h3>
            <p className="text-slate-400 text-sm">
              To provide exceptional travel experiences that connect people with the world's most beautiful destinations, 
              while ensuring safety, comfort, and unforgettable memories.
            </p>
          </div>
          <div className="rounded-lg bg-slate-900 p-6">
            <h3 className="text-lg font-bold mb-3">Our Vision</h3>
            <p className="text-slate-400 text-sm">
              To be the leading travel platform that inspires and enables people to explore the world, 
              fostering cultural understanding and creating meaningful connections.
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-slate-900 p-6">
          <h2 className="text-xl font-bold mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-white">verified</span>
              </div>
              <h4 className="font-semibold mb-2">Trusted Service</h4>
              <p className="text-slate-400 text-sm">15+ years of experience in travel industry</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-white">support_agent</span>
              </div>
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-slate-400 text-sm">Round-the-clock assistance for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-white">star</span>
              </div>
              <h4 className="font-semibold mb-2">Best Prices</h4>
              <p className="text-slate-400 text-sm">Competitive rates with no hidden fees</p>
            </div>
          </div>
        </div>
      </div>
    </UnifiedLayout>
  )
}
