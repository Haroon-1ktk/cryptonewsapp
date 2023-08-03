import React, {useEffect,useState}from 'react'
import axios from 'axios'
import Loading from './Loading';
import Coincard from './Coincard';
const url='https://api.coingecko.com/api/v3'

const Coin = () => {
  const [coins,setCoins]=useState([]);
  const [loading,setLoading]=useState(true);
  const [currency,setCurrency]=useState("pkr")
  const [page,setPage]=useState(1)

  const Hello=(e)=>{
    setCurrency(e.target.value)
  }
  
  useEffect(() => {
   const fetchme=async()=>{
    const {data}=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`)
   setCoins(data)
    setLoading(false)
   }
  fetchme()
    
  }, [currency])
  return (
    <>
    <foam className='mt-3 ml-[550px]' onChange={Hello}>
         <input type='radio' value="Pkr" name="currency" />Pkr
         <input type='radio' value="Eur" name="currency"/>Eur 
         <input type='radio' value="Usd" name="currency" />Usd 
  </foam>
  <section className='grid grid-cols-2 md:grid-cols-5 gap-3 max-w-7xl mt-3 ml-7'> 
       {loading ?<Loading/>:<>
    {coins.map((coin)=>(
      <Coincard 
      name={coin.name} 
      id={coin.id}
       key={coin.id}
       price={coin.current_price}
       image={coin.image}
       symbol={coin.symbol}
       />
    ))}
    </>}
    </section>

    </>
  )
}

export default Coin