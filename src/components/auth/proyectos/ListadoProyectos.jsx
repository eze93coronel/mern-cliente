import React,{useContext,useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../../context/proyectos/proyectoContext';
import {CSSTransition,Transition, TransitionGroup} from 'react-transition-group'
const ListadoProyectos = () => {
 
  // exttraer proyectos de nivel inicial
  const proyectosContext = useContext(proyectoContext)
  const {proyectos,obtenerProyectos} = proyectosContext;

  //obtener proyectos cuando carag el componente
  
useEffect(()=>{
  obtenerProyectos();
  //eslint-disable-next-line
},[])




// revisar si proyectos tiene contenidos
if(proyectos.lenght === 0)  return null;


    return ( 
  <ul className="listado-proyectos">

   <TransitionGroup>

   {proyectos.map(proyecto=>(
     <CSSTransition
     key={proyecto.id}
     timeout={200}
     classNames="proyecto"
     >
        <Proyecto 
        proyecto={proyecto}
        />
        </CSSTransition>
    ))}
   </TransitionGroup>


  </ul>


     );
}
 
export default ListadoProyectos ;