import React,{useState} from 'react';
import '../hojas-estilos/Tareaformulario.css';  
import {v4 as uuidv4} from 'uuid';
function Tareaformulario(props){

const [input,setinput]=useState('');

const manejarCambio=e=>{
setinput(e.target.value);


}

const manejarEnvio =e=>{
  e.preventDefault();
const tareasnuevas={

  id:uuidv4(),
  texto:input,
  completada:false
}

props.onSubmit(tareasnuevas);

} 
return(
    <form className='tarea-formulario'  onSubmit={manejarEnvio}>
  <input className='input' type='text' placeholder='escribe una tarea'name='texto'onChange={manejarCambio}/>
  <button className='tarea-boton'>agregar tarea</button>

    </form>
);
}

export default Tareaformulario;