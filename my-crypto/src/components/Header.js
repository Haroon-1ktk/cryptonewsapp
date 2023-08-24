import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <header className=''>
    <div className='bg-white w-full text-black p-3 flex justify-between  '>
     <div className=''>
     <Link to='/' className='pl-1 font-bold'>Home</Link>
      <Link to='/exchange'  className='pl-1 font-bold'>exchange</Link>
      <Link to='/coin'  className='pl-1 font-bold'>Coins</Link>
     
     </div>
    <div>
    <Link to='/'>Haroon</Link>
    </div>
    </div>
   </header>
  )
}

export default Header