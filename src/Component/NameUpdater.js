import React, {useState}from 'react'

export default function 
() {

    const [name ,setName]=useState("")
    const [name1,setName1]=useState("Hi my name is****")
   const onc=(e)=>{
     setName(e.target.value)
   }
   const onC=()=>{
      setName1(`Hi my name is ${name}`);
      setName(" ")
   }
   return (
     <div>
     <input type="text" placeholder="Enter your name" value={name} style={{margin:"40px"}}onChange={onc}/>
     <button onClick={onC}>Submit</button>
     <div>{name1}</div>
 
     </div>
  )
}
