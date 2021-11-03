import React,{useContext,Fragment}from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../../../../context/proyectos/proyectoContext';


const ListadoTarea = () => {


  // obtener el state del formulario 
  const proyectosContext = useContext(proyectoContext);
   const  {proyecto,eliminarProyecto} = proyectosContext;



// si no ahi pt selecionado 
if(!proyecto)return <h2>Selecciona un Proyecto</h2>

   // array distryoring para extraer el pt actual 
   const [proyectoActual] = proyecto;

const tareasProyecto=[];

//eliminaa un proyecto 
const onClickEliminar =()=>{
  eliminarProyecto(proyectoActual.id)
}

    return (
        <Fragment>
    <h2>Proyecto :{proyectoActual.nombre}</h2>
      
    <ul className="listado-tareas">
   {tareasProyecto.length === 0
     ? (<li className="tarea"><p>No Hay Tareas</p></li>)

     :
     tareasProyecto.map(tarea =>(
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