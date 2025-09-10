import React from 'react'
import UnifiedLayout from '../../components/UnifiedLayout'

export default function Contact() {
  return (
    <UnifiedLayout>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-slate-400 mt-2">Get in touch with our team</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="rounded-lg bg-slate-900 p-6">
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">email</span>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-slate-400 text-sm">support@travella.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">phone</span>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">location_on</span>
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-slate-400 text-sm">123 Travel Street, Adventure City, AC 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-slate-900 p-6">
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg bg-slate-900 p-6">
          <h2 className="text-xl font-bold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us more about your inquiry..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </UnifiedLayout>
  )
}


