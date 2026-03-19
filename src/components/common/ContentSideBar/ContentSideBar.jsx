import { SideBarContext } from '@contexts/SideBarProvider';
import clsx from 'clsx';
import { useContext } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import LoginForm from '../LoginForm/LoginForm';
import WhislistSideBar from './WhislistSideBar/WhislistSideBar';
import CartSidebar from './CartSideBar.jsx/CartSideBar';

function ContentSideBar() {
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);

    const handleCloseCartSideBar = () => {
        setIsOpen(false);
    };
     const handleRenderContent = () => {
        switch (type) {   
            case 'wishlist':
                return <WhislistSideBar/>
            case 'cart':
                return <CartSidebar/>     
            default:
                return <LoginForm/>;
        }
    }
    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className='fixed inset-0 bg-black/40 z-50'
                    onClick={handleCloseCartSideBar}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={clsx(
                    'fixed top-0 right-0 h-full w-[420px] bg-[#f5f5f5] z-50 transition-transform duration-300',
                    isOpen ? 'translate-x-0' : 'translate-x-[120%]'
                )}
            >

                <IoCloseOutline
                    className='absolute text-lime-300 -left-15 top-6 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow cursor-pointer'
                    onClick={handleCloseCartSideBar}
                />

                 {handleRenderContent()}
                
            </div>
        </>
    );
}

export default ContentSideBar;
