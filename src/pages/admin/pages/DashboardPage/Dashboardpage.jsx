import { LuTrendingUp, LuShoppingCart, LuUsers } from 'react-icons/lu';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import StatsSection from './StatsSection/StatsSection';
import SalesChart from './SalesChart/SalesChart';
import PromoCard from './PromoCard/PromoCard';
import RecentOrdersTable from './RecentOrdersTable/RecentOrdersTable';
import { stats, chartData, recentOrders } from './dashboardData';


const statusStyle = {
    Shipped:   'bg-blue-100 text-blue-700',
    Pending:   'bg-yellow-100 text-yellow-700',
    Delivered: 'bg-green-100 text-green-700',
    Cancelled: 'bg-red-100 text-red-700',
};



function DashboardPage() {
    return (
        <div className='p-8 flex flex-col gap-6'>
            <StatsSection stats={stats} />

            <div className='grid grid-cols-[1fr_260px] gap-4'>
                <SalesChart data={chartData} />
                <PromoCard />
            </div>

            <RecentOrdersTable
                orders={recentOrders}
                statusStyle={statusStyle}
            />
        </div>
    );
}

export default DashboardPage;