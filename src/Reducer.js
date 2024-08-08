 import React, { useReducer } from 'react'
 let initialState = 0;

 const reducer = (curState, action) =>{
    console.log(curState, action);
    if(action.type === "INCREMENT"){
        return curState+1
    }
    if(action.type === "DECREMENT"){
        return curState-1
    }
    
    return curState

 }
 const Reducer = () => {
    const [curState, dispatch] = useReducer(reducer, initialState);
   return (
     <>
        <div className='container'>
            <h1>{curState}</h1>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>

        </div>
     </>
   )
 }
 
 export default Reducer