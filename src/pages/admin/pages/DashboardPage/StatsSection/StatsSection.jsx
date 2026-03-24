import StatCard from '../StatCard/StatCard';
import { LuTrendingUp, LuShoppingCart, LuUsers } from 'react-icons/lu';

export const statConfig = {
    TOTAL_SALES: {
        label: 'Total Sales',
        icon: <LuTrendingUp size={20} className='text-green-500' />,
    },
    ACTIVE_ORDERS: {
        label: 'Active Orders',
        icon: <LuShoppingCart size={20} className='text-green-500' />,
    },
    NEW_CUSTOMERS: {
        label: 'New Customers',
        icon: <LuUsers size={20} className='text-green-500' />,
    }
};

function StatsSection({ stats }) {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {stats.map((item) => {
                const config = statConfig[item.type];

                return (
                    <StatCard
                        key={item.type}
                        label={config.label}
                        icon={config.icon}
                        value={item.value}
                        change={item.change}
                    />
                );
            })}
        </div>
    );
}

export default StatsSection;
