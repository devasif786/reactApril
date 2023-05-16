import React from 'react'




import { useNavigate } from 'react-router'

export default function Home() {
  const nav=useNavigate()
  function handleBack(){
   nav('../')
  }
  return (
    <>
     <div>Hello chief i am from home</div>
     <button onClick={handleBack}>Back</button></>
   
  )
}
