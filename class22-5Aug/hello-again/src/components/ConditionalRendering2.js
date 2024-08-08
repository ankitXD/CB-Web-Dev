import React, { useState } from 'react'

export default function ConditionalRendering2() {
  const [isloggedIn, setIsloggedIn] = useState(false)
  const handleLogin = () => {
    setIsloggedIn(true)
  }
  if(isloggedIn){
    return <h1>Welcome user</h1>
  }
  else{
    return (
        <>
        <h1>Please Login</h1>
        <button onClick={handleLogin}>Login</button>
        </>
    )
  }
}
