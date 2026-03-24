import { useState } from 'react';
import Pagination from '@/components/common/Pagination/Pagination';
import OrdersStats from './OrdersStats/OrdersStats';
import OrdersHeader from './OrdersHeader/OrdersHeader';
import OrdersFilter from './OrdersFilter/OrdersFilter';
import RecentOrdersTable from '../DashboardPage/RecentOrdersTable/RecentOrdersTable';
import OrdersTable from './OrdersTable/OrdersTable';
const allOrders = [
    { id: '#ORD-8821', initials: 'JS', color: 'bg-yellow-200 text-yellow-700', customer: 'James Smith',   date: 'Oct 24, 2023', status: 'Pending',   total: '$249.00' },
    { id: '#ORD-8820', initials: 'AW', color: 'bg-blue-200 text-blue-700',     customer: 'Alice Wong',    date: 'Oct 23, 2023', status: 'Shipped',   total: '$1,120.50' },
    { id: '#ORD-8819', initials: 'RB', color: 'bg-green-200 text-green-700',   customer: 'Robert Brown',  date: 'Oct 22, 2023', status: 'Delivered', total: '$85.20' },
    { id: '#ORD-8818', initials: 'EM', color: 'bg-pink-200 text-pink-700',     customer: 'Elena Martinez',date: 'Oct 22, 2023', status: 'Delivered', total: '$532.00' },
    { id: '#ORD-8817', initials: 'DK', color: 'bg-purple-200 text-purple-700', customer: 'David Kim',     date: 'Oct 21, 2023', status: 'Pending',   total: '$12.99' },
];


function OrdersPage() {
    const [activeFilter, setActiveFilter] = useState('All Orders');
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 5;

    const filtered =
        activeFilter === 'All Orders'
            ? allOrders
            : allOrders.filter((o) => o.status === activeFilter);

    const startIndex = currentPage * itemsPerPage;
    const currentOrders = filtered.slice(startIndex, startIndex + itemsPerPage);

    const pageCount = Math.ceil(filtered.length / itemsPerPage);

    return (
        <div className='p-8 flex flex-col gap-6'>
            <OrdersHeader />

            <OrdersFilter
                activeFilter={activeFilter}
                setActiveFilter={(value) => {
                    setActiveFilter(value);
                    setCurrentPage(0);
                }}
            />

            <OrdersTable orders={currentOrders} />

            <Pagination
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
            <OrdersStats/>
        </div>
    );
}

export default OrdersPage;