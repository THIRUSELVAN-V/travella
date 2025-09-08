import React from 'react'
import {useStore} from '../../store/useStore'



export const Counter = () => {
  const { count, increment, decrement } = useStore()
  
  return (
    <div className="flex flex-col gap-2 items-center">
      <h2 className="text-xl font-semibold">Count: {count}</h2>
      <div className="flex gap-4">
        <button onClick={increment} className="bg-blue-500 px-3 py-1 rounded text-white">+</button>
        <button onClick={decrement} className="bg-red-500 px-3 py-1 rounded text-white">-</button>
      </div>
    </div>
  )
}