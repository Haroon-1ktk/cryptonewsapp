import React from 'react'

const Form = () => {
  return (
  <div className='bg-blue-800  '>
   <div className='flex justify-center '>
   <h1 className='ml-16 font-bold text-white text-2xl'>Form</h1>
  <div className='flex md:flex-row flex-col bg-transparent mt-20'>
    <input placeholder='FullName ' type='email' className='bg-transparent mr-4 border-2 border-white w-60 h-10 outline-none rounded-lg'/>
    <input placeholder='PhoneNumber' type='number' className='bg-transparent mr-4 border-2 border-white w-60 h-10 outline-none rounded-lg'/>
   <div className='flex md:flex-row flex-col bg-transparent mt-20 justify-center'>
   <textarea className='bg-transparent border-2 border-gray-400 outline-none'/>
   <input className='bg-transparent border-2 border-gray-400 outline-none'/>
   </div>
  </div>
  </div>
  
   </div>
 
  )
}

export default Form