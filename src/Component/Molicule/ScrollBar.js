import React,{useState,useEffect} from 'react'
import Card from '../atom/Card'
import style1 from './ScrollBar.module.css'

export default function ScrollBar
() {
    const [data , setData]=useState([])
  useEffect (()=>{
    async function data(){
    const response= await fetch("https://reqres.in/api/users/")
    const jason=await response.json()
    console.log("hello")
    console.log(jason.data)
    setData(jason.data)

   
    }
    data();
  },[])
  return (
    <div className={style1.wrapper}>
        {
            data.map((ele)=>(
                <Card key={ele.id} item={ele}/>
            ))
          
        }
         {
            data.map((ele)=>(
                <Card key={ele.id} item={ele}/>
            ))
          
        }
        
    </div>
  )
}
