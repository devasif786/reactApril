import React, {  useState } from 'react'

export default function Quizresult(props) {
 
  return (
    <div>Quizresult
   {props.score>11?(<><h1 >Congratulation you are Pass</h1><div>your Score   {props.score}</div> 
    <div> total Score:{props.totalScore}</div>
   <button className="option-btn" onClick={props.tryAgain}>Try Again</button></>):(<>
    <div>your Score   {props.score}</div> 
    <div> total Score:{props.totalScore}</div>
   <button className="option-btn" onClick={props.tryAgain}>Try Again</button>
   </>)}
    
    </div>
  )
}
