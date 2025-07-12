import React from 'react'

export const AdminPanel = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-600">Admin Panel</h1>
      <p>Only accessible to users with the 'admin' role.</p>
    </div>
  )
}