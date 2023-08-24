import React from 'react'
import Info from './Info'
import Testemonial from './Testemonial'
import Work from './Work'
import Form from './Form'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div className='home h-screen w-screen flex md:flex-row flex-col justify-center'>
        <div className=' md:m-14 mt-2  '>
          <img src='https://plus.unsplash.com/premium_photo-1675883162003-dce379a05e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80'
            alt='bitcoin' className='md:w-[400px]   md:h-[400px] w-[450px] md:ml-7  rounded-lg' />
        </div>
        <div className='w-[50%]'>
          <h1 className='font-bold text-white text-6xl pt-14 '>
            Progress<br/>
            Your Bitcoin Money Success</h1>
            <p className='font-bold p-3 text-white'>There are many variations of passages of Lorem Ipsum available,<br/>
             but the majority have suffered</p>
             <div className='mt-6 '>
              <button className='px-6 py-2 ml-2 mb-1 text-white font-semibold hover:bg-[#7F5A83] border-white border-2
              rounded-lg'>Read More</button>
              <button className='px-6 py-2 text-white font-semibold hover:bg-[#7F5A83] border-white border-2
             md:ml-4 ml-2 rounded-lg'>Get Quote</button>
             </div>
        </div>
      </div>
      <Info/>
      <Testemonial/>
      <Form/>
      <Footer/>
      </>
  )
}

export default Home