import React,{useContext,useState,useEffect} from 'react'
import proyectoContext from '../../../../../context/proyectos/proyectoContext';
import TareaContext from '../../../../../context/tareas/tareaContext';


const FormTarea = () => {


  // EXTRAER SI UN PROYECTO EST
  const proyectosContext = useContext(proyectoContext);
   const  {proyecto} = proyectosContext;

   // context obtenido de proyecto 
   const tareasContext = useContext(TareaContext)
 const {   tareaseleccionada,errortarea,agregarTarea,validarTarea,obtenerTareas,actualizarTarea,limpiarTarea}=tareasContext;

  //effecct que detecta si ahi una tarea sellecionada 
  
  useEffect(()=>{
    if(tareaseleccionada !== null){
     guardarTarea(tareaseleccionada)

    }else {
      guardarTarea({
        nombre : ''
      })
    }

  },[tareaseleccionada])

// statae del form 

const [ tarea , guardarTarea]  = useState({
  nombre : ''
})

// extraer el nombre del proyecto 
const {nombre}= tarea;

// si no ahi pt selecionado 
if(!proyecto)return null

   // array distryoring para extraer el pt actual 
   const [proyectoActual] = proyecto;

// leer los valores del form 

const handleChange = e =>{
  guardarTarea({
    ...tarea, 
    [e.target.name] : e.target.value
  })
}

   const onSubmit = e =>{
   e.preventDefault(); 


// validar 
if(nombre.trim()=== '') {
  validarTarea()
  return;

}

//si es edicion o si es nueva tarea 
if(tareaseleccionada === null){
    
   //agregar la nueava tarea al state 
tarea.proyectoId = proyectoActual.id;
tarea.estado = false
agregarTarea(tarea)

}else {
  //actualizar tarea existente
actualizarTarea(tarea); 
//elimina tarea sellecionada del state 
limpiarTarea();

}

//obtener y filtarar las tareas del proyecto 
obtenerTareas(proyectoActual.id);

// reiniciar a form 
  guardarTarea({
    nombre: ''
  })
    
   }


    return (  
<div className="formulario">

<form
onSubmit={onSubmit}
>
<div className="contenedor-input">

<input
type="text"
className="input-text"
placeholder="Nombre Tarea..."
name="nombre"
value={nombre}
onChange={handleChange}
/>

</div>
 
<div className="contenedor-input">
<input
  type="submit"
  className="btn btn-primario btn-submit btn-block"
  value={tareaseleccionada ? "Editar Tarea": "Agregar Tarea"}
/>

</div>


</form>
   
   
{errortarea ? <p className="mensaje error">El Nombre de la Tarea es Obligatorio</p>:null}
</div>

    );
}


export default FormTarea;