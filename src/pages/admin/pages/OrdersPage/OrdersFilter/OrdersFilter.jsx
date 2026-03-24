const statusFilters = ['All Orders', 'Pending', 'Shipped', 'Delivered', 'Cancelled'];

function OrdersFilter({ activeFilter, setActiveFilter }) {
    return (
        <div>
            <p className='text-xs font-bold text-gray-400 mb-3'>Filter by Status</p>

            <div className='flex gap-2 flex-wrap'>
                {statusFilters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`px-4 py-1.5 rounded-full
                            ${activeFilter === f
                                ? 'bg-green-400 text-white'
                                : 'bg-white border text-gray-600'}`}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default OrdersFilter;