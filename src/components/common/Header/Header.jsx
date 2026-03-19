import logo from '@assets/Images/logo.png';
import dataMenu from '@components/common/Header/contants.js';
import Menu from './Menu/Menu';
import SearchMenu from './SearchMenu.jsx/SearchMenu';
import { PiShoppingCartLight } from 'react-icons/pi';
import { PiHeartLight } from 'react-icons/pi';
import { useContext } from 'react';
import Button from '../Button/Button';
import { AuthContext } from '@contexts/AuthProvider';
import AuthModal from '../AuthModal/AuthModal';
import { SideBarContext } from '@contexts/SideBarProvider';
import ContentSideBar from '../ContentSideBar/ContentSideBar';
import useScrollHeader from '@/hooks/useScrollHeader';

function Header() {
    const { openLogin, user, setUser } = useContext(AuthContext);
    const { setIsOpen, setType, cartCount, wishlistCount } =
        useContext(SideBarContext);
    const showHeader = useScrollHeader();

    const logout = () => {
        setUser(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        localStorage.removeItem('expiresAt');
    };
    const handleOpenCartSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    return (
        <header
            className={`fixed w-full z-50 bg-white transition-all duration-300 
 ${showHeader ? 'top-0' : '-top-24'}`}
        >
            <div className='flex items-center justify-between px-10 h-20'>
                <div className='flex items-center gap-10'>
                    <img src={logo} alt='logo' className='w-32' />

                    <div className='flex gap-6'>
                        {dataMenu.map((menu, index) => (
                            <Menu
                                key={index}
                                content={menu.content}
                                href={menu.href}
                            />
                        ))}
                    </div>
                </div>

                <div className='flex items-center gap-6'>
                    <SearchMenu />

                    <div className='relative'>
                        <PiHeartLight
                            className='text-2xl cursor-pointer'
                            onClick={() => handleOpenCartSideBar('wishlist')}
                        />
                        {wishlistCount > 0 && (
                            <span className='absolute -top-1 -right-2 w-4 h-4 text-[10px] bg-primary text-white rounded-full flex items-center justify-center'>
                                {wishlistCount}
                            </span>
                        )}
                    </div>
                    <div className='relative'>
                        <PiShoppingCartLight
                            className='text-2xl cursor-pointer'
                            onClick={() => handleOpenCartSideBar('cart')}
                        />
                        {cartCount > 0 && (
                            <span className='absolute -top-1 -right-2 w-4 h-4 text-[10px] bg-primary text-white rounded-full flex items-center justify-center'>
                                {cartCount}
                            </span>
                        )}
                    </div>

                    <ContentSideBar />
                    {user ? (
                        <div className='relative group inline-block'>
                            <span className='font-semibold text-lime-300'>
                                Hello :
                                <span className='cursor-pointer ml-1'>
                                    {user}
                                </span>
                            </span>

                            <div className='absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'>
                                <button
                                    onClick={logout}
                                    className='block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg'
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Button
                            content={'Sign in'}
                            isPrimary={true}
                            onClick={openLogin}
                        />
                    )}
                    <AuthModal />
                </div>
            </div>
        </header>
    );
}

export default Header;
