import React ,{useContext}from 'react'
import proyectoContext from '../../../context/proyectos/proyectoContext';
import tareaContext from '../../../context/tareas/tareaState';

const Proyecto = ({proyecto}) => {

    // obtener el state de proyectos 
    const proyectosContext = useContext(proyectoContext)
    const {proyectoActual} = proyectosContext;
 
  // obtener la fn del context de tarea 
const tareasContext = useContext(tareaContext)
 const {obtenerTareas}=tareasContext;
     // funcion para agregar el proyecto actual 

     const seleccionarProyecto = id=>{
        proyectoActual(id); // fija un pt actual
         obtenerTareas(id);// filtarra las tareas cuando se den click
        }
    
     return ( 
      
      <li>
 <button
   type="button"
   className="btn btn-blank"
   onClick={()=>seleccionarProyecto(proyecto.id)}
   >{proyecto.nombre}</button>


      </li>

     );
}
 
export default Proyecto;