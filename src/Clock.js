import React, { useState } from 'react'

const Clock = () => {
    const curTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(curTime);

    const update = () =>{
        const curTime = new Date().toLocaleTimeString();
        setTime(curTime)
    }

    setInterval(()=>{
        update()
    },1000)

  return (
    <> 
    <div className='container'>
        <h1 className='text'>Digital Clock</h1>
        <h1>{time}</h1>
    </div> 
    </>
  )
}

export default Clock