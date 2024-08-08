 import React, { useEffect, useRef, useState } from 'react'
 
 const Ref = () => {
    const [val, setVal] = useState("");
    
    const refElem = useRef(0);
    console.log(refElem.current);

    const change = (event) =>{
        setVal(event.target.value);
        // refElem.current = refElem.current+1

    }
    const submit = () =>{
        // refElem.current.style.color="red";
        // refElem.current.style.backgroundColor="green";
        setVal("")
        refElem.current.focus()



    }

    // useEffect(()=>{
    //     setNum(num+1)
    // })
   return (
     <>
        <div className='container'>
            <h1>useRef Hoook :</h1>
            <input type='text' ref={refElem} value={val} onChange={change}/>
            <button onClick={submit}>Submit</button>
            {/* <h1>Count :{refElem.current} </h1> */}
        </div>
     </>
   )
 }
 
 export default Ref