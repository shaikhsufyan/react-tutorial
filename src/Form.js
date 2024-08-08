 import React, { useState } from 'react'
 
 const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");


  const [show, setShow] = useState("");


  const getName = (event) =>{

    if(event.target.name == "firstname"){
      setFname(event.target.value);
    }
    if(event.target.name == "lastname"){
      setLname(event.target.value)

    }

     

  }

  const submitBtn = (event) =>{
    event.preventDefault();
    setShow(fname + lname)

  }
  console.log(show);
   return (
     <>
      <form onSubmit={submitBtn}>
      <h1>{show}</h1>
       <label>Enter FirstName</label>
        <input type='text' name='firstname' onChange={getName}  value={fname}/>
        <label>Enter LastName</label>
        <input type='text' name='lastname' onChange={getName} value={lname}    />
        <button type='submit'>Submit</button>
      </form>
     </>
   )
 }
 
 export default Form