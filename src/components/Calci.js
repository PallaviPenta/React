import React from 'react'
import './Calci.css';

function Calci() {
    const [first,setFirst] = React.useState(0)
    const [second,setSecond] = React.useState(0)
    const [result,setResult] = React.useState(0)
    const handleCal=()=>{
        const op = document.getElementById("op").value;
        if(op === '+'){
            setResult(first+second)
        }
        else if(op === '-'){
            setResult(first-second)
        }
        else if(op === '*'){
            setResult(first*second)
        }
        else{
            setResult(first/second)
        }
        
    }
  return (
    <div className='calci'>
      <h1>Calculator</h1>
      <input type="text" placeholder="Enter value" onChange={(e)=>setFirst(parseInt(e.target.value))}></input>
      <input type="text" placeholder="Enter value" onChange={(e)=>setSecond(parseInt(e.target.value))}></input>
      <select id="op">
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <button onClick={handleCal}>=</button>
      <p>{result}</p>
    </div>
  )
}

export default Calci
