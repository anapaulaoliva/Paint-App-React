import React, { useState, useEffect } from 'react'
import randomColor from 'randomcolor';

export default function Playground() {
  const [count, setCount] = useState(0)
  
  const [color, setColor] = useState(null);
  
  useEffect(() => {
    setColor(randomColor());
  }, [count]); //<- this parameter makes the conditional of which variable needs to change on the render so to make the useEffect based on that

  return (
    <div style = {{ borderTop: `10px solid ${color}`}}>
      {count}
      <button onClick={()=>
        setCount(currentCount => currentCount - 1)}>
        -
      </button>
      <button onClick={()=>
        setCount(currentCount => currentCount + 1)}>
        +
      </button>  
    </div>
  )
}

