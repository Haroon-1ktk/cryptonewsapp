import React,{useState,useEffect} from 'react'

const CoinDetails = () => {
  const [loading,setLoading]=useState(true);
  const [currency,setCurrency]=useState("pkr")
  const Hello=(e)=>{
    setCurrency(e.target.value)
  }
  return (
    <>
    <foam className='mt-3 ml-[550px]' onChange={Hello}>
         <input type='radio' value="Pkr" name="currency" />Pkr
         <input type='radio' value="Eur" name="currency"/>Eur 
         <input type='radio' value="Usd" name="currency" />Usd 
  </foam>
    </>
  )
}

export default CoinDetails