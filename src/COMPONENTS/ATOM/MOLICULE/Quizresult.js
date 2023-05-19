import React, { useCallback, useState } from 'react'

export default function Quizresult(props) {
  // const [show,setshow]=useState(false)
  return (
    <div>Quizresult




    <div>your Score   {props.score}</div> 
    <div> total Score:{props.totalScore}</div>
   <button className="option-btn" onClick={props.tryAgain}>Try Again</button>
    </div>
  )
}
