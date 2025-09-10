import React from 'react'
import AdminLayout from '../../components/AdminLayout'

export const AdminPanel = () => {
  return (
    <AdminLayout>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Trips Booked</p>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Travelers</p>
          <p className="text-3xl font-bold">567</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Total Spend</p>
          <p className="text-3xl font-bold">$890,123</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="overflow-x-auto rounded-lg bg-slate-900">
          <table className="w-full text-left">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Traveler</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Trip</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Destination</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Status</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Ethan Carter</td>
                <td className="px-4 py-3 text-sm text-slate-400">Business Trip</td>
                <td className="px-4 py-3 text-sm text-slate-400">New York</td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                    Confirmed
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-400">2024-07-15</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Olivia Bennett</td>
                <td className="px-4 py-3 text-sm text-slate-400">Conference</td>
                <td className="px-4 py-3 text-sm text-slate-400">San Francisco</td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                    Pending
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-400">2024-07-20</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Liam Harper</td>
                <td className="px-4 py-3 text-sm text-slate-400">Client Meeting</td>
                <td className="px-4 py-3 text-sm text-slate-400">Chicago</td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-500/20 text-slate-400">
                    Completed
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-400">2024-07-10</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Ava Morgan</td>
                <td className="px-4 py-3 text-sm text-slate-400">Training</td>
                <td className="px-4 py-3 text-sm text-slate-400">Los Angeles</td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                    Confirmed
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-400">2024-07-25</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Noah Parker</td>
                <td className="px-4 py-3 text-sm text-slate-400">Team Retreat</td>
                <td className="px-4 py-3 text-sm text-slate-400">Miami</td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                    Pending
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-400">2024-07-30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <button className="flex items-center justify-center rounded-md h-10 px-4 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
            <span className="truncate">Book a Trip</span>
          </button>
          <button className="flex items-center justify-center rounded-md h-10 px-4 bg-slate-800 text-white text-sm font-bold hover:bg-slate-700 transition-colors">
            <span className="truncate">Manage Travelers</span>
          </button>
        </div>
      </div>

      {/* Trip Insights */}
      <div>
        <h2 className="text-xl font-bold mb-4">Trip Insights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4 rounded-lg bg-slate-900 p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-base font-medium text-slate-300">Trips by Destination</p>
                <p className="text-3xl font-bold">120</p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-slate-400">Last 6 Months</span>
                <span className="text-green-500 font-medium flex items-center">
                  <span className="material-symbols-outlined text-base">arrow_upward</span>
                  +15%
                </span>
              </div>
            </div>
            <div className="flex items-end h-48 gap-4 px-2">
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-blue-600 w-full rounded-t-sm" style={{ height: '20%' }}></div>
                <p className="text-xs text-slate-400">NYC</p>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-blue-600 w-full rounded-t-sm" style={{ height: '40%' }}></div>
                <p className="text-xs text-slate-400">SFO</p>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-blue-600 w-full rounded-t-sm" style={{ height: '35%' }}></div>
                <p className="text-xs text-slate-400">CHI</p>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-blue-600 w-full rounded-t-sm" style={{ height: '80%' }}></div>
                <p className="text-xs text-slate-400">LA</p>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-blue-600 w-full rounded-t-sm" style={{ height: '60%' }}></div>
                <p className="text-xs text-slate-400">MIA</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-slate-900 p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-base font-medium text-slate-300">Monthly Spend</p>
                <p className="text-3xl font-bold">$50,000</p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-slate-400">Last 12 Months</span>
                <span className="text-red-500 font-medium flex items-center">
                  <span className="material-symbols-outlined text-base">arrow_downward</span>
                  -5%
                </span>
              </div>
            </div>
            <div className="h-48 relative">
              <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 478 150" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#paint0_linear_area)"></path>
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#3b82f6" strokeLinecap="round" strokeWidth="2"></path>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_area" x1="236" x2="236" y1="1" y2="149">
                    <stop stopColor="#3b82f6" stopOpacity="0.5"></stop>
                    <stop offset="1" stopColor="#3b82f6" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-around text-xs text-slate-400 pt-2">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
            </div>
          </div>
        </div>
    </div>
    </AdminLayout>
  )
}