function RecentOrdersTable({ orders, statusStyle }) {
    return (
        <div className='bg-white rounded-2xl shadow-sm'>
            <div className='px-6 py-4 border-b'>
                <h3 className='font-bold'>Recent Orders</h3>
            </div>

            <table className='w-full'>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td className='px-6 py-4'>{order.id}</td>
                            <td className='px-6 py-4'>{order.customer}</td>
                            <td className='px-6 py-4'>{order.product}</td>
                            <td className='px-6 py-4'>{order.amount}</td>
                            <td className='px-6 py-4'>
                                <span className={statusStyle[order.status]}>
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecentOrdersTable;