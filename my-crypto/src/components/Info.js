import React from 'react'

const information=[{
    title:"Online Wallet",
    paragraph:"it is a longestablished fact that a readerwill be distracted by",
},{
title:"Send Coins",
    paragraph:"it is a longestablished fact that a readerwill be distracted by",
},{
title:"Coin Minnig",
    paragraph:"it is a longestablished fact that a readerwill be distracted by",
},{
    title:"Coin Minnig",
    paragraph:"it is a longestablished fact that a readerwill be distracted by",
}   
]


const Info = () => {
  return (
   <>
   <section className='bg-gradient-to-l from-[#0D324D] to-[#7F5A83] grid md:grid-cols-4 grid-cols-1 pb-2'>
    {information.map((i)=>(
        <div className=' mx-4 ml-4 bg-white rounded-xl shadow-md hover:bg-yellow-500
        hover:ease-in duration-300 hover:transform hover:text-white h-[240px]'>
            <div className='mt-3 mb-3 ml-16'><h1 className='font-bold md:text-2xl text-md'>{i.title}</h1></div>
            <div  className='mt-3 mb-3 ml-10 '>
                <p className='md:font-semibold text-gray-400 md:text-base text-xs hover:text-white'>{i.paragraph}</p>
                </div>
        </div>
    ))}
   </section>
   </>
  )
}

export default Info