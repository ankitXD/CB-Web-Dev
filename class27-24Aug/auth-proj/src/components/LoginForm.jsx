import { useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
const LoginForm = () => {
  const [username, setUsername] = useState('')
  const {login} = useContext(AuthContext);
  const handlesubmit = (e) => {
    e.preventDefault();
    login(username);
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} 
        placeholder="Enter Val" required />
         <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
