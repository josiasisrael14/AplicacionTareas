
import './App.css';
import misuse from './imagenes/react.png';
import Tareas from './componentes/Tareas';
import Tareaformulario from './componentes/Tareaformulario';
import ListasTareas from './componentes/ListasTareas';
function App() {
  return (
    <div className="Aplicacion-tareas">
     <div className='logo-contenedor'>

      
      <img src ={misuse} className='logo-imagen' />
      
    
    </div>
   <div className='tareas-listas-principal'>
<h1>Mis tareas</h1>
<ListasTareas/>

   </div>
   

    </div> 
  );
}

export default App;
