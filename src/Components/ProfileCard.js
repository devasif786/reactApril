import React from 'react'
import './ProfileCard.css'
export default function ProfileCard(props) {
    const handelCling = () => {
        props.kuchv(props.name);
      };
  return (

    <div id="profilediv">
    <div>
        <img id="image"src={props.avatar}/>
    </div>
    <div id="desig">{props.designation}</div>
    <div id="nam">{props.name}</div>
    <div id="job">{props.jobDe}</div>
    <button id="btn" onClick={() => handelCling(props.name)}>{props.btntText}</button>
    </div>
  )
}
