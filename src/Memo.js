
 import React, { useMemo, useState } from 'react';

 const Memo = () => {
    const [add, setAdd] = useState(0);
    const [state, setState] = useState(false)
    const addition = () =>{
        setAdd(add+1)
     }

     function count(add){
        console.log("Function Calling",add);
        for(let i=0; i<=100000000; i++){};
        return add
     }

     let number  = useMemo(()=>{
         return count(add)
     },[add])
      
   return (
     <>
        <div>
            <button onClick={addition}>Addition</button>
            <h1>{number}</h1>

            <button onClick={()=>setState(!state)}>Please Click</button>
            <h1>{state ? "You Clicked" : "Please Click"}</h1>
        </div>
     </>
   )
 }
 
 export default Memo