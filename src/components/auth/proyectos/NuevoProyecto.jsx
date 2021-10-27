import React,{Fragment, useContext, useState} from 'react'
import proyectoContext from '../../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

  // obtener el state del formulario 
  const proyectosContext = useContext(proyectoContext)
   const {formulario,errorformulario ,mostrarFormulario,agregarProyecto, mostrarError} = proyectosContext;


  // state para proyecto 
const [proyecto,guardarProyecto] = useState({
  nombre :''
})


// extraemos nombre con distrocturing 
const {nombre} = proyecto;


const onChangeProyecto = e =>{
  guardarProyecto({
    ...proyecto,
    [e.target.name] : e.target.value
  })
}
// cuando el usuario envia un proyecto
const onSubmitProyecto = e =>{
  e.preventDefault();
 // validar el proyecto 
if(nombre === ''){
  mostrarError();
  return ;
}


 // agregar el state 
 agregarProyecto(proyecto)

 // reiniciar el form

guardarProyecto({
  nombre : ''
});

}
 // mosatrar el formulario 
 const onClickFormulario = ()=>{
  mostrarFormulario();
 }
    return (
        <Fragment>
     <button
     type="button"
     className="btn btn-block btn-primario"
     onClick={onClickFormulario}
     >Nuevo Proyecto</button>
     {formulario ? (
          <form
          className="formulario-nuevo-proyecto"
           onSubmit={onSubmitProyecto}
         >
         <input 
           type="text"
           className="input-text"
           placeholder="Nombre Proyecto"
           name="nombre"
           value={nombre}
           onChange={onChangeProyecto}
         />
         <input 
           type="submit"
           className="btn btn-primario btn-block"
           value="Agregar Proyecto"
         />
         
         </form>
       

     )

    : null  }
  
    {errorformulario ? <p className="mensaje error">El  Nombre Del Proyecto es Obligatorio</p> : null}

</Fragment>
      );
}
 
export default NuevoProyecto;