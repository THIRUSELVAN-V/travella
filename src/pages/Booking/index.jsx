import React, { useEffect, useMemo, useState } from 'react'
import { bookingsAPI } from '../../axious/bookingsAPI'
import { useAuthStore } from '../../store/authStore'

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

  const updateField = (path, value) => {
    setForm((prev) => {
      const next = { ...prev }
      const keys = path.split('.')
      let node = next
      for (let i = 0; i < keys.length - 1; i++) {
        node[keys[i]] = { ...node[keys[i]] }
        node = node[keys[i]]
      }
      node[keys[keys.length - 1]] = value
      return next
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")
    setSuccessMessage("")
    try {
      const payload = form
      const res = await bookingsAPI.create(payload)
      setSuccessMessage('Booking created successfully')
      // reset minimal fields
      setForm((prev) => ({
        ...prev,
        travelDates: { startDate: "", endDate: "" },
        travelers: { adults: 1, children: 0 },
        paymentMethod: "credit_card",
      }))
    } catch (err) {
      setErrorMessage(typeof err === 'string' ? err : (err?.message || 'Failed to create booking'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="px-6 md:px-12 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[1080px] flex-1">
        <h2 className="text-[#0d141c] dark:text-white text-[22px] font-bold px-1 md:px-4 pb-3 pt-5">My Bookings</h2>
        {isLoading && (
          <div className="p-4 text-[#49739c] dark:text-gray-300">Loading bookings...</div>
        )}
        {!isLoading && errorMessage && (
          <div className="p-4 text-red-600 dark:text-red-400">{errorMessage}</div>
        )}
        {!isLoading && !errorMessage && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bookings.map((b, idx) => {
              const title = b.destination?.name || b.destination?.title || 'Trip'
              const imageUrl = b.destination?.image || (b.destination?.images && b.destination.images[0] && b.destination.images[0].url) || ''
              const dateRange = b.travelDates ? `${b.travelDates.startDate} → ${b.travelDates.endDate}` : ''
              return (
                <div key={b._id || idx} className="rounded-xl overflow-hidden border border-black/10 bg-white dark:bg-[#0d141c]">
                  <div className="relative w-full aspect-video">
                    <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-[#0d141c] dark:text-white text-sm font-semibold">{title}</h3>
                    {dateRange && <p className="text-[#49739c] dark:text-gray-300 text-xs mt-1">{dateRange}</p>}
                    <p className="text-[#49739c] dark:text-gray-300 text-xs mt-1">Travelers: {b.travelers?.adults || 0} adult(s){typeof b.travelers?.children === 'number' ? `, ${b.travelers.children} child(ren)` : ''}</p>
                  </div>
                </div>
              )
            })}
            {bookings.length === 0 && (
              <div className="p-4 text-[#49739c] dark:text-gray-300">You have no bookings yet.</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}


