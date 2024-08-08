import React from 'react'

// const MyFun = () =>{
//     let age = 10;
//     if(age>=18){
//         return (
//             <h1>Eligible For Vote</h1>
//           )

//     }else{
//         return (
//             <h1>Not Eligible For Vote</h1>
//           )
//     }

// }
const Condition = () => {
    let age = 2;
    let result;
    // if(age>=18){
    //     return (
    //         <h1>Eligible For Vote</h1>
    //       )

    // }else{
    //     return (
    //         <h1>Not Eligible For Vote</h1>
    //       )
    // }

    // if(age>18){
    //     result=<h1>You Can Vote</h1>
    // }else{
    //     result=<h1>You Can't Vote</h1>

    // }

    return(
        <>
        {/* <MyFun/> */}
            {/* <div>{result}</div> */}

           {/* ternary operator */}
            <div>{age>18 ? <h1>Eligible For Vote</h1> : <h1>Not Eligible For Vote</h1>}</div>
        </>
    )
   
}

export default Condition