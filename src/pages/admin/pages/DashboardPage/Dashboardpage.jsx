import { LuTrendingUp, LuShoppingCart, LuUsers } from 'react-icons/lu';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const stats = [
    { icon: <LuTrendingUp size={20} className='text-green-500' />, label: 'Total Sales', value: '$45,280.00', change: '+12.5%', bg: 'bg-green-50' },
    { icon: <LuShoppingCart size={20} className='text-green-500' />, label: 'Active Orders', value: '1,204', change: '+5.2%', bg: 'bg-green-50' },
    { icon: <LuUsers size={20} className='text-green-500' />, label: 'New Customers', value: '842', change: '+18.0%', bg: 'bg-green-50' },
];

const chartData = [
    { day: 'Mon', sales: 3200 },
    { day: 'Tue', sales: 4100 },
    { day: 'Wed', sales: 3700 },
    { day: 'Thu', sales: 5200 },
    { day: 'Fri', sales: 4800 },
    { day: 'Sat', sales: 6100 },
    { day: 'Sun', sales: 5500 },
];

const recentOrders = [
    { id: '#ORD-7721', customer: 'Sarah Jenkins', product: 'Neon Desk Lamp', amount: '$89.00', status: 'Shipped' },
    { id: '#ORD-7720', customer: 'Marcus Lee', product: 'Leather Wallet', amount: '$45.00', status: 'Pending' },
    { id: '#ORD-7719', customer: 'Priya Nair', product: 'Ceramic Mug Set', amount: '$32.00', status: 'Delivered' },
    { id: '#ORD-7718', customer: 'Tom Brewer', product: 'Oak Shelf', amount: '$210.00', status: 'Shipped' },
];

const statusStyle = {
    Shipped:   'bg-blue-100 text-blue-700',
    Pending:   'bg-yellow-100 text-yellow-700',
    Delivered: 'bg-green-100 text-green-700',
    Cancelled: 'bg-red-100 text-red-700',
};

function DashboardPage() {
    return (
        <div className='p-8 flex flex-col gap-6'>
            {/* Stat cards */}
            <div className='grid grid-cols-3 gap-4'>
                {stats.map((s) => (
                    <div key={s.label} className='bg-white rounded-2xl p-5 shadow-sm'>
                        <div className='flex items-center justify-between mb-3'>
                            <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center`}>
                                {s.icon}
                            </div>
                            <span className='text-xs font-bold text-green-500'>{s.change}</span>
                        </div>
                        <p className='text-xs text-gray-400 mb-1'>{s.label}</p>
                        <p className='text-2xl font-bold text-gray-900'>{s.value}</p>
                    </div>
                ))}
            </div>

            {/* Chart + promo */}
            <div className='grid grid-cols-[1fr_260px] gap-4'>
                <div className='bg-white rounded-2xl p-6 shadow-sm'>
                    <div className='flex items-center justify-between mb-1'>
                        <div>
                            <h3 className='font-bold text-gray-900'>Sales Trends</h3>
                            <p className='text-xs text-gray-400'>Revenue analytics for the past 7 days</p>
                        </div>
                        <div className='flex gap-2'>
                            <button className='text-xs border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors'>
                                Export CSV
                            </button>
                            <button className='text-xs bg-green-400 text-white px-3 py-1.5 rounded-lg hover:bg-green-500 transition-colors'>
                                View Details
                            </button>
                        </div>
                    </div>
                    <div className='h-48 mt-4'>
                        <ResponsiveContainer width='100%' height='100%'>
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id='salesGrad' x1='0' y1='0' x2='0' y2='1'>
                                        <stop offset='5%' stopColor='#4ade80' stopOpacity={0.3} />
                                        <stop offset='95%' stopColor='#4ade80' stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey='day' tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                                <YAxis hide />
                                <Tooltip contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: 12 }} />
                                <Area type='monotone' dataKey='sales' stroke='#4ade80' strokeWidth={2.5} fill='url(#salesGrad)' dot={{ r: 4, fill: '#4ade80', strokeWidth: 0 }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Promo card */}
                <div className='bg-green-400 rounded-2xl p-6 flex flex-col items-center justify-center text-center'>
                    <div className='w-20 h-20 rounded-full bg-yellow-200 mb-4 overflow-hidden flex items-center justify-center text-4xl'>
                        🧑‍💼
                    </div>
                    <h3 className='font-bold text-gray-900 text-lg leading-tight mb-2'>
                        Keep it up, Alex!
                    </h3>
                    <p className='text-xs text-gray-700 mb-4'>
                        Your shop performance is 15% better than last month. Time to scale?
                    </p>
                    <button className='bg-gray-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-700 transition-colors tracking-wide'>
                        VIEW STRATEGY
                    </button>
                </div>
            </div>

            {/* Recent orders */}
            <div className='bg-white rounded-2xl shadow-sm'>
                <div className='flex items-center justify-between px-6 py-4 border-b border-gray-100'>
                    <h3 className='font-bold text-gray-900'>Recent Orders</h3>
                    <button className='text-xs font-bold text-green-500 hover:text-green-600 transition-colors'>
                        See all activity
                    </button>
                </div>
                <table className='w-full'>
                    <thead>
                        <tr className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>
                            <th className='px-6 py-3 text-left'>Order ID</th>
                            <th className='px-6 py-3 text-left'>Customer</th>
                            <th className='px-6 py-3 text-left'>Product</th>
                            <th className='px-6 py-3 text-left'>Amount</th>
                            <th className='px-6 py-3 text-left'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrders.map((order) => (
                            <tr key={order.id} className='border-t border-gray-50 hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4 text-sm font-semibold text-gray-700'>{order.id}</td>
                                <td className='px-6 py-4'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600'>
                                            {order.customer[0]}
                                        </div>
                                        <span className='text-sm text-gray-800'>{order.customer}</span>
                                    </div>
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-600'>{order.product}</td>
                                <td className='px-6 py-4 text-sm font-semibold text-gray-900'>{order.amount}</td>
                                <td className='px-6 py-4'>
                                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${statusStyle[order.status]}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DashboardPage;