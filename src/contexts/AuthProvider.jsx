import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authMode, setAuthMode] = useState(null);
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState('user');
    const [loading, setLoading] = useState(true); // ✅ thêm

    const openLogin = () => setAuthMode('login');
    const openRegister = () => setAuthMode('register');
    const closeAuth = () => setAuthMode(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));

        const storedRole = localStorage.getItem('userRole');
        if (storedRole) setUserRole(storedRole);

        setLoading(false); // ✅ xong mới cho render
    }, []);

    const values = {
        authMode,
        openLogin,
        openRegister,
        closeAuth,
        user,
        setUser,
        userRole,
        setUserRole,
        loading, // ✅ expose ra
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};