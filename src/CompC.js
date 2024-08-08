import React, { useContext } from 'react'
import { firstName,lastName } from './App'
 

const CompC = () => {
    const data = useContext(firstName)
    const lName = useContext(lastName)

  return (
   <>

   <h1>{data}</h1>
   <h1>{lName}</h1>

    {/* <firstName.Consumer>
        {
            function(name){
                return(
                     <lastName.Consumer>
                     {function(lName){
                        return  <h1>My Name is {name} {lName}</h1>
                    }}
                     </lastName.Consumer>
                     
                )

                 
            }
        }
    </firstName.Consumer> */}
   </>
  )
}

export default CompC