import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Loading from './Loading'
import ExchangeCard from './ExchangeCard'
import Error from './Error'
const url='https://api.coingecko.com/api/v3'

const Exchange = () => {
  const [exchanges,setExchanes]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  useEffect(() => {
   const fetchme=async()=>{
  try {
    const {data}=await axios.get(`${url}/exchanges`)
    setExchanes(data)
    setLoading(false)
  } catch (error) {
    setError(true)
    setLoading(false)
  }
   }
  fetchme()
    
  }, [])
  if(error)return<Error/>
  return (
    <div className='bg-gradient-to-l from-[#0D324D] to-[#7F5A83]'>
   <section className='grid grid-cols-2 md:grid-cols-5 gap-9 max-w-7xl  mx-14'>
  {loading ? <Loading/>:<>
  {
    exchanges.map((i)=>(
      <ExchangeCard name={i.name} image={i.image} url={i.url} rank={i.trust_score_rank}/>
    ))
  }
  </>}
   </section>
   </div>
  )
}

export default Exchange