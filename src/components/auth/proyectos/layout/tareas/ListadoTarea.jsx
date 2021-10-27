import React,{useContext,Fragment}from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoTarea = () => {


  // obtener el state del formulario 
  const proyectosContext = useContext(proyectoContext);
   const  {proyecto} = proyectosContext;



 const tareasProyecto = [
{nombre : 'Elegir Plataforma', estado : true},
{nombre : 'Elegir Colores', estado : false},
{nombre : 'Elegir Plataforma de pago', estado : false},
{nombre : 'Elegir Hosting', estado : true},


 ]


    return (
        <Fragment>
    <h2>Proyecto : Tienda Virtual</h2>
      
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
    >
    Eliminar Proyecto &times;
    </button>
    </Fragment>
     );
}
 
export default ListadoTarea;