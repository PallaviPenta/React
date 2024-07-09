import React from 'react'
import { useNavigate } from 'react-router-dom';

function Invalid() {
    const navigate = useNavigate();
    const handleRedirect=()=>{
        navigate('/');
  return (
    <div>
      <h1>File not found</h1>
      <button onClick={handleRedirect}>Redirect</button>
    </div>
  )
}
}

export default Invalid
