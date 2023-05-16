import React from 'react'






import { useNavigate } from 'react-router'


 
   
   
     
export default function Project() {
  const nav=useNavigate()
  function handleBack(){
   nav('../')
  }
  return (
    <>
    <div> Hello i am Project</div>
    <button onClick={handleBack}>Back</button></>
  )
}
