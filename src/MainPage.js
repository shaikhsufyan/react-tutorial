import React from "react";
import Card from "./Card";
import "./index.css"
import img1 from "./images/m1.jpg"
import img2 from "./images/m2.jpg"
import img3 from "./images/m3.jpg"
import img4 from "./images/m4.jpg"
import img5 from "./images/m5.jpg"
import img6 from "./images/m6.jpg"


function MainPage(){
    return(
        <>
        <h1 className="heading">Card Gallery</h1>
        <div className="cardComp">
        <Card title="1" img={img1}/>
        <Card title="2" img={img2}/>
        <Card title="3" img={img3}/>
        <Card title="4" img={img4}/>
        <Card title="5" img={img5}/>
        <Card title="6" img={img6}/>
        </div>
         

        </>
    )
}
export default MainPage