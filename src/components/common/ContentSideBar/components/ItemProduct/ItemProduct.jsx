import { IoCloseOutline } from 'react-icons/io5';

function ItemProduct({ image, name, size, quantity, price, sku }) {
    return (
        <>
            <div className='flex gap-4 p-4 relative hover:bg-gray-200 cursor-pointer group'>
                <img
                    src={image}
                    alt={name}
                    className='w-20 h-20 object-cover'
                />

                <div className='flex flex-col gap-1 text-sm text-gray-700'>
                    <p className='font-medium'>{name}</p>

                    <p className='text-gray-500'>Size:{size}</p>

                    <p>
                        {quantity} × ${price}
                    </p>

                    <p className='text-gray-500'>SKU: {sku}</p>
                </div>

                <button className='absolute right-2 top-2 text-gray-500 hover:text-black opacity-0 group-hover:opacity-100 transition'>
                    <IoCloseOutline size={18} />
                </button>
            </div>
            <div className='border-t mx-10 border-gray-300'></div>
        </>
    );
}

export default ItemProduct;
