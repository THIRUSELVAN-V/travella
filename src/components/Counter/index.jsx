import React from 'react'
import { useStore } from '../../store/useStore'

export const Counter = () => {
  const { count, increment, decrement } = useStore()

  return (
    <div className="flex flex-col gap-4 items-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-primary">Count: {count}</h2>
      <div className="flex gap-6">
        <button
          onClick={increment}
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-2 rounded transition"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-2 rounded transition"
        >
          -
        </button>
      </div>
    </div>
  )
}
