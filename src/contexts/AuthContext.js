// 3rd party components
import React, { createContext,useEffect,useState } from 'react'

// in app components



export const AuthContext = createContext()

export default function AuthContextProvider(props) {
    const [userLogged, setUserLogged] = useState(false)

    return (
        <AuthContext.Provider value={{userLogged,setUserLogged}}>
            {props.children}
        </AuthContext.Provider>
    )
}