import React, {useState} from 'react';



export default function Counter (){

    const [count,setCount]=useState(1)

   function hI(){
    setCount(count+1)
   }

   function hD(){
    if(count>0){
    setCount(count-1)
    }
   }

    return (
           <div>
            <h2 style={{ marginTop:"300px"}}>Click Button Below {count}</h2>
          <button style={{color:"red",fontSize:"large",cursor:"pointer",marginRight:"14px"}}onClick={hI}>Increased ++</button>
          <button style={{color:"blue",fontSize:"large",cursor:"pointer"}} onClick={hD}>Decreased --</button>

           </div>
    )
}
