import { LuUserPlus } from 'react-icons/lu';

function CustomersHeader() {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <h2 className='text-2xl font-bold text-gray-900'>Customer Directory</h2>
                <p className='text-sm text-gray-400 mt-0.5'>
                    Analyze and manage customers
                </p>
            </div>

            <button className='flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white text-sm font-bold px-4 py-2.5 rounded-xl'>
                <LuUserPlus size={16} />
                Add New Customer
            </button>
        </div>
    );
}

export default CustomersHeader;