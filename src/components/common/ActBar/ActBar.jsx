import { FiShoppingBag } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
import { FiRefreshCw } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';

function ActBar() {
    return (
        <div
            className='absolute right-4 top-1/2 -translate-y-7 
        flex flex-col bg-white rounded-xl shadow-lg
        opacity-0 translate-x-5
        group-hover:opacity-100 group-hover:translate-x-0
        transition duration-300 overflow-hidden'
        >
            <button className='p-3 hover:bg-second-light cursor-pointer'>
                <FiShoppingBag />
            </button>

            <button className='p-3 hover:bg-second-light cursor-pointer '>
                <FiHeart />
            </button>

            <button className='p-3 hover:bg-second-light cursor-pointer '>
                <FiEye />
            </button>
        </div>
    );
}

export default ActBar;
