// 3rd party components
import React, { createContext,useEffect,useState } from 'react'
import { isUser } from '../api/authAPI'

// in app components

export const AuthContext = createContext()

export default function AuthContextProvider(props) {

    const [userLogged, setUserLogged] = useState(false)
    const [userError, setUserError] = useState(null)

    
    useEffect(() => {
        const fetchUser = async () =>{
            const {status, error} = await isUser();
            setUserLogged(status);
            setUserError(error);
        }
        fetchUser();
    }, [])

    return (
        <AuthContext.Provider value={{userLogged, userError, setUserLogged}}>
            {props.children}
        </AuthContext.Provider>
    )
}