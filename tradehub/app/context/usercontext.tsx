"use client"
import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { userDataType } from "../types";
import jwt from "jsonwebtoken";

interface UserContextType {
    userData: userDataType;
    // setUserData: (userData: userDataType) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {

    const [userData, setUserData] = useState<userDataType>(null);
    
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token) {
            try {
                const secretKey = 'DPz%tF9RvgyxK^vDK$hkFtaw@%SZJr6NcZoxwUp#wKU2tv3N^NPOZWWr&I8yPg$3nGGaqkxpTSE9R&g1wte^wpFdds%sq6QnsO2'
                const decode = jwt.verify(token, secretKey) as userDataType;
                setUserData(decode);
            } catch(error) {
                console.error("Token verification failed:", error);
                localStorage.clear();
            }
        }
    }, [])

    return (
        <UserContext.Provider value={{ userData }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);