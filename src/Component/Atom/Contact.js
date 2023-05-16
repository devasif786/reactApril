import React from 'react'



import { useNavigate } from 'react-router'



export default function Contact() {
  const nav=useNavigate()
  function handleBack(){
   nav('../')
  }
  return (
    <>
      <div>Hello i am from Contact</div>
    <button onClick={handleBack}>Back</button></>
  
  )
}
