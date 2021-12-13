import React,{useReducer} from 'react';

import TareaContext from './tareaContext';

import TareaReducer from './tareaReducer';
import uuid from 'uuid/package.json';

import { TAREAS_PROYECTO,AGREGAR_TAREA,VALIDAR_TAREA, ELIMINAR_TAREA,ESTADO_TAREA,TAREA_ACTUAL,ACTUALIZAR_TAREA,LIMPIAR_TAREA} from '../../types/index';

const TareaState = props =>{

    const initialState ={

        tareas : [
            {nombre : 'Elegir Plataforma', estado : true, proyectoId : 1},
        {id : 1, nombre : 'Elegir Colores', estado : false,proyectoId : 2},
        { id : 2,nombre : 'Elegir Plataforma de pago', estado : false,proyectoId : 3},
        {id : 3,nombre : 'Elegir Hosting', estado : true,proyectoId : 4},
        {id : 4,nombre : 'Elegir Plataforma', estado : true, proyectoId : 1},
        {id : 5,nombre : 'Elegir Colores', estado : false,proyectoId : 2},
        {id : 6,nombre : 'Elegir Plataforma de pago', estado : false,proyectoId : 3},
        {id : 7,nombre : 'Elegir Hosting', estado : true,proyectoId : 4}

        ],
    tareasproyecto : null,
    errortarea : false,
    tareaseleccionada : null

    }

    //crear dispatch y ststae 

    const [state,dispatch] = useReducer(TareaReducer,initialState);

// obtener tareas de un proyecto 


const obtenerTareas = proyectoId =>{
    dispatch({
        type: TAREAS_PROYECTO,
        payload : proyectoId
    })
}
//AGREAGR TAREA A UN PROYECTO SELECCIONADO 
  const agregarTarea = tarea =>{
      tarea.id = uuid;
      dispatch({
          type : AGREGAR_TAREA,
          payload : tarea
      })
  }

 //VALIDA Y MUESTRA UN ERROR EN CASO QUE SEA NECESARIO 
 const validarTarea = ()=>{
     dispatch({
         type : VALIDAR_TAREA,
     })
 }
 //ELIMINAR TAREA POR ID 
 
 const eliminarTarea = id =>{
     dispatch({
         type: ELIMINAR_TAREA,
         payload : id 
     })
 }
 //CAMBIa el estADO DE UNA TAREA 
 
 const cambiaEstadoTarea = tarea =>{
      dispatch({
          type: ESTADO_TAREA,
          payload: tarea
      })
 }
// MODIFIACRA O EDIATRA UNA TAREA ACTUAL

const guardarTareaActual = tarea =>{
    dispatch({
        type : TAREA_ACTUAL,
        payload : tarea
    })
}
//EDITA MODIDFICA UNA TAREA 
const actualizarTarea = tarea =>{
    dispatch({
        type: ACTUALIZAR_TAREA,
        payload: tarea
    })
}
 // SLELCIONAMOS Y LIMPIAMOS UNA TAREA DEL FORM 
 
 const limpiarTarea = ()=>{
     dispatch({
         type: LIMPIAR_TAREA
     })
 }

return(
        <TareaContext.Provider
        value={{
            tareas : state.tareas,
            tareasproyecto : state.tareasproyecto,
            errortarea : state.errortarea,
            tareaseleccionada : state.tareaseleccionada,
          obtenerTareas,
          agregarTarea,
          validarTarea,
          eliminarTarea,
          cambiaEstadoTarea,
          guardarTareaActual,
          actualizarTarea,
          limpiarTarea
        }}
        >
        {props.children}
        </TareaContext.Provider>
         
        )
}

export default TareaState;