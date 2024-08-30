import  { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
export const UserProfile = () => {
    const { user, logout } = useContext(AuthContext);
    if (!user) return null;
    return (
    <>
        <div>UserProfile</div>
        <h1>Welcome :{user.username}</h1>
        <button onClick={logout}>  Logout</button>
    </>

  )
}