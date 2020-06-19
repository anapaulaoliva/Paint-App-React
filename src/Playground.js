import React, { useState } from 'react'

export default function Playground() {
  const [count, setCount] = useState(0)
  return (
    <div>{count}</div>
  )
}