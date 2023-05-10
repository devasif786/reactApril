import React from 'react'
import style from './Card.module.css'

export default function Card(props) {
    const {id,email,first_name,last_name,avatar}=props.item
  return (
    <div className={style.Card}>
      
        <img className={style.img}src={avatar}/>
        {/* <p className={style.id}>{id}</p> */}
        <h4 className={style.email}>{email}</h4>
        <p  className={style.email1}>{first_name}</p>
        <p  className={style.email2}>{last_name}</p>
        
        
    </div>
  )
}
