import React from 'react'
import Header from './Header'
import { useLocation,useParams } from 'react-router-dom'
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
 
const Login = () => {
  const {fname, lname} = useParams();
  const location = useLocation();
 
   const show =() =>{
    alert("Location")
   }
  return (
    <>
    <Header/>
    <h1>LOGIN PAGE IS HERE !</h1>
    <h1>HEllo To {fname} and {lname} </h1>
    <h1>Current Location : {location.pathname}</h1>
    <p>{location.pathname === "/login/CODE/sufyan" ? <button onClick={show}>Get URL</button> : null }</p>



    <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>




<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
    
 
    </>
  )
}

export default Login