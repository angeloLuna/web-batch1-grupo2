// import React from 'react'
import Image from 'next/image'
import './Tarjeta.css'


export const Tarjeta = ({id}) => {
  return (
    <div className='tarjeta-container'>
      <span>{id}</span>
      <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`} alt="" />
    </div>
  )
}

export default Tarjeta