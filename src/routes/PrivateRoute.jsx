import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '@contexts/AuthProvider';

function PrivateRoute({ children, role }) {
    const { user, userRole, loading } = useContext(AuthContext);

    // ✅ chờ load xong mới kiểm tra
    if (loading) return <div>Loading...</div>;

    if (!user) return <Navigate to='/' replace />;
    if (role && userRole !== role) return <Navigate to='/' replace />;

    return children;
}

export default PrivateRoute;