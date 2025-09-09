import React, { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { destinationsAPI } from '../../axious/destinationsAPI'
import { bookingsAPI } from '../../axious/bookingsAPI'
import { useAuthStore } from '../../store/authStore'

export default function DestinationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const user = useAuthStore((state) => state.user)
  const [dest, setDest] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedImage, setSelectedImage] = useState('')
  const [form, setForm] = useState({
    travelDates: { startDate: '', endDate: '' },
    travelers: { adults: 1, children: 0 },
    paymentMethod: 'credit_card',
    contactInfo: { phone: '', email: '' },
  })
  const [related, setRelated] = useState([])
  const imageUrl = useMemo(() => {
    if (!dest) return ''
    return dest.image || dest.photo || dest.coverImage || (dest.images && dest.images[0] && dest.images[0].url) || ''
  }, [dest])

  useEffect(() => {
    let active = true
    const run = async () => {
      setLoading(true)
      setError('')
      try {
        const data = await destinationsAPI.getById(id)
        const d = data?.data || data
        if (active) {
          setDest(d)
          setForm((prev) => ({ ...prev, contactInfo: { ...prev.contactInfo, email: user?.email || '' } }))
          const firstImg = d?.image || d?.photo || d?.coverImage || (d?.images && d.images[0] && d.images[0].url) || ''
          setSelectedImage(firstImg)
        }
      } catch (e) {
        if (active) setError(typeof e === 'string' ? e : (e?.message || 'Failed to load destination'))
      } finally {
        if (active) setLoading(false)
      }
    }
    run()
    return () => { active = false }
  }, [id, user])

  useEffect(() => {
    let active = true
    const loadRelated = async () => {
      try {
        const data = await destinationsAPI.getAll()
        const list = Array.isArray(data) ? data : data?.data || []
        const filtered = list
          .filter((d) => (d._id || d.id) !== (dest?._id || dest?.id))
          .filter((d) => (dest?.category ? d.category === dest.category : true))
          .slice(0, 4)
        if (active) setRelated(filtered)
      } catch (_) { /* ignore */ }
    }
    if (dest) loadRelated()
    return () => { active = false }
  }, [dest])

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

  const handleBook = async (e) => {
    e.preventDefault()
    if (!user) {
      navigate('/login')
      return
    }
    try {
      const payload = {
        destination: dest?._id || dest?.id || id,
        travelDates: form.travelDates,
        travelers: form.travelers,
        paymentMethod: form.paymentMethod,
        contactInfo: form.contactInfo,
        bookingNumber:1
      }
      await bookingsAPI.create(payload)
      navigate('/booking')
    } catch (err) {
      alert(typeof err === 'string' ? err : (err?.message || 'Failed to book'))
    }
  }



  if (loading) {
    return (
      <div className="px-6 md:px-12 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-full max-w-[1080px] flex-1">
          <div className="h-56 rounded-xl border border-black/10 bg-gray-200 dark:bg-gray-700 animate-pulse" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="px-6 md:px-12 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-full max-w-[1080px] flex-1">
          <div className="text-red-600 dark:text-red-400">{error}</div>
        </div>
      </div>
    )
  }

  if (!dest) return null

  return (
    <div className="px-6 md:px-12 lg:px-40 flex flex-1 justify-center py-5 ">
      <div className="layout-content-container flex flex-col w-full max-w-[1080px] flex-1">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#49739c] dark:text-gray-300 mb-3">
          <button onClick={() => navigate(-1)} className="hover:underline">Back</button>
          <span>/</span>
          <button onClick={() => navigate('/destinations')} className="hover:underline">Destinations</button>
          <span>/</span>
          <span className="text-[#0d141c] dark:text-white truncate max-w-[50%]">{dest.name || dest.title}</span>
        </div>

        {/* Hero with selectable gallery */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-black/10">
          <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${selectedImage || imageUrl})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
            <div className="text-white">
              <h1 className="text-2xl font-bold">{dest.name || dest.title}</h1>
              {(dest.city || dest.country) && (
                <p className="text-sm opacity-90">{[dest.city, dest.country].filter(Boolean).join(', ')}</p>
              )}
            </div>
            {Array.isArray(dest.images) && dest.images.length > 1 && (
              <div className="hidden md:flex gap-2">
                {dest.images.slice(0, 5).map((img) => (
                  <button
                    key={img._id || img.url}
                    onClick={() => setSelectedImage(img.url)}
                    className={`w-14 h-10 rounded-md overflow-hidden border ${selectedImage === img.url ? 'border-primary' : 'border-black/10'}`}
                    title={img.alt || ''}
                  >
                    <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${img.url})` }} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {dest.description && (
          <p className="mt-4 text-[#49739c] dark:text-gray-300 text-sm">{dest.description}</p>
        )}

        {/* Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {dest.category && <span className="px-2 py-1 text-xs rounded-full border border-black/10 bg-white dark:bg-[#0d141c] text-[#0d141c] dark:text-white">#{dest.category}</span>}
          {dest.climate && <span className="px-2 py-1 text-xs rounded-full border border-black/10 bg-white dark:bg-[#0d141c] text-[#0d141c] dark:text-white">{dest.climate}</span>}
          {dest.difficulty && <span className="px-2 py-1 text-xs rounded-full border border-black/10 bg-white dark:bg-[#0d141c] text-[#0d141c] dark:text-white">{dest.difficulty}</span>}
          {typeof dest.maxGroupSize === 'number' && <span className="px-2 py-1 text-xs rounded-full border border-black/10 bg-white dark:bg-[#0d141c] text-[#0d141c] dark:text-white">Max {dest.maxGroupSize}</span>}
        </div>

        {/* Quick facts */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {typeof dest.rating === 'number' && (
            <div className="rounded-lg border border-black/10 p-3 flex items-center justify-between">
              <span className="text-[#49739c] dark:text-gray-300 text-sm">Rating</span>
              <span className="text-[#0d141c] dark:text-white text-sm font-semibold">★ {dest.rating.toFixed(1)}{dest.totalReviews ? ` (${dest.totalReviews})` : ''}</span>
            </div>
          )}
          {(dest.price && dest.price.amount) && (
            <div className="rounded-lg border border-black/10 p-3 flex items-center justify-between">
              <span className="text-[#49739c] dark:text-gray-300 text-sm">Price</span>
              <span className="text-[#0d141c] dark:text-white text-sm font-semibold">{dest.price.currency ? `${dest.price.currency} ` : ''}{dest.price.amount}{dest.price.perPerson ? ' /person' : ''}</span>
            </div>
          )}
          {dest.duration && (
            <div className="rounded-lg border border-black/10 p-3 flex items-center justify-between">
              <span className="text-[#49739c] dark:text-gray-300 text-sm">Duration</span>
              <span className="text-[#0d141c] dark:text-white text-sm font-semibold">{dest.duration.min}{dest.duration.max ? ` - ${dest.duration.max}` : ''} {dest.duration.unit || 'days'}</span>
            </div>
          )}
          {dest.bestTimeToVisit && (
            <div className="rounded-lg border border-black/10 p-3 flex items-center justify-between">
              <span className="text-[#49739c] dark:text-gray-300 text-sm">Best time</span>
              <span className="text-[#0d141c] dark:text-white text-sm font-semibold">{dest.bestTimeToVisit.start} - {dest.bestTimeToVisit.end}</span>
            </div>
          )}
        </div>

        {/* Highlights and details */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            {Array.isArray(dest.highlights) && dest.highlights.length > 0 && (
              <div className="rounded-xl border border-black/10 p-4">
                <h3 className="text-[#0d141c] dark:text-white text-sm font-semibold mb-2">Highlights</h3>
                <ul className="list-disc pl-5 space-y-1 text-[#49739c] dark:text-gray-300 text-sm">
                  {dest.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            )}
            {(Array.isArray(dest.included) || Array.isArray(dest.excluded)) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Array.isArray(dest.included) && (
                  <div className="rounded-xl border border-black/10 p-4">
                    <h3 className="text-[#0d141c] dark:text-white text-sm font-semibold mb-2">Included</h3>
                    <ul className="list-disc pl-5 space-y-1 text-[#49739c] dark:text-gray-300 text-sm">
                      {dest.included.map((v, i) => <li key={i}>{v}</li>)}
                    </ul>
                  </div>
                )}
                {Array.isArray(dest.excluded) && (
                  <div className="rounded-xl border border-black/10 p-4">
                    <h3 className="text-[#0d141c] dark:text-white text-sm font-semibold mb-2">Excluded</h3>
                    <ul className="list-disc pl-5 space-y-1 text-[#49739c] dark:text-gray-300 text-sm">
                      {dest.excluded.map((v, i) => <li key={i}>{v}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            )}
            {Array.isArray(dest.images) && dest.images.length > 1 && (
              <div className="rounded-xl border border-black/10 p-4">
                <h3 className="text-[#0d141c] dark:text-white text-sm font-semibold mb-2">Gallery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {dest.images.slice(0, 6).map((img) => (
                    <div key={img._id || img.url} className="aspect-video rounded-lg overflow-hidden border border-black/10">
                      <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${img.url})` }} title={img.alt || ''} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="space-y-4 md:sticky md:top-24 h-max">
            <div className="rounded-xl border border-black/10 p-4">
              <h3 className="text-[#0d141c] dark:text-white text-sm font-semibold mb-2">Trip details</h3>
              <div className="space-y-1 text-[#49739c] dark:text-gray-300 text-sm">
                {dest.category && <p><span className="text-[#0d141c] dark:text-white">Category:</span> {dest.category}</p>}
                {dest.climate && <p><span className="text-[#0d141c] dark:text-white">Climate:</span> {dest.climate}</p>}
                {dest.difficulty && <p><span className="text-[#0d141c] dark:text-white">Difficulty:</span> {dest.difficulty}</p>}
                {typeof dest.maxGroupSize === 'number' && <p><span className="text-[#0d141c] dark:text-white">Max group size:</span> {dest.maxGroupSize}</p>}
                {Array.isArray(dest.languages) && dest.languages.length > 0 && (
                  <p><span className="text-[#0d141c] dark:text-white">Languages:</span> {dest.languages.join(', ')}</p>
                )}
                {dest.coordinates && (
                  <p><span className="text-[#0d141c] dark:text-white">Coordinates:</span> {dest.coordinates.latitude}, {dest.coordinates.longitude}</p>
                )}
              </div>
            </div>
            
            {/* Booking card remains */}
            <div>
              <h2 className="text-[#0d141c] dark:text-white text-[18px] font-semibold px-1 md:px-0 pb-2 pt-1">Book this trip</h2>
              <form onSubmit={handleBook} className="rounded-xl border border-black/10 p-4 space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-[#49739c] dark:text-gray-300 mb-1">Start Date</label>
                      <input type="date" className="w-full border border-black/10 rounded-md p-2 bg-background"
                        value={form.travelDates.startDate}
                        onChange={(e) => updateField('travelDates.startDate', e.target.value)}
                        required />
                    </div>
                    <div>
                      <label className="block text-sm text-[#49739c] dark:text-gray-300 mb-1">End Date</label>
                      <input type="date" className="w-full border border-black/10 rounded-md p-2 bg-background"
                        value={form.travelDates.endDate}
                        onChange={(e) => updateField('travelDates.endDate', e.target.value)}
                        required />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => {
                      const today = new Date();
                      const end = new Date(); end.setDate(today.getDate() + 3);
                      updateField('travelDates.startDate', today.toISOString().slice(0,10));
                      updateField('travelDates.endDate', end.toISOString().slice(0,10));
                    }} className="px-2 py-1 text-xs rounded-md border border-black/10 hover:bg-accent">+3 days</button>
                    <button type="button" onClick={() => {
                      const today = new Date();
                      const end = new Date(); end.setDate(today.getDate() + 7);
                      updateField('travelDates.startDate', today.toISOString().slice(0,10));
                      updateField('travelDates.endDate', end.toISOString().slice(0,10));
                    }} className="px-2 py-1 text-xs rounded-md border border-black/10 hover:bg-accent">+7 days</button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-[#49739c] dark:text-gray-300 mb-1">Adults</label>
                      <input type="number" min={1} className="w-full border border-black/10 rounded-md p-2 bg-background"
                        value={form.travelers.adults}
                        onChange={(e) => updateField('travelers.adults', Number(e.target.value))}
                        required />
                    </div>
                    <div>
                      <label className="block text-sm text-[#49739c] dark:text-gray-300 mb-1">Children</label>
                      <input type="number" min={0} className="w-full border border-black/10 rounded-md p-2 bg-background"
                        value={form.travelers.children}
                        onChange={(e) => updateField('travelers.children', Number(e.target.value))} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-[#49739c] dark:text-gray-300 mb-1">Payment Method</label>
                    <select className="w-full border border-black/10 rounded-md p-2 bg-background"
                      value={form.paymentMethod}
                      onChange={(e) => updateField('paymentMethod', e.target.value)}>
                      <option value="credit_card">Credit Card</option>
                      <option value="debit_card">Debit Card</option>
                      <option value="upi">UPI</option>
                      <option value="paypal">PayPal</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-[#49739c] dark:text-gray-300 mb-1">Phone</label>
                      <input type="tel" className="w-full border border-black/10 rounded-md p-2 bg-background"
                        value={form.contactInfo.phone}
                        onChange={(e) => updateField('contactInfo.phone', e.target.value)}
                        required />
                    </div>
                    <div>
                      <label className="block text-sm text-[#49739c] dark:text-gray-300 mb-1">Email</label>
                      <input type="email" className="w-full border border-black/10 rounded-md p-2 bg-background"
                        value={form.contactInfo.email}
                        onChange={(e) => updateField('contactInfo.email', e.target.value)}
                        required />
                    </div>
                  </div>
                  {(dest.price && dest.price.amount) && (
                    <div className="text-xs text-[#49739c] dark:text-gray-300">
                      Estimated total: <span className="text-[#0d141c] dark:text-white font-semibold">{dest.price.currency ? `${dest.price.currency} ` : ''}{(dest.price.amount * (Number(form.travelers.adults||0) + Number(form.travelers.children||0))).toFixed(2)}</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary-hover transition-all">Book Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* FAQs */}
        {Array.isArray(dest.faqs) && dest.faqs.length > 0 && (
          <div className="mt-5 rounded-xl border border-black/10 p-4">
            <h3 className="text-[#0d141c] dark:text-white text-sm font-semibold mb-2">FAQs</h3>
            <div className="space-y-2">
              {dest.faqs.map((f, i) => (
                <details key={i} className="rounded-md border border-black/10 p-3">
                  <summary className="cursor-pointer text-sm text-[#0d141c] dark:text-white">{f.q || f.question || 'Question'}</summary>
                  <p className="mt-2 text-xs text-[#49739c] dark:text-gray-300">{f.a || f.answer || ''}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Related destinations */}
        {related.length > 0 && (
          <div className="mt-5">
            <h3 className="text-[#0d141c] dark:text-white text-sm font-semibold mb-2">You might also like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {related.map((r, idx) => {
                const img = r.image || r.photo || r.coverImage || (r.images && r.images[0] && r.images[0].url) || ''
                return (
                  <button key={r._id || r.id || idx} onClick={() => navigate(`/destinations/${encodeURIComponent(r._id || r.id || '')}`)} className="text-left rounded-xl overflow-hidden border border-black/10 bg-white dark:bg-[#0d141c]">
                    <div className="w-full aspect-video bg-center bg-cover" style={{ backgroundImage: `url(${img})` }} />
                    <div className="p-2">
                      <div className="text-xs text-[#0d141c] dark:text-white font-medium line-clamp-1">{r.name || r.title}</div>
                      {(r.city || r.country) && <div className="text-[11px] text-[#49739c] dark:text-gray-300 line-clamp-1">{[r.city, r.country].filter(Boolean).join(', ')}</div>}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}
        
      </div>
    </div>
  )
}


