import React,{useState,useEffect} from 'react'
import './App.css';


function App() {

  const [people,setPeople]=useState([])
  const [index,setIndex]=useState(0)

 useEffect(()=>{
   async function getDog () {
       try{
            const response = await fetch('https://reqres.in/api/users/')
            const data = await response.json()
            console.log(" data dot data hello12")
            console.log(data.data)
            setPeople(data.data)
            console.log(" hello1")
             console.log(people)
}
        catch(error){
        console.log('i am from catch , ' ,error)
}
}
getDog()
},[index])
const click=()=>{
  setIndex(index+1)
}
   

return (
<div>
  <button onClick={click}>click me</button>
 <div>
  {people.map(ele => (
    <div>
    <img src={ele.avatar} alt="image"/>
    <p>{ele.email}</p>
    </div>
  ))}
 </div>
  
   
  
     
    </div>
  );
}

export default App;
