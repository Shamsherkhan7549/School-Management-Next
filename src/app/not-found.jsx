import React from 'react'

 const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='font-bold text-5xl'>404</h1>
        <h5 className='font-semibold text-2xl'>Page Not Found</h5>
        <p className='text-gray-600 text-lg'>The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound