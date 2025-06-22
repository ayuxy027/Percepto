import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-md'>
        <h1 className='text-2xl font-semibold text-center'>Hello World</h1>  
        <button className='mt-4 bg-blue-500 text-white p-2 rounded-md w-full' onClick={() => setCount(count + 1)}>Click me</button>
        <p className='mt-2 text-center'>Count: {count}</p>
      </div>
    </div>
  )
}

export default App