import React,{useContext,Fragment}from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../../../../context/proyectos/proyectoContext';
import tareaContext from '../../../../../context/tareas/tareaContext';


const ListadoTarea = () => {


  // obtener el state del formulario 
  const proyectosContext = useContext(proyectoContext);
   const  {proyecto,eliminarProyecto} = proyectosContext;


    // obtener laas tareas  del context de tarea 
const tareasContext =useContext(tareaContext)
const {tareasproyecto}=tareasContext;
// si no ahi pt selecionado 
if(!proyecto)return <h2>Selecciona un Proyecto</h2>

   // array distryoring para extraer el pt actual 
   const [proyectoActual] = proyecto;

//eliminaa un proyecto 
const onClickEliminar =()=>{
  eliminarProyecto(proyectoActual.id)
}

    return (
        <Fragment>
    <h2>Proyecto :{proyectoActual.nombre}</h2>
      
    <ul className="listado-tareas">
   {tareasproyecto.length === 0
     ? (<li className="tarea"><p>No Hay Tareas</p></li>)

     :
     tareasproyecto.map(tarea =>(
         <Tarea
           tarea = {tarea}
         />
     ))
    }
    
    </ul>
    <button
    type="button"
     className="btn btn-eliminar"
     onClick={onClickEliminar}
    >
    Eliminar Proyecto &times;
    </button>
    </Fragment>
     );
}
 
export default ListadoTarea;