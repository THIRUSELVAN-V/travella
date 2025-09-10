import React from 'react'
import AdminLayout from '../../components/AdminLayout'

export const AdminBookings = () => {
  const bookings = [
    { id: 1, bookingRef: 'BK001', traveler: 'Ethan Carter', destination: 'New York', checkIn: '2024-08-15', checkOut: '2024-08-18', status: 'Confirmed', total: '$2,500' },
    { id: 2, bookingRef: 'BK002', traveler: 'Olivia Bennett', destination: 'San Francisco', checkIn: '2024-08-20', checkOut: '2024-08-23', status: 'Pending', total: '$3,200' },
    { id: 3, bookingRef: 'BK003', traveler: 'Liam Harper', destination: 'Chicago', checkIn: '2024-08-10', checkOut: '2024-08-12', status: 'Completed', total: '$1,800' },
    { id: 4, bookingRef: 'BK004', traveler: 'Ava Morgan', destination: 'Los Angeles', checkIn: '2024-08-25', checkOut: '2024-08-28', status: 'Confirmed', total: '$2,100' },
    { id: 5, bookingRef: 'BK005', traveler: 'Noah Parker', destination: 'Miami', checkIn: '2024-08-30', checkOut: '2024-09-02', status: 'Cancelled', total: '$4,500' }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-500/20 text-green-400'
      case 'Pending': return 'bg-yellow-500/20 text-yellow-400'
      case 'Completed': return 'bg-blue-500/20 text-blue-400'
      case 'Cancelled': return 'bg-red-500/20 text-red-400'
      default: return 'bg-slate-500/20 text-slate-400'
    }
  }

  return (
    <AdminLayout>
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Bookings Management</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <span className="material-symbols-outlined">add</span>
            New Booking
          </button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Total Bookings</p>
          <p className="text-3xl font-bold">1,456</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Confirmed</p>
          <p className="text-3xl font-bold text-green-400">1,234</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Pending</p>
          <p className="text-3xl font-bold text-yellow-400">156</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Revenue</p>
          <p className="text-3xl font-bold text-blue-400">$2.1M</p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex gap-4">
        <select className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Status</option>
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <input
          type="text"
          placeholder="Search bookings..."
          className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>

      {/* Bookings Table */}
      <div className="rounded-lg bg-slate-900">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold">All Bookings</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Booking Ref</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Traveler</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Destination</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Check-in</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Check-out</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Status</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Total</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-4 py-3 text-sm font-medium">#{booking.bookingRef}</td>
                  <td className="px-4 py-3 text-sm font-medium">{booking.traveler}</td>
                  <td className="px-4 py-3 text-sm text-slate-400">{booking.destination}</td>
                  <td className="px-4 py-3 text-sm text-slate-400">{booking.checkIn}</td>
                  <td className="px-4 py-3 text-sm text-slate-400">{booking.checkOut}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">{booking.total}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </button>
                      <button className="text-green-400 hover:text-green-300">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        <span className="material-symbols-outlined text-sm">cancel</span>
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
