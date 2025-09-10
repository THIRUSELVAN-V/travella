import React from 'react'
import AdminLayout from '../../components/AdminLayout'

export const AdminTrips = () => {
  const trips = [
    { id: 1, traveler: 'Ethan Carter', destination: 'New York', type: 'Business Trip', status: 'Confirmed', date: '2024-07-15', cost: '$2,500' },
    { id: 2, traveler: 'Olivia Bennett', destination: 'San Francisco', type: 'Conference', status: 'Pending', date: '2024-07-20', cost: '$3,200' },
    { id: 3, traveler: 'Liam Harper', destination: 'Chicago', type: 'Client Meeting', status: 'Completed', date: '2024-07-10', cost: '$1,800' },
    { id: 4, traveler: 'Ava Morgan', destination: 'Los Angeles', type: 'Training', status: 'Confirmed', date: '2024-07-25', cost: '$2,100' },
    { id: 5, traveler: 'Noah Parker', destination: 'Miami', type: 'Team Retreat', status: 'Pending', date: '2024-07-30', cost: '$4,500' }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-500/20 text-green-400'
      case 'Pending': return 'bg-yellow-500/20 text-yellow-400'
      case 'Completed': return 'bg-slate-500/20 text-slate-400'
      default: return 'bg-slate-500/20 text-slate-400'
    }
  }

  return (
    <AdminLayout>
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Trips Management</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <span className="material-symbols-outlined">add</span>
            New Trip
          </button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Total Trips</p>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Confirmed</p>
          <p className="text-3xl font-bold text-green-400">856</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Pending</p>
          <p className="text-3xl font-bold text-yellow-400">234</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Completed</p>
          <p className="text-3xl font-bold text-slate-400">144</p>
        </div>
      </div>

      {/* Trips Table */}
      <div className="rounded-lg bg-slate-900">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold">All Trips</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">ID</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Traveler</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Destination</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Type</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Status</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Date</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Cost</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {trips.map((trip) => (
                <tr key={trip.id}>
                  <td className="px-4 py-3 text-sm font-medium">#{trip.id}</td>
                  <td className="px-4 py-3 text-sm font-medium">{trip.traveler}</td>
                  <td className="px-4 py-3 text-sm text-slate-400">{trip.destination}</td>
                  <td className="px-4 py-3 text-sm text-slate-400">{trip.type}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(trip.status)}`}>
                      {trip.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-400">{trip.date}</td>
                  <td className="px-4 py-3 text-sm font-medium">{trip.cost}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}
