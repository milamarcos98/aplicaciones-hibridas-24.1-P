import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie"
import {jwtDecode} from "jwt-decode"

export const AuthContext = createContext();

export const AuthConextProvider = ({children}) => {

    const [user, setUser ] = useState(null)

    const auth = Cookies.get("jwToken") || null;

    useEffect(() => {
        if(auth){
            const decoded = jwtDecode(auth);
            setUser({name: decoded.usuario.name, id: decoded.usuario.id})
        }

    },[])


    return (
        <AuthContext.Provider value={{user, setUser, auth}}>
            {children}
        </AuthContext.Provider>
    )
}