import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const testemonial=[{
    name:"Haroon",
   img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    Confession:'more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and webmore-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English Many desktop publishing packages and webmore-or-less normal distribution of'
},{
name:"Haroon",
img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
 Confession:'more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and webmore-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English Many desktop publishing packages and webmore-or-less normal distribution of',
},
{  name:"Haroon",
img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
 Confession:'more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and webmore-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English Many desktop publishing packages and webmore-or-less normal distribution of'
},
]


const Testemonial = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <div className=' bg-gradient-to-l from-[#0D324D] to-[#7F5A83] '>  
        <h1 className='pl-80 font-bold text-2xl ml-32 text-white'>Testemonial</h1>
    <div className=' bg-blue-700'>
    <Carousel responsive={responsive}
      autoPlay={ true }
      autoPlaySpeed={1000}
     
      transitionDuration={1000}
      showDots={true} 
     className='h-full'>
     
    {
        testemonial.map((i)=>(
            <div className=' '>
                
                <div className='flex items-center border-2 border-white '>
                    <div className='p-12 '>
                        <img src={i.img} alt={i.name} className=' h-40 rounded-lg w-[470px]'/> 
                        <h1 className='font-bold text-white text-xl'>{i.name}</h1>
                    </div>
                    <div className='p-5 '>
                        <p className='text-base font-bold'>{i.Confession}</p>
                    </div>
                </div>
            </div>
        ))
    }
    </Carousel>
    </div>
    </div>

    </>
  )
}

export default Testemonial