import React from 'react'

import './Invitation.css'
export default function 
(props) {
  return (
    <div id="div1">
        <div> Subject : {props.subjectmy} </div>
        
 <div>To : {props.email}</div> 
  
 <div> Hi , {props.name} </div>
  
 <div>I am having a {props.party}next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them -
    <div>{props.name3} .</div> 
  
 <div>My house is behind our school , {props.field} .</div> 
  
  I hope you will come and see you soon .</div> 
  
 <div>from ,
  {props.name}</div> 

    </div>
  )
}
