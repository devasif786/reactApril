


import React,{useState} from 'react'

export default function AddDel() {
  const [nameadd, setNameadd]=useState()
  const [names,setName]=useState([]);

  function handleadd(){
    setName([...names,nameadd])
    setNameadd("")
  }
  function handleDelete(index){
setName(names.filter((na,i)=>i!=index))
  }

  return (
    <div style={{textAlign:"center"}}>

        <input type="text" value={nameadd} onChange={(e)=>{setNameadd(e.target.value)}}/>
        <button onClick={handleadd}>Add User</button>
        <ul type="none">
          {names.map((nam,i)=>
          <li key={i}>{nam}
           <button onClick={()=>handleDelete(i)}>XDelete</button>
          </li>
          )}
        </ul>
       
    </div>
  )
}
