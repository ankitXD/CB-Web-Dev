import React, { useState } from 'react'

export default function Counter() {
  const [counter,setCounter] = useState(0)
  function handlerIncr(){
    setCounter(counter+1)
  }
  function handlerDecr(){
    if(counter === 0) return
    setCounter(counter-1)
  }
  return (
    <div>
      <div>{counter}</div>
      <button onClick={handlerIncr}>Incr</button>
      <button onClick={handlerDecr}>Decr</button>
    </div>
  )
}
