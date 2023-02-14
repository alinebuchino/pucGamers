import React, { createContext, ReactNode, useContext, useState } from "react";

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
  singOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({});

function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<User>({} as User)

    return(
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export {AuthProvider, useAuth}