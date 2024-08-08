import React from "react";
import { NavLink, useNavigate} from "react-router-dom";
import Header from "./Header";
 

function About(){
    const naviagte = useNavigate();

    const goContact = () =>{
        naviagte("/")
    }
    return(
        <>   
        <Header/>
        <h1>ABOUT COMPONENTs</h1>
        <button onClick={goContact}>Go To HOME</button>
         
        </>
    )
}
export default About;
 