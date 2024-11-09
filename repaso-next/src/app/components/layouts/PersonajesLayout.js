import './PersonajesLayout.css'
import Tarjeta from '../Tarjeta'


const PersonajesLayout = ({handleClick, mostrarTarjeta, data}) => {
  return (
    <div className="personajes-layout-container">
      {/* <h1 className='test'>Personajes Layout</h1> */}
      {/* <button onClick={handleClick}>Click</button> */}
      
      {
        data && data.map((item) => {
          console.log(item)
          return <Tarjeta id={item.id} />
      })
      }
      
    </div>
  )
}

export default PersonajesLayout