import React from 'react'
import './Block.css'
export default function Block({mark,changeMark,position}) {
  return (
    <div className={`Block mark${mark}`} onClick={e=>changeMark(position)}></div>
  )
}
