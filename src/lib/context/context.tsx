'use client'

import { createContext, useContext, useEffect, useState } from "react";

interface AppContext {
    isLoggedIn: boolean;
    setIsLoggedIn: (bool: boolean) => void;
    employeeId: number;
    setEmployeeId: (id: number) => void;
}

const AppContext = createContext<AppContext>({
    isLoggedIn: false,
<<<<<<< HEAD
    setIsLoggedIn: (bool: boolean) => {},
=======
    setIsLoggedIn: (bool: boolean) => '',
    employeeId: 0,
    setEmployeeId: (id: number) => {}
>>>>>>> d04331a (going on vacation. enjoy :))
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [employeeId, setEmployeeId] = useState(0);

    useEffect(() => {
        const checkLogin = () => {
            let loggedIn = false;

            if(localStorage.getItem('user')) loggedIn = true;
            if(sessionStorage.getItem('user')) loggedIn = true;
        
            setIsLoggedIn(loggedIn);
        }

        checkLogin();
    }, [])

    return (
<<<<<<< HEAD
        <LoginContext.Provider value={ { isLoggedIn, setIsLoggedIn } }>
            {children}
        </LoginContext.Provider>
=======
        <AppContext.Provider value={ { isLoggedIn, setIsLoggedIn, employeeId, setEmployeeId } } />
>>>>>>> d04331a (going on vacation. enjoy :))
    )
}

export const useAppContext = () => useContext(AppContext);