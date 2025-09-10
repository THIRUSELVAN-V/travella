import React, { useEffect, useState } from 'react'
import { bookingsAPI } from '../../axious/bookingsAPI'
import { useAuthStore } from '../../store/authStore'
import UnifiedLayout from '../../components/UnifiedLayout'

export default function Booking() {
  const user = useAuthStore((state) => state.user)
  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    let active = true
    const load = async () => {
      setIsLoading(true)
      setErrorMessage("")
      try {
        const res = await bookingsAPI.getMyBookings()
        const list = Array.isArray(res) ? res : res?.data || []
        if (active) setBookings(list)
      } catch (e) {
        if (active) setErrorMessage(typeof e === 'string' ? e : (e?.message || 'Failed to load bookings'))
      } finally {
        if (active) setIsLoading(false)
      }
    }
    load()
    return () => { active = false }
  }, [])

  return (
    <UnifiedLayout>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <p className="text-slate-400 mt-2">View and manage your upcoming trips</p>
      </header>
      {isLoading && (
        <div className="p-4 text-slate-400">Loading bookings...</div>
      )}
      {!isLoading && errorMessage && (
        <div className="p-4 text-red-600 dark:text-red-400">{errorMessage}</div>
      )}
      {!isLoading && !errorMessage && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((b, idx) => {
            const title = b.destination?.name || b.destination?.title || 'Trip'
            const imageUrl = b.destination?.image || (b.destination?.images && b.destination.images[0] && b.destination.images[0].url) || ''
            const dateRange = b.travelDates ? `${b.travelDates.startDate} → ${b.travelDates.endDate}` : ''
            return (
              <div key={b._id || idx} className="rounded-lg overflow-hidden bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm">
                <div className="relative w-full aspect-video">
                  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold">{title}</h3>
                  {dateRange && <p className="text-slate-400 text-sm mt-1">{dateRange}</p>}
                  <p className="text-slate-400 text-sm mt-1">Travelers: {b.travelers?.adults || 0} adult(s){typeof b.travelers?.children === 'number' ? `, ${b.travelers.children} child(ren)` : ''}</p>
                </div>
              </div>
            )
          })}
          {bookings.length === 0 && (
            <div className="p-4 text-slate-400">You have no bookings yet.</div>
          )}
        </div>
      )}
    </UnifiedLayout>
  )
}


