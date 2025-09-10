import React from 'react'
import AdminLayout from '../../components/AdminLayout'

export const AdminTravelers = () => {
  const travelers = [
    { id: 1, name: 'Ethan Carter', email: 'ethan@company.com', department: 'Sales', trips: 12, lastTrip: '2024-07-15', status: 'Active' },
    { id: 2, name: 'Olivia Bennett', email: 'olivia@company.com', department: 'Marketing', trips: 8, lastTrip: '2024-07-20', status: 'Active' },
    { id: 3, name: 'Liam Harper', email: 'liam@company.com', department: 'Engineering', trips: 15, lastTrip: '2024-07-10', status: 'Active' },
    { id: 4, name: 'Ava Morgan', email: 'ava@company.com', department: 'HR', trips: 6, lastTrip: '2024-07-25', status: 'Active' },
    { id: 5, name: 'Noah Parker', email: 'noah@company.com', department: 'Finance', trips: 9, lastTrip: '2024-07-30', status: 'Inactive' }
  ]

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-slate-500/20 text-slate-400'
  }

  return (
    <AdminLayout>
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Travelers Management</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <span className="material-symbols-outlined">person_add</span>
            Add Traveler
          </button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Total Travelers</p>
          <p className="text-3xl font-bold">567</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Active</p>
          <p className="text-3xl font-bold text-green-400">523</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Inactive</p>
          <p className="text-3xl font-bold text-slate-400">44</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Avg Trips/Person</p>
          <p className="text-3xl font-bold">2.2</p>
        </div>
      </div>

      {/* Travelers Table */}
      <div className="rounded-lg bg-slate-900">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold">All Travelers</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">ID</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Name</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Email</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Department</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Trips</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Last Trip</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Status</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {travelers.map((traveler) => (
                <tr key={traveler.id}>
                  <td className="px-4 py-3 text-sm font-medium">#{traveler.id}</td>
                  <td className="px-4 py-3 text-sm font-medium">{traveler.name}</td>
                  <td className="px-4 py-3 text-sm text-slate-400">{traveler.email}</td>
                  <td className="px-4 py-3 text-sm text-slate-400">{traveler.department}</td>
                  <td className="px-4 py-3 text-sm font-medium">{traveler.trips}</td>
                  <td className="px-4 py-3 text-sm text-slate-400">{traveler.lastTrip}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(traveler.status)}`}>
                      {traveler.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button className="text-green-400 hover:text-green-300">
                        <span className="material-symbols-outlined text-sm">visibility</span>
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
