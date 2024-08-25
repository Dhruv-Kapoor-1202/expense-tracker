import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="">
        <button onClick={() => setCount((count) => count + 1)} className='w-20 p-2 capitalize bg-gray-900 rounded-xl text-gray-50'>
          up
        </button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count - 1)} className='w-20 p-2 capitalize bg-gray-900 rounded-xl text-gray-50'>
          down
        </button>
      </div>
    </>
  )
}

// fuck

export default App
