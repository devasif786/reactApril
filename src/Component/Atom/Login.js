import React from 'react'




import { useNavigate } from 'react-router'
export default function Login() {
    const navi=useNavigate()
    function handleBack(){
        navi('../')
    }
  return (
    <div style={{textAlign:"center"}}>Thanks for Login
 
        <button onClick={handleBack}> Bavk to Main page</button>
    </div>
  )
}
