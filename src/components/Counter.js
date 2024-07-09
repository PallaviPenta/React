import React from 'react'

function Counter() {
    const [count,setCount] = React.useState(0)
    const [error,setError] = React.useState('')

    const handleDecrease=()=>{
        if(count>0){
            setCount(count-1);
            setError('');
        }
        else{
            setError('Cannot go below 0');
        }
    }

    const handleIncrease=()=>{
        setCount(count+1);
        setError('');
    }

    const handleReset=()=>{
        setCount(0);
        setError('');
    }
  return (
    <div>
      <h1>This current value is {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
    <h2>{error}</h2>
    </div>
  )
}

export default Counter
