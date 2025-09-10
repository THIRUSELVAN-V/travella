import React from 'react'
import AdminLayout from '../../components/AdminLayout'

export const AdminHelp = () => {
  const helpSections = [
    {
      title: 'Getting Started',
      items: [
        { question: 'How do I access the admin dashboard?', answer: 'Navigate to /admin and log in with your admin credentials.' },
        { question: 'What can I do in the dashboard?', answer: 'View travel statistics, manage trips, travelers, policies, and generate reports.' },
        { question: 'How do I create a new trip?', answer: 'Click the "New Trip" button in the sidebar or go to Trips page and click "New Trip".' }
      ]
    },
    {
      title: 'Trip Management',
      items: [
        { question: 'How do I approve a trip?', answer: 'Go to Trips page, find the pending trip, and click the approve button.' },
        { question: 'Can I edit trip details?', answer: 'Yes, click the edit icon next to any trip in the trips table.' },
        { question: 'How do I track trip expenses?', answer: 'Trip expenses are automatically tracked and visible in the Reports section.' }
      ]
    },
    {
      title: 'User Management',
      items: [
        { question: 'How do I add a new traveler?', answer: 'Go to Travelers page and click "Add Traveler" button.' },
        { question: 'Can I deactivate a user?', answer: 'Yes, edit the traveler and change their status to inactive.' },
        { question: 'How do I view traveler history?', answer: 'Click the view icon next to any traveler to see their trip history.' }
      ]
    },
    {
      title: 'Reports & Analytics',
      items: [
        { question: 'How do I generate a report?', answer: 'Go to Reports page and click "Generate Report" or use quick report buttons.' },
        { question: 'What types of reports are available?', answer: 'Monthly summaries, expense trends, traveler insights, and policy compliance reports.' },
        { question: 'Can I export reports?', answer: 'Yes, click the download icon next to any ready report.' }
      ]
    }
  ]

  return (
    <AdminLayout>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Help & Documentation</h1>
        <p className="text-slate-400 mt-2">Find answers to common questions and learn how to use the admin dashboard</p>
      </header>

      {/* Quick Links */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="#getting-started" className="flex items-center gap-3 p-4 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-blue-400">play_arrow</span>
            <div>
              <p className="font-medium">Getting Started</p>
              <p className="text-sm text-slate-400">Basic setup and navigation</p>
            </div>
          </a>
          <a href="#trip-management" className="flex items-center gap-3 p-4 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-green-400">flight_takeoff</span>
            <div>
              <p className="font-medium">Trip Management</p>
              <p className="text-sm text-slate-400">Managing trips and bookings</p>
            </div>
          </a>
          <a href="#reports" className="flex items-center gap-3 p-4 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-purple-400">assessment</span>
            <div>
              <p className="font-medium">Reports & Analytics</p>
              <p className="text-sm text-slate-400">Generating and viewing reports</p>
            </div>
          </a>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="space-y-8">
        {helpSections.map((section, index) => (
          <div key={index} id={section.title.toLowerCase().replace(/\s+/g, '-')} className="rounded-lg bg-slate-900 p-6">
            <h2 className="text-xl font-bold mb-6">{section.title}</h2>
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="border-b border-slate-800 pb-4 last:border-b-0">
                  <h3 className="font-medium text-slate-300 mb-2">{item.question}</h3>
                  <p className="text-slate-400 text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="mt-8 rounded-lg bg-slate-900 p-6">
        <h2 className="text-xl font-bold mb-4">Need More Help?</h2>
        <p className="text-slate-400 mb-4">Can't find what you're looking for? Contact our support team.</p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <span className="material-symbols-outlined">email</span>
            Email Support
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined">chat</span>
            Live Chat
          </button>
        </div>
      </div>
    </AdminLayout>
  )
}
