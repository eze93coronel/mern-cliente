import React,{useContext,Fragment}from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../../../../context/proyectos/proyectoContext';
import TareaContext from '../../../../../context/tareas/tareaContext';
import {CSSTransition,TransitionGroup } from 'react-transition-group'

const ListadoTarea = () => {


  // obtener el state del formulario 
  const proyectosContext = useContext(proyectoContext);
   const  {proyecto,eliminarProyecto} = proyectosContext;

  // obtener las tareas del proyecto fn del context de tarea 
  const tareasContext = useContext(TareaContext)
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
     <TransitionGroup>
        { tareasproyecto.map(tarea =>(
           <CSSTransition
           key= {tarea.id}
           timeout={200}
           classNames="tarea"
           >

         <Tarea
           tarea = {tarea}
         />
            </CSSTransition>
          ))}
          
       </TransitionGroup>
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