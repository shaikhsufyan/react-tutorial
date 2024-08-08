 import React, { useState } from "react";
 import "./index.css"

 const Events = () =>{
    const [bg, setBg] = useState("red");
    const [text, setText] = useState("click Here")
    const changeColor = () =>{
        setBg("green")
        setText("Changed!!")
    }
    const back = () =>{
        setBg("red")
    }
     
    return(
        <>
        <div style={{backgroundColor:bg}} className="box">
            <button onClick={changeColor} onDoubleClick={back}  >{text}</button>
        </div>
        </>
    )
 }
 export default Events