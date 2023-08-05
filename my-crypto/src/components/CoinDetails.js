import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
const CoinDetails = ({id}) => {
  const params=useParams()
  const [loading,setLoading]=useState(true);
  const [currency,setCurrency]=useState("pkr")
  const [coin,setCoin]=useState({})
  const Hello=(e)=>{
    setCurrency(e.target.value)
  }
  useEffect(()=>{
    const fetchme=async()=>{
      const {data}=await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
   console.log(data.tickers)
      setLoading(false)}
      fetchme()
  },[params.id])
  return (
    <>
    <foam className='mt-3 ml-[550px]' onChange={Hello}>
         <input type='radio' value="Pkr" name="currency" />Pkr
         <input type='radio' value="Eur" name="currency"/>Eur 
         <input type='radio' value="Usd" name="currency" />Usd 
  </foam>
  {coin.coin_id}
    </>
  )
}

export default CoinDetails