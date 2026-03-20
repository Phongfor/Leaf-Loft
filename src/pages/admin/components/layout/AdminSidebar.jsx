import {
    LuLayoutDashboard,
    LuShoppingCart,
    LuPackage,
    LuUsers,
    LuChartBar,
    LuSettings,
    LuCircleHelp
} from 'react-icons/lu';

const navItems = [
    {
        icon: <LuLayoutDashboard size={18} />,
        label: 'Dashboard',
        id: 'dashboard'
    },
    { icon: <LuShoppingCart size={18} />, label: 'Orders', id: 'orders' },
    { icon: <LuPackage size={18} />, label: 'Products', id: 'inventory' },
    { icon: <LuUsers size={18} />, label: 'Customers', id: 'customers' },
    { icon: <LuChartBar size={18} />, label: 'Reports', id: 'reports' }
];

const supportItems = [
    { icon: <LuSettings size={18} />, label: 'Settings', id: 'settings' },
    { icon: <LuCircleHelp  size={18} />, label: 'Help Center', id: 'help' }
];

function AdminSidebar({ activePage, onNavigate }) {
    return (
        <aside className='w-56 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0 flex-shrink-0'>
            {/* Logo */}
            <div className='px-5 py-5 border-b border-gray-100'>
                <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center'>
                        <LuPackage size={16} className='text-white' />
                    </div>
                    <span className='font-bold text-gray-900 text-sm'>
                        ShopAdmin
                    </span>
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
                                    ? 'bg-green-400 text-white'
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
            <div className='mx-3 mb-4 p-3 bg-green-50 rounded-xl border border-green-100'>
                <p className='text-[10px] font-bold text-green-600 uppercase tracking-wide mb-0.5'>
                    Pro Plan
                </p>
                <p className='text-xs text-gray-500 mb-2'>
                    Get unlimited storage & insights.
                </p>
                <button className='w-full bg-green-400 hover:bg-green-500 text-white text-xs font-bold py-1.5 rounded-lg transition-colors'>
                    UPGRADE
                </button>
            </div>
        </aside>
    );
}

export default AdminSidebar;
