import { createContext, useEffect, useState } from 'react';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [stats, setStats] = useState([]);
    const [recentOrders, setrecentOrders] = useState([]);
    const [chartData, , setchartData] = useState([]);
    const values = {
        stats,
        setStats,
        recentOrders,
        setrecentOrders,
        chartData
    };

    return (
        <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
    );
};
