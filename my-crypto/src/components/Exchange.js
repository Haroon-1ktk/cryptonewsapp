import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Loading from './Loading'
import ExchangeCard from './ExchangeCard'
const url='https://api.coingecko.com/api/v3'

const Exchange = () => {
  const [exchanges,setExchanes]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
   const fetchme=async()=>{
    const {data}=await axios.get(`${url}/exchanges`)
    setExchanes(data)
    setLoading(false)
   }
  fetchme()
    
  }, [])
  
  return (
   <section className='grid grid-cols-2 md:grid-cols-5 gap-3 max-w-7xl mt-3 ml-7'>
  {loading ? <Loading/>:<>
  {
    exchanges.map((i)=>(
      <ExchangeCard name={i.name} image={i.image} url={i.url} rank={i.trust_score_rank}/>
    ))
  }
  </>}
   </section>
  )
}

export default Exchange