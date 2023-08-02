import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <header className=''>
    <div className='bg-black w-full text-white p-3 flex justify-between  '>
     <div className=''>
     <Link to='/' className='pl-1'>Home</Link>
      <Link to='/exchange'  className='pl-1'>exchange</Link>
      <Link to='/coin'  className='pl-1'>Coins</Link>
     </div>
    <div>
    <Link to='/'>Haroon</Link>
    </div>
    </div>
   </header>
  )
}

export default Header