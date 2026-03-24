import {
    LuLayoutDashboard,
    LuShoppingCart,
    LuPackage,
    LuUsers,
    LuChartBar,
    LuSettings,
    LuCircleHelp
} from 'react-icons/lu';
import logo from '@assets/Images/logo.png';
import Button from '@/components/common/Button/Button';

const navItems = [
    { icon: <LuLayoutDashboard size={18} />,label: 'Dashboard',id: 'dashboard'},
    { icon: <LuShoppingCart size={18} />, label: 'Orders', id: 'orders' },
    { icon: <LuPackage size={18} />, label: 'Products', id: 'inventory' },
    { icon: <LuUsers size={18} />, label: 'Customers', id: 'customers' }
];

const supportItems = [
    { icon: <LuSettings size={18} />, label: 'Settings', id: 'settings' },
    { icon: <LuCircleHelp size={18} />, label: 'Help Center', id: 'help' }
];

function AdminSidebar({ activePage, onNavigate }) {
    return (
        <aside className='w-56 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0 flex-shrink-0'>
            {/* Logo */}
            <div className='px-5 py-5 border-b border-gray-100'>
                <div className='flex items-center gap-2'>
                    <img
                        src={logo}
                        alt='logo'
                        className='w-32 cursor-pointer'
                        onClick={() => navigate('/')}
                    />
                </div>
            </div>

            {/* Nav */}
            <nav className='flex-1 px-3 py-4 flex flex-col gap-1'>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium w-full text-left transition-colors
                            ${
                                activePage === item.id
                                    ? 'bg-second-light text-white'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                    >
                        {item.icon}
                        {item.label}
                    </button>
                ))}

                <p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mt-4 mb-1'>
                    Support
                </p>

                {supportItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className='flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium w-full text-left text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors'
                    >
                        {item.icon}
                        {item.label}
                    </button>
                ))}
            </nav>

            {/* Upgrade banner */}

            <div className='px-2 mb-5 '>
                <Button
                    content={'Log out'}
                    isPrimary={true}
                    className={'w-full'}
                />
            </div>
        </aside>
    );
}

export default AdminSidebar;
