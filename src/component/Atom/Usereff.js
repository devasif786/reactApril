import React,{useRef} from 'react'

export default function Usereff() {
    const inputRef=useRef(null)
    const handleClick=()=>{
     inputRef.current.click()
    }
  return (
    <div style={{margin:"300px"}}>
        <input type="file" ref={inputRef}/>
        <button onClick={handleClick}>Pick the file</button>
    </div>
  )
}
