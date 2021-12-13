import React,{useContext} from 'react';
import proyectoContext from '../../../../../context/proyectos/proyectoContext';
import TareaContext from '../../../../../context/tareas/tareaContext';


const Tarea = ({tarea}) => {

    
  // EXTRAER SI UN PROYECTO EST
  const proyectosContext = useContext(proyectoContext);
  const  {proyecto} = proyectosContext;


   // context obtenido de proyecto 
   const tareasContext = useContext(TareaContext)
 const {eliminarTarea, obtenerTareas,cambiaEstadoTarea,guardarTareaActual}=tareasContext;


 //funcion que se ejecuta cuando el usuario da click eliminar 
 
 //extrae el proyec to 
 const [proyectoActual] = proyecto;

 const tareaEliminar = id =>{
  eliminarTarea(id)
  obtenerTareas(proyectoActual.id)
 }

 // fn que m odifica el estado de las tareas 
 
 
 const cambiarEstado =tarea =>{
  if(tarea.estado){
    tarea.estado = false
  }else {
    tarea.estado = true
  }
cambiaEstadoTarea(tarea);
 }

 //agrega uan tarea actual cuando el ususraio desea editarla
 
 const seleccionarTarea = tarea =>{
   guardarTareaActual(tarea)
 }
    return (
<li className="tarea sombra">
    <p>{tarea.nombre}</p>

    <div className="estado">
     {tarea.estado 
      ?
      (
       <button
        type="button"
        className="completo"
        onClick={ ()=> cambiarEstado(tarea)}

        >Completo </button>
      )
      :  <button
      type="button"
      className="incompleto"
      onClick={ ()=> cambiarEstado(tarea)}

     >Incompleto </button>
     }
    </div>
    <div className="acciones">

     <button type="button" className="btn btn-primario" onClick={()=>seleccionarTarea(tarea)}>Editar</button>
     <button type="button" className="btn btn-secundario" onClick={()=>tareaEliminar(tarea.id)}>Eliminar</button>
    </div>

</li>
    
     );
}
 
export default Tarea;