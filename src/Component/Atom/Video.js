import React from 'react'

import { useNavigate } from 'react-router'

export default function Video() {
  const nav=useNavigate()
  function handleBack(){
   nav('../')
  }
  return (
    <>
     <div>Hello i am from Video</div>
     <button onClick={handleBack}>back</button>
    </>
   
  )
}
