import { LuPlus, LuDownload } from 'react-icons/lu';

function OrdersHeader() {
    return (
        <div className='bg-green-50 border border-green-100 rounded-2xl p-6 flex items-center justify-between'>
            <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-1'>Orders Management</h2>
                <p className='text-sm text-gray-500 mb-4'>
                    Track, manage and fulfill your customer orders with ease.
                </p>

                <div className='flex gap-3'>
                    <button className='flex items-center gap-2 bg-green-400 text-white px-4 py-2.5 rounded-xl'>
                        <LuPlus size={16} />
                        New Order
                    </button>

                    <button className='flex items-center gap-2 border px-4 py-2.5 rounded-xl'>
                        <LuDownload size={16} />
                        Export CSV
                    </button>
                </div>
            </div>

            <div className='text-6xl opacity-20'>🚚</div>
        </div>
    );
}

export default OrdersHeader;