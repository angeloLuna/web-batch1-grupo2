import './Tarjeta.css'

const Tarjeta = ({ nombre, apellido, telefono}) => {
  return (
    <div className="tarjeta">
      <span className='nombre'>{nombre}</span>
      <span className='apellido'>{apellido}</span>
      <span className=''>{telefono}</span>
    </div>
  )
}

export default Tarjeta