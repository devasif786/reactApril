import React,{useState} from 'react'
import axios from 'axios'
import style from './Search.module.css'
import {FaSearch} from 'react-icons/fa'
import {BiMicrophone} from 'react-icons/bi'
//BiMicrophone
export default function Search() {
    const[data, setData]=useState([])
    const[input,setInput]=useState("")
    const fetchData= (value)=>{
        fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states").then((response)=>response.json()).then((json)=>{const result=json.states.filter((staName)=>{
            return value && staName.state_name && staName.state_name.toLowerCase().includes(value)|| value && staName.state_name.toUpperCase().includes(value)
        })
        console.log(result)
       setData(result)
      })
      
    }
   
    function handleText(value){
        setInput(value)
        fetchData(value)
    }
    function handleData(value1){
      setInput(value1)
      setData([])
    }
  return (
    <>
    <div className={style.inputWrapper}>
   <FaSearch id={style.searchIcon}/>
   <input type="text" placeholder='Type Your Text'
   value={input} onChange={(e)=>handleText(e.target.value)}
   />
   <BiMicrophone id={style.searchIcon1}/>
    </div>
    <div className={style.Res}>
{data.map((name,id)=>
<h6 key={id} type="submit" onClick={(e)=>handleData(name.state_name)}>   <FaSearch id={style.searchIcon}/>{name.state_name}</h6>)}

    </div>
    </>
  )
}
