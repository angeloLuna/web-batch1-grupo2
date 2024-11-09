import './App.css';
import Tarjeta from './componentes/Tarjeta';


function App() {

  const personas = [{
    nombre: 'Angelo',
    apellido: 'Luna',
    telefono: '55555'
  },{
    nombre: 'Juan',
    apellido: 'Rubio',
    telefono: '7777'
  }, {
    nombre: 'Anuar',
    apellido: 'Harb',
    telefono: '88888'
  }]

  return (
    <div className="App">
      
      {
        personas.map((item) => <Tarjeta
          nombre={item.nombre}
          apellido={item.apellido}
          telefono={item.telefono}
        />)
      }

    </div>
  );
}

export default App;
