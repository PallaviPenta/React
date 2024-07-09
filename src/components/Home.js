import React from 'react'
import './Calci.css';

function Home() {
    const [first,setFirst] = React.useState(0)
    const [second,setSecond] = React.useState(0)
    const [result,setResult] = React.useState(0)

    const handleAdd=()=>{
        setResult(first+second);
    }
    const handleSub=()=>{
        setResult(first-second);
    }
    const handleMul=()=>{
        setResult(first*second);
    }
    const handleDiv=()=>{
        setResult(first/second);

    }

  return (
    <div className='cal'>
      <h1>Calculator</h1>
      <input type="text" placeholder="Enter value" onChange={(e)=>setFirst(parseInt(e.target.value))}></input>
      <input type="text" placeholder="Enter value" onChange={(e)=>setSecond(parseInt(e.target.value))}></input>
      <div className='operators'>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <button onClick={handleMul}>*</button>
      <button onClick={handleDiv}>/</button>
      </div>
      <p>{result}</p>
    </div>
  )
}
export default Home
