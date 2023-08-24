import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Chart from './Chart';
import Loading from './Loading'
const CoinDetails = ({id}) => {
  const params=useParams()
  const [loading,setLoading]=useState(true);
  const [currency,setCurrency]=useState("pkr")
  const [coin,setCoin]=useState({})
  const [chartArray, setChartArray] = useState([]);
  const [days, setDays] = useState('24h');
  const Hello=(e)=>{
    setCurrency(e.target.value)
  }
  useEffect(()=>{
    const fetchme=async()=>{
      try {
        const {data}=await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
      const { data: chartData } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${currency}&days=2`
      );
 setCoin(data)
   setChartArray(chartData.prices);
      setLoading(false)
      } catch (error) {
        console.log(error)
      }}
      fetchme()
  },[params.id,currency])
  return (
    <>
    <div className='bg-[#fffaf2]'>
    <foam className='mt-3 ml-[550px]' onChange={Hello}>
         <input type='radio' value="Pkr" name="currency" />Pkr
         <input type='radio' value="Eur" name="currency"/>Eur 
         <input type='radio' value="Usd" name="currency" />Usd 
  </foam>
  
   {loading ?<Loading/> : 
    <>
   <Chart currency={currency} arr={chartArray} days={days}/>
  <div className='flex justify-center flex-col items-center -mt-6'>
  <div className='text-2xl text-bold'>
  Last update on  {Date(coin.market_data.last_updated).split("G")[0]}
  </div>
  <div className=''>
<div>
<img src={coin.image.large} className='w-24 h-24' alt={coin.id}/>
</div>
<div>
  <h3 className='text-xl text-bold'>{coin.name}</h3>
  <p>{coin.market_data.current_price[currency]}</p>
  <p className={coin.market_data.price_change_percentage_24h>0?"text-green-600":"text-red-600"}>{
    coin.market_data.price_change_percentage_24h}%</p>
</div>
  </div>
<div className='flex flex-row p-3'>
<h1 className='text-green-500 p-3'>High Price in 24h:{coin.market_data.high_24h[currency]}</h1>
 <h1 className='text-red-500 p-3'>Low Price in 24h:{coin.market_data.low_24h[currency]}</h1>
</div>
 <div className='flex flex-row p-2 text-xl text-bold'>
  <h1>Max Supply</h1>
  <p className='pl-4'>{coin.market_data.max_supply}</p>
 </div>
 <div className='flex flex-row  text-xl text-bold'>
  <h1>Circulating Suply</h1>
  <p className='pl-4'>{coin.market_data.circulating_supply}</p>
 </div>
 </div>  </>} 
 </div>
    </>
  )
}

export default CoinDetails