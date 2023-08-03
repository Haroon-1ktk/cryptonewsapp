import React from 'react'
import how from '../assets/how'
const Work = () => {
  return (
    <div className='h-[600px] bg-blue-800 flex flex-col items-center'>
   <div>
    <h1>How It Works</h1>
   </div>
   <div>
    <video src='video' aria-controls='autoPlay'/>
   </div>
    </div>
  )
}

export default Work