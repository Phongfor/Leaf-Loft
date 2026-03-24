import OrderRow from "../OrderRow/OrderRow";


function OrdersTable({ orders }) {
    return (
        <div className='bg-white rounded-2xl shadow-sm overflow-hidden'>
            <table className='w-full'>
                <thead>
                    <tr className='text-xs text-gray-400 border-b'>
                        <th className='px-6 py-4 text-left'>Order ID</th>
                        <th className='px-6 py-4 text-left'>Customer</th>
                        <th className='px-6 py-4 text-left'>Date</th>
                        <th className='px-6 py-4 text-left'>Status</th>
                        <th className='px-6 py-4 text-left'>Total</th>
                        <th className='px-6 py-4 text-left'>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <OrderRow key={order.id} order={order} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrdersTable;