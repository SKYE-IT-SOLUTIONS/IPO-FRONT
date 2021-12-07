// 3rd party components
import React, { createContext,useEffect,useState } from 'react'
import { isUser } from '../api/auth/authAPI'

// in app components

export const AuthContext = createContext()

export default function AuthContextProvider(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userError, setUserError] = useState(null)

    
    useEffect(() => {
        const fetchUser = async () =>{
            const {status, error} = await isUser();
            setIsAuthenticated(status);
            setUserError(error);
        }
        fetchUser();
    }, [])

    return (
        <AuthContext.Provider value={{isAuthenticated, userError, setIsAuthenticated}}>
            {props.children}
        </AuthContext.Provider>
    )
}