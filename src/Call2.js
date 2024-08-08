import {React, memo} from 'react'

const Call2 = ({todo, data}) => {
    console.log("todo function");
  return (
    
    <>
        {
            data.map((curVal, index)=>{
                return <h1 key={index}>{curVal+index}</h1>
            })
        }
        <button onClick={todo}>Add Todo</button>
    </>
  )
}

export default memo(Call2)