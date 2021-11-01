import React,{useReducer} from 'react'
import uuid from 'uuid/package.json'

import proyectoContext from './proyectoContext'; 
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO,OBTENER_PROYECTOS,AGREGAR_PROYECTOS ,VALIDAR_FORMULARIO,PROYECTO_ACTUAL,ELIMINAR_PROYECTO} from '../../types';




const ProyectoState = props =>{

    const proyectos = [
        {id:1,nombre : 'Tienda Virtual'},
        {id: 2,nombre:'Intranet'},
        {id: 3,nombre : 'Diseño de Sitio Web'},
        {id: 4,nombre : 'MERN'}
    
        
    
    ]
    const initialState = {

    proyectos :[],
        formulario : false,
        errorformulario : false,
        proyecto : null
    }

    // dispatch para ejecutar las aacciones 
    const [state,dispatch] = useReducer(proyectoReducer,initialState)


    // serrie de funciones paar el crud 
  const mostrarFormulario = ()=>{
      dispatch({
          type: FORMULARIO_PROYECTO
      })
  } 

// obtener los ptoyectos 

const obtenerProyectos =() =>{
    dispatch({
        type:OBTENER_PROYECTOS,
        payload: proyectos
    })
}

//agregar nuevo proyecto 
const agregarProyecto = proyecto =>{
       proyecto.id = uuid;

       // insertatr proyecto enn el state 

       dispatch({
           type : AGREGAR_PROYECTOS,
           payload: proyecto
       })
}

// VALIDA EL FORM POR ERROR 
const mostrarError = ()=>{
    dispatch({
        type : VALIDAR_FORMULARIO
    })
}
// selec el proyecto que el us dio click 

const proyectoActual = proyectoId =>{
    dispatch({
        type : PROYECTO_ACTUAL,
        payload : proyectoId
    })
}
//ELIMINA UN  PROYECTO 
const eliminarProyecto = proyectoId =>{
    dispatch({
        type:ELIMINAR_PROYECTO,
        payload: proyectoId
    })
}

return (
    
    
    <proyectoContext.Provider
  
        value={{
            proyectos: state.proyectos,
            formulario :state.formulario,
            errorformulario : state.errorformulario,
            proyecto : state.proyecto,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            mostrarError,
            proyectoActual,
            eliminarProyecto
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;