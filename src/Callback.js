 import React, { useCallback, useState } from 'react'
import Call2 from './Call2'
 
 const Callback = () => {
    const [add, setAdd] = useState(0);
    const [data, setData] = useState([])

    const todos = useCallback(()=>{
        setData((pre)=>[...pre, "New Todo"])
    },[data])
 
   return (
    <>
        <Call2 todo={todos} data={data}/> <br/><br/>
        <button onClick={()=>setAdd(add+1)}>Addition</button>
        <h1>{add}</h1>
    </>
   )
 }
 
 export default Callback