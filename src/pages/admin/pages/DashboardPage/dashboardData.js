import { LuTrendingUp, LuShoppingCart, LuUsers } from 'react-icons/lu';

export const stats = [
    {
        type: 'TOTAL_SALES',
        value: 45280,
        change: 12.5
    },
    {
        type: 'ACTIVE_ORDERS',
        value: 1204,
        change: 5.2
    },
    {
        type: 'NEW_CUSTOMERS',
        value: 842,
        change: 18
    }
];
export const chartData = [
    { day: 'Mon', sales: 3200 },
    { day: 'Tue', sales: 4100 },
    { day: 'Wed', sales: 3700 },
    { day: 'Thu', sales: 5200 },
    { day: 'Fri', sales: 4800 },
    { day: 'Sat', sales: 6100 },
    { day: 'Sun', sales: 5500 }
];

export const recentOrders = [
    {
        id: '#ORD-7721',
        customer: 'Sarah Jenkins',
        product: 'Neon Desk Lamp',
        amount: '$89.00',
        status: 'Shipped'
    },
    {
        id: '#ORD-7720',
        customer: 'Marcus Lee',
        product: 'Leather Wallet',
        amount: '$45.00',
        status: 'Pending'
    },
    {
        id: '#ORD-7719',
        customer: 'Priya Nair',
        product: 'Ceramic Mug Set',
        amount: '$32.00',
        status: 'Delivered'
    },
    {
        id: '#ORD-7718',
        customer: 'Tom Brewer',
        product: 'Oak Shelf',
        amount: '$210.00',
        status: 'Shipped'
    }
];
