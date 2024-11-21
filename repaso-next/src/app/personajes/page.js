'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PersonajesLayout from './PersonajesLayout'


const Personajes = () => {

  // let datos = []
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false)
  const [data, setData] = useState([])

  const handleClick = () => {
    setMostrarTarjeta( !mostrarTarjeta )
  }
  
  useEffect(() => {
    axios.get('https://ddragon.leagueoflegends.com/cdn/14.21.1/data/en_US/champion.json')
    .then(function (response) {
      // manejar respuesta exitosa
      if (response) {
        // console.log(response.data.data)
        setData(Object.values(response.data.data))
      }
  })
  }, [])
  
  // console.log(data)
  return (
    <PersonajesLayout
      handleClick={handleClick}
      mostrarTarjeta={mostrarTarjeta}
      data={data}
    />
  )
}

export default Personajes
