import React from 'react'
import { Link } from 'react-router-dom'
const Coincard = ({price,name,image,symbol,id}) => {
  return (
    <>
    <Link to={`/coins/${id}`}>
    <div className='w-[170px] bg-[#ecdb60] flex items-center flex-col rounded-lg shadow-2xl hover:scale-100 hover:ease-in duration-300 hover:transform'>
  <div className=''>
    <img src={image} alt={name} className='w-[75%] m-3 mt-3'/>
  </div>
  <div className='mt-2 mb-2'>
    <h1 className='font-bold text-black'>{name}</h1>
    <p className='text-black'>Price:<span className='font-semibold'>{price}</span></p>
    <h3 className='text-xl text-bold '>{symbol.toUpperCase()}</h3>
  </div>
  </div>
       </Link>
    </>
  )
}

export default Coincard