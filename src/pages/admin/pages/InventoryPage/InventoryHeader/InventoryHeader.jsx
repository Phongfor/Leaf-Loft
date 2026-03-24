import { LuPlus } from 'react-icons/lu';

function InventoryHeader() {
    return (
        <div className='flex items-center justify-between mb-6'>
            <div>
                <h2 className='text-2xl font-bold text-gray-900'>Product Inventory</h2>
                <p className='text-xs text-gray-400 mt-0.5'>
                    Dashboard &rsaquo; <span className='text-green-500 font-medium'>Inventory</span>
                </p>
            </div>

            <button className='flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white text-sm font-bold px-4 py-2.5 rounded-xl'>
                <LuPlus size={16} />
                ADD NEW PRODUCT
            </button>
        </div>
    );
}

export default InventoryHeader;