import React ,{useState}from 'react'

export default function LuckyNumber() {

 const [luckyNum, setluckyNum] = useState(Math.floor(Math.random() * 100) + 1);
const [data,setData]=useState()
const[count,setCount]=useState(1)

const type=(e)=>{
   

setData(e.target.value)
}

let flag=false
const hl=()=>{
     setCount(count+1)
     
    if(data<luckyNum){
      alert("Your num is smaller than the lucky num")   
    }
    else if(data>luckyNum){
      alert("Your num is greater than the lucky num")
        }
    else {
      flag=true
      
      alert(`Congratulations!!! You guessed the Lucky Number i.e., ${luckyNum}.You found the Num in ${count} times`)
    }
    if(flag==true){
      setCount(0)
      setluckyNum((Math.floor(Math.random() * 100) + 1))
    }
    setData("")
   
  }

const check=()=>{
    alert(luckyNum)
}

  return (
    <div style={{margin:"20%"}}>LuckyNumber=



        <input type="number" placeholder="Guess your lucky number" value={data} onChange={type}/>
        <button onClick={hl}>Submit</button>
        <button onClick={check}>Check Lucky Number</button>
    </div>
  )
}
