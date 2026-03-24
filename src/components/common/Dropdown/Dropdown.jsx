import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@contexts/AuthProvider';

function Dropdown() {
    const navigate = useNavigate();
    const { setUser, userRole,setUserRole } = useContext(AuthContext);

    const logout = () => {
        setUser(null);
        setUserRole(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        localStorage.removeItem('userRole');
        localStorage.removeItem('expiresAt');
    };

    const menuItems = [
        { label: 'My Orders', path: '/my-orders', show: true },
        { label: 'Dashboard', path: '/admin', show: userRole === 'admin' },
    ];

    return (
        <div className='absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'>
            {menuItems
                .filter((item) => item.show)
                .map((item) => (
                    <button
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        className='block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm first:rounded-t-lg'
                    >
                        {item.label}
                    </button>
                ))}

            <button
                onClick={logout}
                className='block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm rounded-b-lg border-t border-gray-100'
            >
                Logout
            </button>
        </div>
    );
}

export default Dropdown;