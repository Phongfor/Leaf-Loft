import { useState } from 'react';
import { LuPlus, LuDownload, LuTrendingUp, LuShoppingCart, LuUsers } from 'react-icons/lu';
import { HiDotsHorizontal } from 'react-icons/hi';
const allOrders = [
    { id: '#ORD-8821', initials: 'JS', color: 'bg-yellow-200 text-yellow-700', customer: 'James Smith',   date: 'Oct 24, 2023', status: 'Pending',   total: '$249.00' },
    { id: '#ORD-8820', initials: 'AW', color: 'bg-blue-200 text-blue-700',     customer: 'Alice Wong',    date: 'Oct 23, 2023', status: 'Shipped',   total: '$1,120.50' },
    { id: '#ORD-8819', initials: 'RB', color: 'bg-green-200 text-green-700',   customer: 'Robert Brown',  date: 'Oct 22, 2023', status: 'Delivered', total: '$85.20' },
    { id: '#ORD-8818', initials: 'EM', color: 'bg-pink-200 text-pink-700',     customer: 'Elena Martinez',date: 'Oct 22, 2023', status: 'Delivered', total: '$532.00' },
    { id: '#ORD-8817', initials: 'DK', color: 'bg-purple-200 text-purple-700', customer: 'David Kim',     date: 'Oct 21, 2023', status: 'Pending',   total: '$12.99' },
];

const statusStyle = {
    Pending:   'bg-yellow-100 text-yellow-700',
    Shipped:   'bg-blue-100 text-blue-700',
    Delivered: 'bg-green-100 text-green-700',
    Cancelled: 'bg-red-100 text-red-700',
};

const statusFilters = ['All Orders', 'Pending', 'Shipped', 'Delivered', 'Cancelled'];

const bottomStats = [
    { icon: <LuTrendingUp size={16} className='text-green-500' />, label: 'REVENUE (24H)', value: '$14,290.00' },
    { icon: <LuShoppingCart size={16} className='text-green-500' />, label: 'ACTIVE ORDERS', value: '128' },
    { icon: <LuUsers size={16} className='text-green-500' />, label: 'NEW CUSTOMERS', value: '+24 Today' },
];

function OrdersPage() {
    const [activeFilter, setActiveFilter] = useState('All Orders');

    const filtered = activeFilter === 'All Orders'
        ? allOrders
        : allOrders.filter((o) => o.status === activeFilter);

    return (
        <div className='p-8 flex flex-col gap-6'>
            {/* Header banner */}
            <div className='bg-green-50 border border-green-100 rounded-2xl p-6 flex items-center justify-between'>
                <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-1'>Orders Management</h2>
                    <p className='text-sm text-gray-500 mb-4'>
                        Track, manage and fulfill your customer orders with ease.<br />
                        Real-time updates on delivery status.
                    </p>
                    <div className='flex gap-3'>
                        <button className='flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors'>
                            <LuPlus size={16} />
                            New Order
                        </button>
                        <button className='flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-xl transition-colors'>
                            <LuDownload size={16} />
                            Export CSV
                        </button>
                    </div>
                </div>
                <div className='text-6xl opacity-20'>🚚</div>
            </div>

            {/* Filter tabs */}
            <div>
                <p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3'>
                    Filter by Status
                </p>
                <div className='flex gap-2 flex-wrap'>
                    {statusFilters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                                ${activeFilter === f
                                    ? 'bg-green-400 text-white'
                                    : 'bg-white border border-gray-200 text-gray-600 hover:border-green-300'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className='bg-white rounded-2xl shadow-sm overflow-hidden'>
                <table className='w-full'>
                    <thead>
                        <tr className='text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100'>
                            <th className='px-6 py-4 text-left'>Order ID</th>
                            <th className='px-6 py-4 text-left'>Customer</th>
                            <th className='px-6 py-4 text-left'>Date</th>
                            <th className='px-6 py-4 text-left'>Status</th>
                            <th className='px-6 py-4 text-left'>Total</th>
                            <th className='px-6 py-4 text-left'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((order) => (
                            <tr key={order.id} className='border-t border-gray-50 hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4 text-sm font-semibold text-gray-700'>{order.id}</td>
                                <td className='px-6 py-4'>
                                    <div className='flex items-center gap-2'>
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${order.color}`}>
                                            {order.initials}
                                        </div>
                                        <span className='text-sm text-gray-800'>{order.customer}</span>
                                    </div>
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-500'>{order.date}</td>
                                <td className='px-6 py-4'>
                                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${statusStyle[order.status]}`}>
                                        • {order.status}
                                    </span>
                                </td>
                                <td className='px-6 py-4 text-sm font-bold text-gray-900'>{order.total}</td>
                                <td className='px-6 py-4'>
                                    <button className='text-gray-400 hover:text-gray-700 transition-colors'>
                                        <HiDotsHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='flex items-center justify-between px-6 py-4 border-t border-gray-100'>
                    <p className='text-xs text-gray-400'>Showing 1 to 5 of 42 results</p>
                    <div className='flex items-center gap-1'>
                        {['‹', 1, 2, 3, '›'].map((p, i) => (
                            <button key={i} className={`w-8 h-8 rounded-lg text-sm flex items-center justify-center transition-colors
                                ${p === 1 ? 'bg-green-400 text-white font-bold' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                                {p}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom stats */}
            <div className='grid grid-cols-3 gap-4'>
                {bottomStats.map((s) => (
                    <div key={s.label} className='bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4'>
                        <div className='w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center'>
                            {s.icon}
                        </div>
                        <div>
                            <p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>{s.label}</p>
                            <p className='text-lg font-bold text-gray-900 mt-0.5'>{s.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrdersPage;