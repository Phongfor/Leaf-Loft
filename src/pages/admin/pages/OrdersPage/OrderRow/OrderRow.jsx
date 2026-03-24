import { HiDotsHorizontal } from 'react-icons/hi';

const statusStyle = {
    Pending: 'bg-yellow-100 text-yellow-700',
    Shipped: 'bg-blue-100 text-blue-700',
    Delivered: 'bg-green-100 text-green-700',
    Cancelled: 'bg-red-100 text-red-700',
};

function OrderRow({ order }) {
    return (
        <tr className='border-t hover:bg-gray-50'>
            <td className='px-6 py-4 font-semibold'>{order.id}</td>

            <td className='px-6 py-4'>
                <div className='flex items-center gap-2'>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${order.color}`}>
                        {order.initials}
                    </div>
                    {order.customer}
                </div>
            </td>

            <td className='px-6 py-4'>{order.date}</td>

            <td className='px-6 py-4'>
                <span className={`px-2 py-1 rounded-full text-xs ${statusStyle[order.status]}`}>
                    {order.status}
                </span>
            </td>

            <td className='px-6 py-4 font-bold'>{order.total}</td>

            <td className='px-6 py-4'>
                <HiDotsHorizontal />
            </td>
        </tr>
    );
}

export default OrderRow;