import React,{useState,useEffect} from "react";

function App() {

const [data , setData]=useState([])
  useEffect (()=>{
    async function data(){
    const response= await fetch("https://dog.ceo/api/breeds/image/random")
    const jason=await response.json()
    console.log("hello")
    console.log(jason)
    setData(jason)
    }
    data();
  },[])




  return (
    <div className="App">
<img src={data.message}/>
  
    </div>
  );
}

export default App;
