import React from 'react'

const ExchangeCard = ({name,image,url,rank}) => {
  return (
   <>
  <div className='w-[170px] bg-current  rounded-lg shadow-2xl'>
  <div className=''>
    <img src={image} alt={name} className='w-[75%] m-3 mt-3'/>
  </div>
  <div className='mt-2 mb-2'>
    <h1 className='font-bold text-white'>{name}</h1>
    <p className='text-white'>Rank:<span className='font-semibold'>{rank}</span></p>
  <a href={url} target={"_blank"}>  
  <button className='flex px-2 py-1 rounded-lg bg-[#DDBFD4]'><h5 className='font-semibold pr-2 text-white
  '>See More </h5>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</button></a>
  </div>
  </div>
   </>
  )
}

export default ExchangeCard