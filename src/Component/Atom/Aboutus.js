import React from 'react'


import { useNavigate } from 'react-router'

export default function Aboutus() {
  const nav=useNavigate()
  function handleBack(){
   nav('../')
  }
  return (
    <>
     <div> Hello chief i am Aboutus</div>
    <button onClick={handleBack}>Back</button>
    
    </>
   
  )
}
