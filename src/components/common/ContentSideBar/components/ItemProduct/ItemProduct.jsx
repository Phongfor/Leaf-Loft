import { IoCloseOutline } from 'react-icons/io5';

function ItemProduct({ image, name, size, color, quantity, price, sku, onRemove }) {
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
                    {size && <p className='text-gray-500'>Size: {size}</p>}
                    {color && <p className='text-gray-500'>Color: {color}</p>}
                    <p>{quantity} × ${price}</p>
                    {sku && <p className='text-gray-500'>SKU: {sku}</p>}
                </div>

                <button
                    onClick={onRemove}
                    className='absolute right-2 top-2 text-gray-500 hover:text-black opacity-0 group-hover:opacity-100 transition'
                >
                    <IoCloseOutline size={18} />
                </button>
            </div>
            <div className='border-t mx-10 border-gray-300' />
        </>
    );
}

export default ItemProduct;