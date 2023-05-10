import React,{useState} from 'react'
import style from './ImageChange.module.css'
export default function ImageChange() {
    const [img1, setimg]=useState([])
    const handleClick= async ()=>{
       let data= await fetch("https://dog.ceo/api/breeds/image/random")
       let res=await data.json()
       setimg(res.message)
    }
  return (
    <div className={style.main}>
        <div className={style.div1}><img src={img1}/></div>
        <div className={style.div2}><button onClick={handleClick}>Change Pic</button></div>
    </div>
  )
}
