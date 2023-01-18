

import React,{useState} from 'react';
 

 import Tareaformulario from './Tareaformulario';

 import '../hojas-estilos/ListasTareas.css';
import Tareas from './Tareas';
function ListasTareas(){
const [tareas, settareas]=useState([]);

const agregarTarea= tarea=>{
if(tarea.texto.trim()){

    tarea.texto=tarea.texto.trim();
    const tareaactualizada=[tarea,...tareas];
    settareas(tareaactualizada);
}



}

const eliminarTareas=id=>{
const tareasactualizadas=tareas.filter(tareas=>tareas.id!==id);
settareas(tareasactualizadas);
}

const completarTarea=id=>{
const tareasactualizadas=tareas.map(tarea=>{


    if(tarea.id===id){

tarea.completada =!tarea.completada;

    }
return tarea;   
});
settareas(tareasactualizadas);

}



    return(
<>
<Tareaformulario onSubmit={agregarTarea}/>
<div className='tareas-lista-contenedor'>
{
tareas.map((tarea)=>
<Tareas 
key={tarea.id}
id={tarea.id}
texto={tarea.texto}
completada={tarea.completada}
completarTarea={completarTarea}
eliminarTarea={eliminarTareas}
/>

)

   


}
</div>

</>

    );
}

export default ListasTareas;