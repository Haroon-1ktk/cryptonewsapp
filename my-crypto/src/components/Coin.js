import React, {useEffect,useState}from 'react'
import axios from 'axios'
const url='https://api.coingecko.com/api/v3'

const Coin = () => {
  const [coins,setCoins]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
   const fetchme=async()=>{
    const {data}=await axios.get(`${url}/exchanges`)
    setCoins(data)
    setLoading(false)
   }
  fetchme()
    
  }, [])
  return (
    <div>Coin</div>
  )
}

export default Coin