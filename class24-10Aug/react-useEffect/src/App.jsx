import {useEffect, useState} from "react"
const App = () => {
  const [data, setData] = useState(0);
// useeffect-> 
  useEffect(() => {
    fetch('').then(response => response.json())
    .then(json=>setData(json))
  },[])
  return (
    <div>
      <h1>Console output</h1>
      <h2>{data}?data:{
        "Data is being Loaded "
      } </h2>
    </div>
  );
}

export default App;