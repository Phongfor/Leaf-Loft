import { FiShoppingCart } from 'react-icons/fi';
import { useState } from 'react';
import ActBar from '../ActBar/ActBar';

function ShopProductCard({ product }) {
    const [size, setSize] = useState(product.sizes?.[0] || '');

    return (
        <div className='group bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden'>
            {/* image */}
            <div className='relative'>
                <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-56 object-cover'
                />

                {/* badge */}
                {product.badge && (
                    <span className='absolute bottom-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded'>
                        {product.badge}
                    </span>
                )}
                <ActBar/>
            </div>

            {/* content */}
            <div className='p-4'>
                {/* brand */}
                <p className='text-xs text-gray-400 uppercase tracking-wide'>
                    {product.brand}
                </p>

                {/* name + price */}
                <div className='flex justify-between items-center mt-1'>
                    <h3 className='font-semibold text-gray-800'>
                        {product.name}
                    </h3>

                    <span className='text-green-500 font-bold'>
                        ${product.price}
                    </span>
                </div>

                {/* size */}
                {product.sizes && (
                    <div className='mt-1 text-sm text-gray-400'>
                        Size:
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className='ml-1 outline-none bg-transparent'
                        >
                            {product.sizes.map((s) => (
                                <option key={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                )}

                {/* add to cart */}
                <button className='mt-4 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition'>
                    <FiShoppingCart />
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}

export default ShopProductCard;
