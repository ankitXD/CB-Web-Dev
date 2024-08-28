// eslint-disable-next-line no-unused-vars
import  React  from 'react'
import { useState, useMemo } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [othercount, setOtherCount] = useState(0);
  const expensiveCompute = (num) => {
    console.log("Calculating");
    return num * 2;
  }
  const memoval = useMemo(() => expensiveCompute(count), [count]);
  return (
    <div>
       <h1> Count:{count}</h1> 
       <h1> Calc:{memoval}</h1>
       <h1> otherCount:{othercount}</h1> 
       <h1> Calc:{memoval}</h1>
       
       <button onClick={()=>setCount(count+1)}> Inc Val</button>
       <button onClick={()=>setOtherCount(othercount+1)}> Inc  other Val</button> 
    </div>
  )
}

export default App