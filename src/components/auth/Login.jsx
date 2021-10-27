import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  // state para inciar seciion 
  const [usuario,guardarUsuario]= useState({
      email : '',
      password: ''
  }); 

  // extraer del usuario 
  const {email,password} = usuario;


 const onChange = (e)=>{
       guardarUsuario({
           ...usuario,
           [e.target.name] : e.target.value
       })
 }

// cuando el usuario quiere uniciar secion 
 const onSubmit = e =>{
   e.preventDefault();


   // validar que no ala campos vacios 


   // las actons 

 }

    return ( 
<div className="form-usuario">
    <div className="contenedor-form sombra-dark">
   <h1>Iniciar Secion</h1>

     <form 
      onSubmit={onSubmit}
     >
   <div className="campo-form">
       <label htmlFor="email">Email</label>
       <input 
       type="email"
       id="email"
       name="email"
       placeholder="Tu Email"
       value={email}
       onChange={onChange}
       
       />

   </div>
   <div className="campo-form">
       <label htmlFor="password">Password</label>
       <input 
       type="password"
       id="password"
       name="password"
       placeholder="Tu Password"
       value={password}
       onChange={onChange}
       
       />

   </div>
   <div className="campo-form">

      <input type="submit" className="btn btn-primario btn-block"
       value="Toca para Iniciar"  />

   </div>

         
     </form>
     <Link to={'/nueva-cuenta'} className="enlace-cuenta">Obtener Cuenta</Link>
    </div>

</div>
          
     );
}
 
export default Login;