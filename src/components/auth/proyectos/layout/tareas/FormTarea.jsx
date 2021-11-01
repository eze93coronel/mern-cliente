import React,{useContext} from 'react'
import proyectoContext from '../../../../../context/proyectos/proyectoContext';

const FormTarea = () => {


  // EXTRAER SI UN PROYECTO EST
  const proyectosContext = useContext(proyectoContext);
   const  {proyecto} = proyectosContext;


// si no ahi pt selecionado 
if(!proyecto)return null

   // array distryoring para extraer el pt actual 
   const [proyectoActual] = proyecto;

    return (  
<div className="formulario">

<form>
<div className="contenedor-input">

<input
type="text"
className="input-text"
placeholder="Nombre Tarea..."
name="nombre"
/>

</div>
 
<div className="contenedor-input">
<input
  type="submit"
  className="btn btn-primario btn-submit btn-block"
  value="Agregar Tarea"
/>

</div>


</form>

</div>

    );
}


export default FormTarea;