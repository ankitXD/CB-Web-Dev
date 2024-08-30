import { createContext, useState } from "react";
export const AuthContext = createContext();
export function AuthProvider() {
    const [user, setUser] = useState(null);
    const login = (username) => {
        setUser({username})
    }
    const logout = () => {
        setUser(null);
    }
    return (
        <AuthProvider.Provider value={{
            user, login, logout
        }} >
            
        </AuthProvider.Provider>
    )
}