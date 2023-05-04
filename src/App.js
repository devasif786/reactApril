import React,{useState,useEffect} from "react";
import axios from "axios";
function App() {

const [data , setData]=useState([])
  useEffect (()=>{
    async function data(){
    const response= await axios.get("https://dog.ceo/api/breeds/image/random")
    
    console.log("hello")
    console.log(response)
    setData(response.data)
    }
    data();
  },[])




  return (
    <div className="App" >
<img height ="300px"width="300px"src={data.message}/>
  
    </div>
  );
}

export default App;
