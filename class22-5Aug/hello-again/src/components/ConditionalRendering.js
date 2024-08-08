import React, { useState } from 'react'

export default function ConditionalRendering() {
  const [isloggedIn, setIsloggedIn] = useState(false)
  const handleLogin = () => {
    setIsloggedIn(true)
  }
  return (
    <div>
      {
        isloggedIn ? <h1>Welcome user </h1>
        :
        <>
        <h2> Please Log In </h2>
        <button onClick={handleLogin}>Log In</button>
        </>
      }
    </div>
  )
}
