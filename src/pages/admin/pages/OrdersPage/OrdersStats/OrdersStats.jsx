import StatCard from '../../DashboardPage/StatCard/StatCard';
import { LuTrendingUp, LuShoppingCart, LuUsers } from 'react-icons/lu';
import { stats } from '../OrderPageData';

const statConfig = {
    REVENUE: { icon: <LuTrendingUp />, label: 'REVENUE (24H)' },
    ACTIVE_ORDERS: { icon: <LuShoppingCart />, label: 'ACTIVE ORDERS' },
    NEW_CUSTOMERS: { icon: <LuUsers />, label: 'NEW CUSTOMERS' }
};
function OrdersStats() {
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

export default OrdersStats;
