import React,{useState} from 'react'

export default function User() {
    const [people,setPeople]=useState([])
  const [index,setIndex]=useState(0)
 

  async function getDog () {
    
    if(index<6){
    setIndex(index+1)
    try{
      const response = await fetch('https://reqres.in/api/users/')
      const data = await response.json()
      console.log(" data dot data hello12")
      console.log(data.data)
      setPeople(data.data[index])
}
  catch(error){
  console.log('i am from catch , ' ,error)
}
  
    }else{
      setIndex(0)
    }
   
}
  return (
    <div>
        <button style={{backgroundColor:"red",marginLeft:"120px"}}onClick={getDog}>click me</button>
 <div style={{marginTop:"20px"}} >

    <div style={{backgroundColor:"blue"}} >
    <img src={people.avatar} alt="image" style={{height:"300px"}}/>
    <p style={{backgroundColor:"yellow",textAlign:"center"}}>{people.email}</p>
    <h2 style={{backgroundColor:"yellow",textAlign:"center"}}>{people.first_name}</h2>
    <h3 style={{backgroundColor:"yellow",textAlign:"center"}}>{people.last_name}</h3>
    <p style={{backgroundColor:"yellow",textAlign:"center"}}>{people.id}</p>
    
    </div>
  
 </div>
    </div>
  )
}
