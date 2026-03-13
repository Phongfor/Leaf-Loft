import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authMode, setAuthMode] = useState(null);
    const [user, setUser] = useState(null);

    const openLogin = () => setAuthMode('login');
    const openRegister = () => setAuthMode('register');
    const closeAuth = () => setAuthMode(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const data = JSON.parse(storedUser);
            setUser(data);
        }
    }, []);

    const values = {
        authMode,
        openLogin,
        openRegister,
        closeAuth,
        user,
        setUser
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};
