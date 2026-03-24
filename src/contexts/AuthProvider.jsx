import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authMode, setAuthMode] = useState(null);
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState('user');
    const [loading, setLoading] = useState(true);

    const openLogin = () => setAuthMode('login');
    const openRegister = () => setAuthMode('register');
    const closeAuth = () => setAuthMode(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const role = localStorage.getItem('userRole');
        // const token = localStorage.getItem('accessToken');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        if(role) setUserRole(role)

        // if (token) {
        //     try {
        //         const decoded = jwtDecode(token);
        //         setUserRole(decoded.role);
        //     } catch (err) {
        //         console.error('Token không hợp lệ');
        //         localStorage.removeItem('accessToken');
        //     }
        // }

        setLoading(false);
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
        loading
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};
