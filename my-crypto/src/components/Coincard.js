import React from 'react'
import { Link } from 'react-router-dom'
const Coincard = ({price,name,image,symbol,id}) => {
  return (
    <>
    <Link to={`/coins/${id}`}><div>
        <div>
            <img src={image} alt={name}/>
        </div>
        <p>{symbol}</p>
        <div>
        <h1>{name}</h1>
        <p>{price}</p>
        </div>
        </div></Link>
    </>
  )
}

export default Coincard