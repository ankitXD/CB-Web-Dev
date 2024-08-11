import { useState } from "react"
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <p>Your clicked {count} times</p>
        <button onClick={()=> setCount(count+1)}>Click ME</button>
      </div>
    </>
  )
}

export default App
